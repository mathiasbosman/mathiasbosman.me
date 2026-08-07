import { useEffect, useState, type ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import ExternalLink from '@components/ui/external-link.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const SiteHeader = (): ReactElement => {
  const [isDark, setIsDark] = useState(() =>
    typeof document === 'undefined' ? false : document.documentElement.classList.contains('dark'),
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#090A0F' : '#F3F0E8');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((currentTheme) => {
      const nextTheme = !currentTheme;

      try {
        localStorage.setItem('theme', nextTheme ? 'dark' : 'light');
      } catch {
        // The in-page theme control still works when storage is blocked.
      }

      return nextTheme;
    });
  };

  return (
    <header className="relative z-20 border-b border-ink/10 bg-paper dark:border-white/10 dark:bg-night" id="top">
      <a
        className="absolute left-4 top-2 z-50 -translate-y-20 bg-ink px-4 py-2 text-xs font-semibold text-white transition-transform focus:translate-y-0 dark:bg-pink dark:text-night"
        href="#main-content"
      >
        Skip to content
      </a>
      <Container className="relative flex h-[4.5rem] items-center justify-between">
        <a
          aria-label="Mathias Bosman, back to top"
          className="text-sm font-bold tracking-[-0.04em] text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric dark:text-warm dark:focus-visible:outline-pink"
          href="#top"
        >
          MB<span className="text-electric dark:text-pink">.</span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[0.6875rem] font-semibold text-ink dark:text-warm sm:flex lg:gap-12"
        >
          {portfolioConfig.navigation.map((item) => (
            <a
              className="decoration-electric decoration-2 underline-offset-4 transition-colors hover:text-electric hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric dark:decoration-pink dark:hover:text-pink dark:focus-visible:outline-pink"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <ExternalLink
            className="group hidden text-[0.6875rem] font-semibold underline decoration-ink/40 underline-offset-4 transition-colors hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric dark:text-warm dark:decoration-white/25 dark:hover:text-pink dark:focus-visible:outline-pink lg:inline"
            href={portfolioConfig.social.linkedIn.href}
          >
            {portfolioConfig.social.linkedIn.label}
          </ExternalLink>
          <button
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
            className="bordertext-ink/70 inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:border-electric hover:bg-electric hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric dark:border-white/20 dark:text-pink dark:hover:border-pink dark:hover:bg-pink dark:hover:text-night dark:focus-visible:outline-pink"
            onClick={toggleTheme}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            type="button"
          >
            {isDark ? (
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
              >
                <path d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z" />
              </svg>
            )}
          </button>
        </div>
      </Container>
    </header>
  );
};

export default SiteHeader;
