import * as THREE from 'three';

const VERT = /* glsl */ `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const FRAG = /* glsl */ `
uniform sampler2D uTexture;
uniform float uHover;
uniform float uTime;
uniform vec2 uMouse;
uniform vec2 uUvScale;
uniform vec2 uUvOffset;
varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  // Ripple emanating from cursor
  float dist = distance(uv, uMouse);
  float ripple = sin(dist * 26.0 - uTime * 4.5) * 0.010 * uHover * smoothstep(0.45, 0.0, dist);
  vec2 dir = normalize(uv - uMouse + 0.0001);
  uv += dir * ripple;

  // Gentle global wave
  uv.x += sin(uv.y * 9.0 + uTime * 0.9) * 0.0045 * uHover;
  uv.y += cos(uv.x * 7.0 + uTime * 0.7) * 0.0035 * uHover;

  // Cover-fit correction
  vec2 tuv = uv * uUvScale + uUvOffset;

  // Chromatic shift near cursor
  float shift = 0.0045 * uHover * smoothstep(0.5, 0.0, dist);
  float r = texture2D(uTexture, tuv + vec2(shift, 0.0)).r;
  float g = texture2D(uTexture, tuv).g;
  float b = texture2D(uTexture, tuv - vec2(shift, 0.0)).b;
  float a = texture2D(uTexture, tuv).a;

  gl_FragColor = vec4(r, g, b, a);
}
`;

export class DistortImage {
  constructor(img) {
    this.img = img;
    this.hover = 0;
    this.hoverTarget = 0;
    this.mouse = new THREE.Vector2(0.5, 0.5);
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.visible = false;

    if (this.reduced) return; // keep the plain image

    if (img.complete && img.naturalWidth > 0) {
      this.init();
    } else {
      img.addEventListener('load', () => this.init(), { once: true });
    }
  }

  init() {
    const img = this.img;

    const wrap = document.createElement('div');
    wrap.className = 'distort-wrap';
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);

    const canvas = document.createElement('canvas');
    wrap.appendChild(canvas);
    this.wrap = wrap;
    this.canvas = canvas;

    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    this.camera.position.z = 1;

    const texture = new THREE.TextureLoader().load(img.src, () => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      this.resize();
      wrap.classList.add('is-ready');
    });

    this.uniforms = {
      uTexture: { value: texture },
      uHover: { value: 0 },
      uTime: { value: 0 },
      uMouse: { value: this.mouse },
      uUvScale: { value: new THREE.Vector2(1, 1) },
      uUvOffset: { value: new THREE.Vector2(0, 0) },
    };

    const quad = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: this.uniforms })
    );
    this.scene.add(quad);

    // Events
    wrap.addEventListener('pointerenter', () => { this.hoverTarget = 1; });
    wrap.addEventListener('pointerleave', () => { this.hoverTarget = 0; });
    wrap.addEventListener('pointermove', (e) => {
      const rect = wrap.getBoundingClientRect();
      this.mouse.set((e.clientX - rect.left) / rect.width, 1 - (e.clientY - rect.top) / rect.height);
    });

    this.ro = new ResizeObserver(() => this.resize());
    this.ro.observe(wrap);

    this.io = new IntersectionObserver((entries) => {
      this.visible = entries[0].isIntersecting;
    }, { threshold: 0 });
    this.io.observe(wrap);

    this.clock = new THREE.Clock();
    this.tick = this.tick.bind(this);
    requestAnimationFrame(this.tick);
  }

  resize() {
    const w = this.wrap.clientWidth;
    const h = this.wrap.clientHeight;
    if (!w || !h) return;
    this.renderer.setSize(w, h, false);

    // Cover-fit UV correction
    const imgAspect = this.img.naturalWidth / this.img.naturalHeight;
    const boxAspect = w / h;
    const scale = this.uniforms.uUvScale.value;
    const offset = this.uniforms.uUvOffset.value;
    if (boxAspect > imgAspect) {
      scale.set(1, imgAspect / boxAspect);
      offset.set(0, (1 - scale.y) / 2);
    } else {
      scale.set(boxAspect / imgAspect, 1);
      offset.set((1 - scale.x) / 2, 0);
    }
  }

  tick() {
    requestAnimationFrame(this.tick);
    if (!this.visible) return;

    this.hover += (this.hoverTarget - this.hover) * 0.08;
    this.uniforms.uHover.value = this.hover;
    this.uniforms.uTime.value = this.clock.getElapsedTime();
    this.renderer.render(this.scene, this.camera);
  }
}
