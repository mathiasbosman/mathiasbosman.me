import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import type { HTMLSimpleLink } from '@shared/utils';
import { NavLink } from 'react-router-dom';

interface Props {
  leftSlot: ReactNode;
  rightSlot?: ReactNode;
  links: HTMLSimpleLink[];
}

export const Navigation = (props: PropsWithChildren<Props>): ReactElement => {
  const { leftSlot, rightSlot, links } = props;

  return (
    <div className="mt-8 hidden flex-row items-center justify-between px-4 sm:flex md:justify-center md:px-2">
      <div className="flex md:basis-1/3">{leftSlot}</div>

      <div className="flex md:basis-1/3 md:justify-center">
        <nav aria-label="Primary" className="pointer-events-auto inline-block md:basis-1/3 md:justify-center">
          <ul className="flex rounded-lg bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {links.map((link) => (
              <li key={link.href} className="list-none">
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className="relative inline-block p-2 px-3 hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
                >
                  {({ isActive }) => (
                    <>
                      {link.text}
                      {isActive && (
                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-violet-400/0 via-fuchsia-500/40 to-pink-600/0" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="md:basis-1/3">{rightSlot}</div>
    </div>
  );
};

export default Navigation;
