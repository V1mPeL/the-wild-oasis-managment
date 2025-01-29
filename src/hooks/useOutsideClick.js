import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleСlick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener('click', handleСlick, listenCapturing);
      return () =>
        document.removeEventListener('click', handleСlick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
