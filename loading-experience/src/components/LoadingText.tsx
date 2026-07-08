import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const PHILOSOPHY_LINES = [
  'Every screen tells a story.',
  'Every interaction earns trust.',
  'Every decision serves a purpose.',
] as const;

export const HOLD_MS = 850;
export const FADE_MS = 350;

export const TOTAL_DURATION_MS =
  HOLD_MS + (PHILOSOPHY_LINES.length - 1) * (HOLD_MS + FADE_MS) + HOLD_MS;

type LoadingTextProps = {
  lineIndex: number;
};

export function LoadingText({ lineIndex }: LoadingTextProps) {
  const reduceMotion = useReducedMotion();
  const line = PHILOSOPHY_LINES[lineIndex] ?? PHILOSOPHY_LINES[0];

  return (
    <div className="loading-screen__text" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.p
          key={line}
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -6 }}
          transition={{
            duration: reduceMotion ? 0 : FADE_MS / 1000,
            ease: [0.4, 0, 0.2, 1],
          }}
          style={{
            margin: 0,
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(1.05rem, 2.6vw, 1.35rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            letterSpacing: '-0.015em',
            lineHeight: 1.55,
            color: '#45413d',
          }}
        >
          {line}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export { PHILOSOPHY_LINES };
