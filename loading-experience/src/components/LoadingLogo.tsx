import { motion, useReducedMotion } from 'framer-motion';

const ACCENT = '#d4410b';
const SIZE = 72;
const CENTER = SIZE / 2;
const RING_RADIUS = 18;
const RING_STROKE = 1.5;
const DOT_RADIUS = 5;
const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

type LoadingLogoProps = {
  durationMs: number;
};

/**
 * Cursor-inspired loading mark — orange dot + ring that draws clockwise from 12 o'clock.
 */
export function LoadingLogo({ durationMs }: LoadingLogoProps) {
  const reduceMotion = useReducedMotion();
  const durationSec = durationMs / 1000;

  return (
    <motion.div
      className="loading-screen__logo"
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Loading"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RING_RADIUS}
          stroke="rgba(212, 65, 11, 0.12)"
          strokeWidth={RING_STROKE}
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={RING_RADIUS}
          stroke={ACCENT}
          strokeWidth={RING_STROKE}
          strokeLinecap="round"
          fill="none"
          strokeDasharray={CIRCUMFERENCE}
          initial={{ strokeDashoffset: reduceMotion ? 0 : CIRCUMFERENCE }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: reduceMotion ? 0 : durationSec,
            delay: reduceMotion ? 0 : 0.2,
            ease: [0.4, 0, 0.2, 1],
          }}
          transform={`rotate(-90 ${CENTER} ${CENTER})`}
        />
        <motion.circle
          cx={CENTER}
          cy={CENTER}
          r={DOT_RADIUS}
          fill={ACCENT}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </motion.div>
  );
}
