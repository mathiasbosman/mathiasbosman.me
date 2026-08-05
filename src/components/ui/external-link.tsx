import type { AnchorHTMLAttributes, PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren, Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> {
  href: string;
}

export const ExternalLink = ({ children, className = '', href }: Props): ReactElement => {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
      <span
        aria-hidden="true"
        className="ml-1 inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </a>
  );
};

export default ExternalLink;
