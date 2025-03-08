import type { PropsWithChildren, ReactElement } from 'react';
import type { Icon } from '@shared/icons.ts';
import type { HTMLSimpleLink } from '@shared/utils.ts';

interface Props {
  link: HTMLSimpleLink;
  icon: Icon;
  prefix?: string;
  postfix?: string;
}

export const FollowIconLink = (props: PropsWithChildren<Props>): ReactElement => {
  const { link, icon, prefix = 'Follow me on ', postfix } = props;

  return (
    <a
      className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
      href={link.href}
      aria-label={`Follow me on ${link.text}`}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-indigo-500"
      >
        <path fillRule="evenodd" clipRule="evenodd" d={icon.svgPath}></path>
      </svg>
      <span className="ml-4">
        {prefix}
        {link.text}
        {postfix}
      </span>
    </a>
  );
};

export default FollowIconLink;
