import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { useState } from 'react';
import type { HTMLSimpleLink } from '@shared/utils.ts';
import { GitHubIcon, LinkedInIcon } from '@shared/icons.ts';
import FollowIconLink from '@components/typography/folow-iconlink.tsx';
import { LINK_GITHUB, LINK_LINKEDIN } from '@/constants.ts';

interface Props {
  links: HTMLSimpleLink[];
  location: string;
  rightSlot?: ReactNode;
}

export const NavigationBanner = (props: PropsWithChildren<Props>): ReactElement => {
  const [visible, setVisible] = useState(false);
  const { links, location, rightSlot } = props;
  const currentPageLink = links.find((link) => link.href === location);

  return (
    <>
      <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-50 w-full flex-none border-b border-slate-900/10 bg-white/95 backdrop-blur transition-colors duration-500 sm:hidden dark:border-slate-50/[0.06] dark:bg-transparent">
        <header className="m-4 flex items-center justify-between">
          <div className="flex max-w-[calc(100%-3rem)] items-center">
            <button
              type="button"
              aria-expanded={true}
              onClick={() => setVisible(!visible)}
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
            <ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
              <li className="flex items-center">
                <a href="/">Mathias Bosman</a>
                {currentPageLink && (
                  <svg width="3" height="6" aria-hidden="true" className="mx-3 overflow-visible text-slate-400">
                    <path
                      d="M0 0L3 3L0 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    ></path>
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
      <div
        className={`fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80 ${!visible ? 'hidden' : ''}`}
        aria-hidden={!visible}
      ></div>
      <div
        className={`fixed inset-x-0 top-0 z-50 h-full w-80 max-w-[calc(100%-3rem)] origin-top scale-100 bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 ${!visible ? 'hidden' : ''}`}
        tabIndex={-1}
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <button
            aria-label="Close menu"
            className="-m-1 p-1"
            type="button"
            tabIndex={0}
            onClick={() => setVisible(!visible)}
          >
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
            {links.map((link, i) => (
              <li key={i}>
                <a
                  className={`-ml-px block border-l pl-4 ${currentPageLink === link ? 'border-current font-bold text-indigo-500' : 'border-transparent hover:border-current hover:text-indigo-500'}`}
                  href={link.href}
                >
                  {link.text}
                </a>
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
