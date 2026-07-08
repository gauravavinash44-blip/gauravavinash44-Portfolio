import { motion, useReducedMotion } from 'framer-motion';

type LoadingProgressProps = {
  durationMs: number;
};

export function LoadingProgress({ durationMs }: LoadingProgressProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'rgba(15, 14, 12, 0.07)',
      }}
    >
      <motion.span
        style={{
          display: 'block',
          height: '100%',
          background: '#d4410b',
          borderRadius: '999px',
          transformOrigin: 'left center',
        }}
        initial={{ width: reduceMotion ? '100%' : '0%' }}
        animate={{ width: '100%' }}
        transition={{
          duration: reduceMotion ? 0 : durationMs / 1000,
          ease: [0.4, 0, 0.2, 1],
        }}
      />
    </div>
  );
}
