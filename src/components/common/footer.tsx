import type { PropsWithChildren, ReactElement } from 'react';
import type { HTMLSimpleLink } from '@shared/utils.ts';
import ThemeToggle from '@components/theme-toggle.tsx';
import { NavLink } from 'react-router-dom';

interface Props {
  links: HTMLSimpleLink[];
}

export const Footer = (props: PropsWithChildren<Props>): ReactElement => {
  return (
    <footer className="mt-32 sm:px-8">
      <div className="mx-auto mt-12 max-w-7xl lg:px-8">
        <div className="relative border-t border-zinc-100 px-16 pt-10 pb-16 dark:border-zinc-700/40">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {props.links.map((link, i) => (
                  <NavLink key={i} to={link.href} end={link.href === '/'} className="link-hover">
                    {link.text}
                  </NavLink>
                ))}
                <ThemeToggle />
              </div>
              <p className="text-center text-sm text-balance text-zinc-500">
                ©&nbsp;{new Date().getFullYear()} Mathias&nbsp;Bosman. All&nbsp;rights&nbsp;reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
