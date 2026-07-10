import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SKELETON_HOLD_MS = 720;
const SKELETON_EXIT_MS = 420;

type SkeletonScreenProps = {
  onComplete: () => void;
  onExitComplete?: () => void;
};

export function SkeletonScreen({ onComplete, onExitComplete }: SkeletonScreenProps) {
  const reduceMotion = useReducedMotion();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      onComplete();
      onExitComplete?.();
      return;
    }

    const revealId = window.setTimeout(() => {
      onComplete();
      setIsExiting(true);
    }, SKELETON_HOLD_MS);

    return () => window.clearTimeout(revealId);
  }, [onComplete, onExitComplete, reduceMotion]);

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="skeleton-screen"
      role="status"
      aria-label="Loading page"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: SKELETON_EXIT_MS / 1000, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={() => {
        if (isExiting) onExitComplete?.();
      }}
    >
      <div className="skeleton-screen__nav" aria-hidden="true">
        <span className="skeleton-bone skeleton-bone--logo" />
        <div className="skeleton-screen__nav-links">
          <span className="skeleton-bone skeleton-bone--link" />
          <span className="skeleton-bone skeleton-bone--link" />
          <span className="skeleton-bone skeleton-bone--link" />
          <span className="skeleton-bone skeleton-bone--link" />
        </div>
      </div>

      <div className="skeleton-screen__hero" aria-hidden="true">
        <div className="skeleton-screen__copy">
          <span className="skeleton-bone skeleton-bone--tag" />
          <span className="skeleton-bone skeleton-bone--title skeleton-bone--title-lg" />
          <span className="skeleton-bone skeleton-bone--title" />
          <span className="skeleton-bone skeleton-bone--title skeleton-bone--title-md" />
          <span className="skeleton-bone skeleton-bone--sub" />
          <span className="skeleton-bone skeleton-bone--sub skeleton-bone--sub-short" />
          <span className="skeleton-bone skeleton-bone--cta" />
        </div>
        <div className="skeleton-screen__glow" />
      </div>
    </motion.div>
  );
}
