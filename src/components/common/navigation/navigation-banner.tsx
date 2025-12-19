import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { HTMLSimpleLink } from '@shared/utils.ts';
import { GitHubIcon, LinkedInIcon } from '@shared/icons.tsx';
import FollowIconLink from '@components/typography/folow-iconlink.tsx';
import { LINK_GITHUB, LINK_LINKEDIN } from '@/constants.ts';
import { Link, NavLink, useLocation } from 'react-router-dom';

interface Props {
  links: HTMLSimpleLink[];
  rightSlot?: ReactNode;
}

export const NavigationBanner = (props: PropsWithChildren<Props>): ReactElement => {
  const { links, rightSlot } = props;
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Close the menu whenever the route changes
  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  const currentPageLink = useMemo(() => links.find((l) => l.href === location.pathname), [links, location.pathname]);

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex-none border-b border-slate-900/10 bg-white/60 backdrop-blur-sm transition-colors duration-500 supports-backdrop-blur:bg-white/60 sm:hidden dark:border-slate-50/6 dark:bg-transparent dark:supports-backdrop-blur:bg-zinc-900/60">
        <header className="m-4 flex items-center justify-between">
          <div className="flex max-w-[calc(100%-3rem)] items-center">
            <button
              type="button"
              aria-expanded={visible}
              aria-controls="mobile-nav"
              onClick={() => setVisible((v) => !v)}
              className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
            >
              <span className="sr-only">Navigation</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Breadcrumb */}
            <ol className="ml-4 flex min-w-0 text-sm leading-6 whitespace-nowrap">
              <li className="flex items-center">
                <Link className="text-slate-900 dark:text-slate-200" to="/">
                  Mathias Bosman
                </Link>
                {currentPageLink && (
                  <svg width="3" height="6" aria-hidden="true" className="mx-3 overflow-visible text-slate-400">
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </li>
              {currentPageLink && (
                <li
                  aria-label={currentPageLink.text}
                  className="truncate font-semibold text-slate-900 dark:text-slate-200"
                >
                  {currentPageLink.text}
                </li>
              )}
            </ol>
          </div>
          <div>{rightSlot}</div>
        </header>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-xs dark:bg-black/80 ${!visible ? 'hidden' : ''}`}
        aria-hidden={!visible}
        onClick={() => setVisible(false)}
      />

      {/* Drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        className={`fixed inset-x-0 top-0 z-50 h-full w-80 max-w-[calc(100%-3rem)] origin-top scale-100 bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 ${!visible ? 'hidden' : ''}`}
        tabIndex={-1}
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <button aria-label="Close menu" className="-m-1 p-1" type="button" onClick={() => setVisible(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-zinc-500 dark:text-zinc-400"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <h2 className="font-bold text-zinc-600 dark:text-zinc-400">Navigation</h2>
        </div>

        <nav className="mt-6">
          <ul className="space-y-6 border-l border-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:border-zinc-700 dark:text-zinc-300">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `-ml-px block border-l pl-4 ${
                      isActive
                        ? 'border-current font-bold text-indigo-500'
                        : 'border-transparent hover:border-current hover:text-indigo-500'
                    }`
                  }
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className="mt-10 pt-6 font-bold text-zinc-600 dark:text-zinc-400">My social media</h2>
        <ul role="list" className="mt-6">
          <li className="mt-4 flex">
            <FollowIconLink link={LINK_GITHUB} icon={GitHubIcon} />
          </li>
          <li className="mt-4 flex">
            <FollowIconLink link={LINK_LINKEDIN} icon={LinkedInIcon} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationBanner;
