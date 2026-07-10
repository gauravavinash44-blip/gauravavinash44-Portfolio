import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LoadingScreen } from './components/LoadingScreen';
import { SkeletonScreen } from './components/SkeletonScreen';
import {
  consumeInternalNav,
  installInternalNavCapture,
  isBackForwardNavigation,
} from './navTransition';
import './styles.css';

installInternalNavCapture();

const mountNode = document.getElementById('loading-root');

if (mountNode) {
  const root = createRoot(mountNode);
  const forcedSkeleton = mountNode.dataset.loader === 'skeleton';
  const fromInternalNav = consumeInternalNav();
  // Home: full intro on first visit + hard refresh; skeleton for in-site hops / back.
  // Case studies: always skeleton (never the branded intro).
  const useSkeleton =
    forcedSkeleton || fromInternalNav || (!forcedSkeleton && isBackForwardNavigation());

  if (useSkeleton) {
    document.body.classList.add('is-returning');
  }

  const finishLoading = () => {
    document.body.classList.remove('is-loading', 'is-returning');
    document.body.classList.add('landing-ready');
  };

  const cleanupLoading = () => {
    root.unmount();
    mountNode.remove();
  };

  root.render(
    <StrictMode>
      {useSkeleton ? (
        <SkeletonScreen onComplete={finishLoading} onExitComplete={cleanupLoading} />
      ) : (
        <LoadingScreen onComplete={finishLoading} onExitComplete={cleanupLoading} />
      )}
    </StrictMode>,
  );
}
