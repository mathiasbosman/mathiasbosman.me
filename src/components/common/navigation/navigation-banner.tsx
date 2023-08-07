import type { PropsWithChildren, ReactElement } from "react";
import type { HTMLSimpleLink } from "@shared/utils.ts";
import { Link } from "react-router-dom";
import {
  CloseIcon,
  GitHubIcon,
  HamburgerIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@shared/icons.ts";
import { useState } from "react";
import FollowIconLink from "@components/typography/folow-iconlink.tsx";
import { LINK_GITHUB, LINK_LINKEDIN, LINK_TWITTER } from "@/constants.ts";

interface Props {
  links: HTMLSimpleLink[];
  location: string;
}

export const NavigationBanner = (
  props: PropsWithChildren<Props>,
): ReactElement => {
  const [visible, setVisible] = useState(false);
  const currentPageLink = props.links.find(
    (link) => link.href === props.location,
  );

  return (
    <>
      <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-50 w-full flex-none border-b border-slate-900/10 bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent sm:hidden">
        <div className="m-4 flex items-center">
          <button
            type="button"
            aria-expanded={true}
            onClick={() => {
              setVisible(!visible);
            }}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300">
            <span className="sr-only">Navigation</span>
            <svg width="24" height="24">
              <path
                d={HamburgerIcon.svgPath}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"></path>
            </svg>
          </button>
          <ol className="ml-4 flex min-w-0 whitespace-nowrap text-sm leading-6">
            <li className="flex items-center">
              <Link to={"/"}>Mathias Bosman</Link>
              {currentPageLink && (
                <svg
                  width="3"
                  height="6"
                  aria-hidden="true"
                  className="mx-3 overflow-visible text-slate-400">
                  <path
                    d="M0 0L3 3L0 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"></path>
                </svg>
              )}
            </li>
            {currentPageLink && (
              <li className="truncate font-semibold text-slate-900 dark:text-slate-200">
                {currentPageLink.text}
              </li>
            )}
          </ol>
        </div>
      </div>
      <div>
        <div
          className={
            "fixed inset-0 z-50 bg-zinc-800/40 opacity-100 backdrop-blur-sm dark:bg-black/80 " +
            (!visible ? "hidden" : "")
          }
          aria-hidden={!visible}></div>
        <div
          className={
            "fixed inset-x-0 top-0 z-50 h-full w-80 max-w-[calc(100%-3rem)] origin-top scale-100 bg-white p-8 opacity-100 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 " +
            (!visible ? "hidden" : "")
          }
          tabIndex={-1}>
          <div className={"flex flex-row-reverse items-center justify-between"}>
            <button
              aria-label={"Close menu"}
              className={"-m-1 p-1"}
              type={"button"}
              tabIndex={0}
              onClick={() => {
                setVisible(!visible);
              }}>
              <svg
                viewBox={"0 0 24 24"}
                aria-hidden={!visible}
                className={"h-6 w-6 text-zinc-500 dark:text-zinc-400"}>
                <path
                  d={CloseIcon.svgPath}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeWidth={1.5}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}></path>
              </svg>
            </button>
            <h2 className={"font-bold text-zinc-600 dark:text-zinc-400"}>
              Navigation
            </h2>
          </div>
          <nav className={"mt-6"}>
            <ul
              className={
                "space-y-6 border-l border-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:border-zinc-700 dark:text-zinc-300"
              }>
              {props.links.map((link, i) => {
                return (
                  <li key={i}>
                    {currentPageLink === link ? (
                      <Link
                        className={
                          "-ml-px block border-l border-current pl-4 font-bold text-indigo-500"
                        }
                        to={link.href}>
                        {link.text}
                      </Link>
                    ) : (
                      <Link
                        className={
                          "-ml-px block border-l border-transparent pl-4 hover:border-current hover:text-indigo-500"
                        }
                        to={link.href}>
                        {link.text}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <h2
            className={"mt-10 pt-6 font-bold text-zinc-600 dark:text-zinc-400"}>
            My social media
          </h2>
          <ul role={"list"} className={"mt-6"}>
            <li className={"mt-4 flex"}>
              <FollowIconLink link={LINK_GITHUB} icon={GitHubIcon} />
            </li>
            <li className={"mt-4 flex"}>
              <FollowIconLink link={LINK_LINKEDIN} icon={LinkedInIcon} />
            </li>
            <li className={"mt-4 flex"}>
              <FollowIconLink link={LINK_TWITTER} icon={TwitterIcon} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBanner;
