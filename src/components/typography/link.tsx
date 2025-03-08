import type { PropsWithChildren, ReactElement } from 'react';
import type { HTMLSimpleLink } from '@shared/utils.ts';

interface Props {
  link: HTMLSimpleLink;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export const Link = (props: PropsWithChildren<Props>): ReactElement => {
  const { link, target, children } = props;

  return (
    <a
      className="font-bold hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
      href={link.href}
      target={target ?? '_self'}
    >
      {children ?? link.text}
    </a>
  );
};

export default Link;
