import type { PropsWithChildren, ReactElement } from 'react';
import type { Icon } from '@shared/icons.ts';
import type { HTMLSimpleLink } from '@shared/utils.ts';

interface Props {
  link: HTMLSimpleLink;
  icon: Icon;
}

export const SocialIconlink = (props: PropsWithChildren<Props>): ReactElement => {
  const { link, icon } = props;

  return (
    <a className="group -m-1 p-1" aria-label={`Follow on ${icon.name}`} href={link.href}>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
      >
        <path fillRule="evenodd" clipRule="evenodd" d={icon.svgPath}></path>
      </svg>
    </a>
  );
};

export default SocialIconlink;