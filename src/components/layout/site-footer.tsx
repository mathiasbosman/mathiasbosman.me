import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';

export const SiteFooter = (): ReactElement => {
  return (
    <footer className="bg-ink text-white dark:bg-[#07080c] dark:text-warm">
      <Container className="grid min-h-[4.75rem] grid-cols-2 items-center gap-4 py-5 text-[0.625rem] sm:grid-cols-3">
        <a
          aria-label="Mathias Bosman, back to top"
          className="w-fit text-sm font-bold tracking-[-0.04em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="#top"
        >
          MB<span className="text-acid dark:text-pink">.</span>
        </a>
        <p className="order-3 col-span-2 text-white/50 sm:order-none sm:col-span-1 sm:text-center">
          Mathias Bosman · Java software developer · Belgium
        </p>
        <a
          className="justify-self-end text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          href="#top"
        >
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </Container>
    </footer>
  );
};

export default SiteFooter;
