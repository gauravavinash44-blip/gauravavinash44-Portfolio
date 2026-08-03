import * as THREE from 'three';

const INK = new THREE.Color('#2a2620');
const PAPER = new THREE.Color('#f5f2ec');
const ACCENT = new THREE.Color('#d4410b');

function makeDotTexture(color, glow) {
  const size = 64;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, color);
  g.addColorStop(glow ? 0.35 : 0.5, color);
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function initConstellation(canvas, labelLayer, featuredDefs, options = {}) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.z = 9;

  const group = new THREE.Group();
  scene.add(group);

  let worldW = 10;
  let worldH = 6.5;

  function resize() {
    const w = canvas.clientWidth || canvas.parentElement.clientWidth;
    const h = canvas.clientHeight || canvas.parentElement.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    worldH = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    worldW = worldH * camera.aspect;
  }
  resize();
  window.addEventListener('resize', resize);

  // --- Background nodes -------------------------------------------------
  const BG_COUNT = 54;
  const nodes = [];

  for (let i = 0; i < BG_COUNT; i++) {
    nodes.push({
      base: new THREE.Vector3(
        (Math.random() - 0.5) * worldW * 0.94,
        (Math.random() - 0.5) * worldH * 0.88,
        (Math.random() - 0.5) * 2.4
      ),
      freq: new THREE.Vector3(0.15 + Math.random() * 0.3, 0.15 + Math.random() * 0.3, 0.1 + Math.random() * 0.2),
      phase: new THREE.Vector3(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2),
      amp: 0.25 + Math.random() * 0.4,
      offset: new THREE.Vector3(),
      pos: new THREE.Vector3(),
      featured: false,
    });
  }

  // --- Featured nodes (labeled projects) --------------------------------
  // Normalized coordinates: x, y in [-0.5, 0.5] of world space.
  const featured = featuredDefs.map((def) => {
    const node = {
      base: new THREE.Vector3(def.nx * worldW, def.ny * worldH, 0.5),
      freq: new THREE.Vector3(0.12, 0.16, 0.1),
      phase: new THREE.Vector3(Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2),
      amp: 0.18,
      offset: new THREE.Vector3(),
      pos: new THREE.Vector3(),
      featured: true,
      def,
    };
    nodes.push(node);
    return node;
  });

  const N = nodes.length;

  // Points
  const bgGeom = new THREE.BufferGeometry();
  const bgPositions = new Float32Array(BG_COUNT * 3);
  bgGeom.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
  const bgPoints = new THREE.Points(
    bgGeom,
    new THREE.PointsMaterial({
      size: 0.09,
      map: makeDotTexture('rgba(42,38,32,1)', false),
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      sizeAttenuation: true,
    })
  );
  group.add(bgPoints);

  const ftGeom = new THREE.BufferGeometry();
  const ftPositions = new Float32Array(featured.length * 3);
  ftGeom.setAttribute('position', new THREE.BufferAttribute(ftPositions, 3));
  const ftPoints = new THREE.Points(
    ftGeom,
    new THREE.PointsMaterial({
      size: 0.26,
      map: makeDotTexture('rgba(212, 65, 11,1)', true),
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      sizeAttenuation: true,
    })
  );
  group.add(ftPoints);

  // Lines
  const MAX_LINKS = 420;
  const lineGeom = new THREE.BufferGeometry();
  const linePositions = new Float32Array(MAX_LINKS * 2 * 3);
  const lineColors = new Float32Array(MAX_LINKS * 2 * 3);
  lineGeom.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeom.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
  const lines = new THREE.LineSegments(
    lineGeom,
    new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false })
  );
  group.add(lines);

  // Labels
  const labelEls = featured.map((node) => {
    const el = document.createElement('a');
    el.className = 'hero-label';
    el.textContent = node.def.label;
    el.href = node.def.href;
    labelLayer.appendChild(el);
    return el;
  });

  // Mouse
  const mouseNdc = new THREE.Vector2(10, 10);
  const mouseWorld = new THREE.Vector3(999, 999, 0);
  let hasMouse = false;

  function onPointerMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouseNdc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseNdc.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    hasMouse = true;
  }
  window.addEventListener('pointermove', onPointerMove);

  const raycastVec = new THREE.Vector3();

  function updateMouseWorld() {
    if (!hasMouse) return;
    raycastVec.set(mouseNdc.x, mouseNdc.y, 0.5).unproject(camera);
    const dir = raycastVec.sub(camera.position).normalize();
    const t = -camera.position.z / dir.z;
    mouseWorld.copy(camera.position).addScaledVector(dir, t);
  }

  // Visibility pause
  let running = true;
  const io = new IntersectionObserver(
    (entries) => { running = entries[0].isIntersecting; },
    { threshold: 0 }
  );
  io.observe(canvas);

  const tmpA = new THREE.Vector3();
  const tmpB = new THREE.Vector3();
  const lineColor = new THREE.Color();
  const LINK_DIST = 1.45;
  const REPEL_RADIUS = 2.0;
  const REPEL_FORCE = 0.55;

  const clock = new THREE.Clock();

  function tick() {
    requestAnimationFrame(tick);
    if (!running) return;

    const t = reduced ? 0 : clock.getElapsedTime();
    updateMouseWorld();

    // Parallax tilt
    if (!reduced && hasMouse) {
      group.rotation.y += ((mouseNdc.x * 0.06) - group.rotation.y) * 0.04;
      group.rotation.x += ((-mouseNdc.y * 0.04) - group.rotation.x) * 0.04;
    }

    // Node positions
    for (let i = 0; i < N; i++) {
      const n = nodes[i];
      n.pos.set(
        n.base.x + Math.sin(t * n.freq.x + n.phase.x) * n.amp,
        n.base.y + Math.cos(t * n.freq.y + n.phase.y) * n.amp,
        n.base.z + Math.sin(t * n.freq.z + n.phase.z) * n.amp * 0.5
      );

      // Cursor repulsion (spring-smoothed)
      tmpA.subVectors(n.pos, mouseWorld);
      tmpA.z = 0;
      const d = tmpA.length();
      if (hasMouse && d < REPEL_RADIUS && d > 0.0001) {
        tmpA.normalize().multiplyScalar((REPEL_RADIUS - d) * REPEL_FORCE);
      } else {
        tmpA.set(0, 0, 0);
      }
      n.offset.lerp(tmpA, 0.07);
      n.pos.add(n.offset);
    }

    // Write point buffers
    let bi = 0;
    let fi = 0;
    for (let i = 0; i < N; i++) {
      const n = nodes[i];
      if (n.featured) {
        ftPositions[fi++] = n.pos.x;
        ftPositions[fi++] = n.pos.y;
        ftPositions[fi++] = n.pos.z;
      } else {
        bgPositions[bi++] = n.pos.x;
        bgPositions[bi++] = n.pos.y;
        bgPositions[bi++] = n.pos.z;
      }
    }
    bgGeom.attributes.position.needsUpdate = true;
    ftGeom.attributes.position.needsUpdate = true;

    // Links
    let li = 0;
    let links = 0;
    for (let i = 0; i < N && links < MAX_LINKS; i++) {
      for (let j = i + 1; j < N && links < MAX_LINKS; j++) {
        const a = nodes[i];
        const b = nodes[j];
        tmpB.subVectors(a.pos, b.pos);
        const d = tmpB.length();
        if (d > LINK_DIST) continue;

        const strength = 1 - d / LINK_DIST;
        const isAccent = a.featured || b.featured;
        lineColor.copy(PAPER).lerp(isAccent ? ACCENT : INK, strength * (isAccent ? 0.75 : 0.42));

        linePositions[li] = a.pos.x; linePositions[li + 1] = a.pos.y; linePositions[li + 2] = a.pos.z;
        linePositions[li + 3] = b.pos.x; linePositions[li + 4] = b.pos.y; linePositions[li + 5] = b.pos.z;
        lineColors[li] = lineColor.r; lineColors[li + 1] = lineColor.g; lineColors[li + 2] = lineColor.b;
        lineColors[li + 3] = lineColor.r; lineColors[li + 4] = lineColor.g; lineColors[li + 5] = lineColor.b;

        li += 6;
        links++;
      }
    }
    lineGeom.setDrawRange(0, links * 2);
    lineGeom.attributes.position.needsUpdate = true;
    lineGeom.attributes.color.needsUpdate = true;

    // Labels: project 3D -> screen
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    for (let k = 0; k < featured.length; k++) {
      const n = featured[k];
      tmpA.copy(n.pos).applyMatrix4(group.matrixWorld).project(camera);
      const x = (tmpA.x * 0.5 + 0.5) * w;
      const y = (-tmpA.y * 0.5 + 0.5) * h;
      labelEls[k].style.transform = `translate(${x}px, ${y}px) translate(-50%, -160%)`;
    }

    renderer.render(scene, camera);
  }

  tick();

  return {
    destroy() {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      io.disconnect();
      renderer.dispose();
    },
  };
}
