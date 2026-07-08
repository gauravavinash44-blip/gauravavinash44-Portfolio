import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LoadingLogo } from './LoadingLogo';
import {
  FADE_MS,
  HOLD_MS,
  LoadingText,
  PHILOSOPHY_LINES,
  TOTAL_DURATION_MS,
} from './LoadingText';
type LoadingScreenProps = {
  onComplete: () => void;
  onExitComplete?: () => void;
};

export function LoadingScreen({ onComplete, onExitComplete }: LoadingScreenProps) {
  const reduceMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      onComplete();
      return;
    }

    let cancelled = false;
    const timeouts: number[] = [];

    const schedule = (delay: number, fn: () => void) => {
      timeouts.push(window.setTimeout(fn, delay));
    };

    let elapsed = HOLD_MS;

    for (let i = 1; i < PHILOSOPHY_LINES.length; i += 1) {
      const index = i;
      schedule(elapsed, () => {
        if (!cancelled) setLineIndex(index);
      });
      elapsed += HOLD_MS + FADE_MS;
    }

    schedule(TOTAL_DURATION_MS, () => {
      if (!cancelled) {
        onComplete();
        setIsExiting(true);
      }
    });

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [onComplete, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="loading-screen"
      role="status"
      aria-label="Loading portfolio"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={() => {
        if (isExiting) onExitComplete?.();
      }}
    >
      <div className="loading-screen__content">
        <LoadingLogo durationMs={TOTAL_DURATION_MS} />
        <LoadingText lineIndex={lineIndex} />
      </div>
    </motion.div>
  );
}
