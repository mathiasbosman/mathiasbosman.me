import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

export const DelayedFallback = ({ delay = 200, children }: { delay?: number; children: ReactNode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return show ? <>{children}</> : null;
};
