import type { PropsWithChildren, ReactElement } from 'react';
import type { HTMLSimpleLink } from '@shared/utils.ts';

interface Props {
  link: HTMLSimpleLink;
}

export const Link = (props: PropsWithChildren<Props>): ReactElement => {
  const { link, children } = props;

  return (
    <a
      className="hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
      href={link.href}
    >
      {children ?? link.text}
    </a>
  );
};

export default Link;
