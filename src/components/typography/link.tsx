import type { MouseEvent, MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import type { HTMLSimpleLink } from '@shared/utils.ts';

interface Props {
  link: HTMLSimpleLink;
  target?: '_blank' | '_self' | '_parent' | '_top';
  scrollIntoView?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const Link = (props: PropsWithChildren<Props>): ReactElement => {
  const { link, target, scrollIntoView, onClick, children } = props;

  const scrollInView = (link: HTMLSimpleLink): void => {
    const elementId = link.href.split('#')[1];
    const projectsSection = document.getElementById(elementId);
    if (!projectsSection) {
      window.location.hash = elementId;
      return;
    }

    window.history.replaceState(null, '', link.href);
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (onClick) {
      event.preventDefault();
      onClick(event);
    }
    if (scrollIntoView) {
      event.preventDefault();
      scrollInView(link);
    }
  };

  return (
    <a
      className="font-bold hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent"
      href={link.href}
      target={target ?? '_self'}
      onClick={handleClick}
    >
      {children ?? link.text}
    </a>
  );
};

export default Link;
