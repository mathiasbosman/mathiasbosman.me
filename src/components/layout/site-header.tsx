import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import ExternalLink from '@components/ui/external-link.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const SiteHeader = (): ReactElement => {
  return (
    <header className="relative z-20 border-b border-ink/10 bg-paper" id="top">
      <a
        className="absolute left-4 top-2 z-50 -translate-y-20 bg-ink px-4 py-2 text-xs font-semibold text-white transition-transform focus:translate-y-0"
        href="#main-content"
      >
        Skip to content
      </a>
      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <a
          aria-label="Mathias Bosman, back to top"
          className="text-sm font-bold tracking-[-0.04em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
          href="#top"
        >
          MB<span className="text-electric">.</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[0.6875rem] font-semibold text-ink sm:flex lg:gap-12"
        >
          {portfolioConfig.navigation.map((item) => (
            <a
              className="decoration-electric decoration-2 underline-offset-4 transition-colors hover:text-electric hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ExternalLink
          className="group text-[0.6875rem] font-semibold underline decoration-ink/40 underline-offset-4 transition-colors hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
          href={portfolioConfig.social.linkedIn.href}
        >
          {portfolioConfig.social.linkedIn.label}
        </ExternalLink>
      </Container>
    </header>
  );
};

export default SiteHeader;
