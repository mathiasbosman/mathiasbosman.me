import type { ReactElement } from 'react';

interface Props {
  className?: string;
  label: string;
}

export const SectionLabel = ({ className = '', label }: Props): ReactElement => {
  return (
    <p className={`text-[0.625rem] font-bold uppercase tracking-[0.2em] ${className}`}>
      <span aria-hidden="true" className="dark:text-pink">
        /
      </span>
      &nbsp;{label}
    </p>
  );
};

export default SectionLabel;
