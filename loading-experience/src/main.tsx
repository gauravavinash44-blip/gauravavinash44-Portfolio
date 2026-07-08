import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LoadingScreen } from './components/LoadingScreen';
import './styles.css';

const mountNode = document.getElementById('loading-root');

if (mountNode) {
  const root = createRoot(mountNode);

  const finishLoading = () => {
    document.body.classList.remove('is-loading');
    document.body.classList.add('landing-ready');
  };

  const cleanupLoading = () => {
    root.unmount();
    mountNode.remove();
  };

  root.render(
    <StrictMode>
      <LoadingScreen onComplete={finishLoading} onExitComplete={cleanupLoading} />
    </StrictMode>,
  );
}
