import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LoadingLogo } from './LoadingLogo';
import {
  BETWEEN_LINES_MS,
  FINAL_HOLD_MS,
  HOLD_AFTER_TYPE_MS,
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

  const handleLineComplete = useCallback((index: number) => {
    const line = PHILOSOPHY_LINES[index];
    if (!line) return;

    const advanceDelay =
      HOLD_AFTER_TYPE_MS +
      (index < PHILOSOPHY_LINES.length - 1 ? BETWEEN_LINES_MS : FINAL_HOLD_MS);

    window.setTimeout(() => {
      if (index < PHILOSOPHY_LINES.length - 1) {
        setLineIndex(index + 1);
        return;
      }
      onComplete();
      setIsExiting(true);
    }, advanceDelay);
  }, [onComplete]);

  useEffect(() => {
    if (reduceMotion) {
      onComplete();
    }
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
      <div className="loading-screen__brand">
        <img
          className="loading-screen__brand-logo"
          src="./assets/logo-ga.svg"
          alt="Gaurav Avinash"
          width="112"
          height="61"
          decoding="async"
        />
      </div>
      <div className="loading-screen__content">
        <LoadingLogo durationMs={TOTAL_DURATION_MS} />
        <LoadingText lineIndex={lineIndex} onLineComplete={handleLineComplete} />
      </div>
      <p className="loading-screen__footer">Designed &amp; Built with Cursor</p>
    </motion.div>
  );
}
