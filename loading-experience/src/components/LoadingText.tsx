import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const PHILOSOPHY_LINES = [
  'Every screen tells a story.',
  'Every interaction earns trust.',
] as const;

export const CHAR_MS = 42;
export const HOLD_AFTER_TYPE_MS = 1100;
export const BETWEEN_LINES_MS = 280;
export const FINAL_HOLD_MS = 900;

function lineTypeDuration(line: string) {
  return line.length * CHAR_MS;
}

export const TOTAL_DURATION_MS =
  PHILOSOPHY_LINES.reduce((sum, line, index) => {
    const typing = lineTypeDuration(line);
    const hold = HOLD_AFTER_TYPE_MS;
    const gap = index < PHILOSOPHY_LINES.length - 1 ? BETWEEN_LINES_MS : FINAL_HOLD_MS;
    return sum + typing + hold + gap;
  }, 0);

type LoadingTextProps = {
  lineIndex: number;
  onLineComplete?: (index: number) => void;
};

export function LoadingText({ lineIndex, onLineComplete }: LoadingTextProps) {
  const reduceMotion = useReducedMotion();
  const line = PHILOSOPHY_LINES[lineIndex] ?? PHILOSOPHY_LINES[0];
  const [visibleCount, setVisibleCount] = useState(reduceMotion ? line.length : 0);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleCount(line.length);
      onLineComplete?.(lineIndex);
      return;
    }

    setVisibleCount(0);
    let cancelled = false;
    let i = 0;
    const id = window.setInterval(() => {
      if (cancelled) return;
      i += 1;
      setVisibleCount(i);
      if (i >= line.length) {
        window.clearInterval(id);
        onLineComplete?.(lineIndex);
      }
    }, CHAR_MS);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, [line, lineIndex, onLineComplete, reduceMotion]);

  return (
    <div className="loading-screen__text" aria-live="polite">
      <p className="loading-screen__typed">
        <span>{line.slice(0, visibleCount)}</span>
        <span
          className={`loading-screen__caret${visibleCount >= line.length ? ' is-done' : ''}`}
          aria-hidden="true"
        />
      </p>
    </div>
  );
}

export { PHILOSOPHY_LINES };
