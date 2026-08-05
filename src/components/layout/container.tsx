import type { PropsWithChildren, ReactElement } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

export const Container = ({ children, className = '' }: Props): ReactElement => {
  return <div className={`mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16 xl:px-20 ${className}`}>{children}</div>;
};

export default Container;
