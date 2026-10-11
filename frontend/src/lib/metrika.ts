const TAG_URL = 'https://mc.yandex.ru/metrika/tag.js';

type Metrika = {
  (...args: unknown[]): void;
  a?: unknown[][];
  l?: number;
};

declare global {
  interface Window {
    ym?: Metrika;
  }
}

// Loads the counter only after the page itself has finished loading,
// so analytics never competes with the first render.
export function initMetrika(counterId: number) {
  const ym: Metrika = (...args) => {
    (ym.a = ym.a || []).push(args);
  };
  ym.l = Date.now();
  window.ym = ym;

  ym(counterId, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  });

  const loadTag = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = TAG_URL;
    document.head.appendChild(script);
  };

  if (document.readyState === 'complete') {
    loadTag();
  } else {
    window.addEventListener('load', loadTag, { once: true });
  }
}
