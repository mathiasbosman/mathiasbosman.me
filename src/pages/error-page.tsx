import PageTitle from '@components/typography/page-title.tsx';
import type { ReactElement } from 'react';

export const ErrorPage = (): ReactElement => {
  return (
    <div className={'relative mt-32 px-2 sm:px-8 lg:px-12'}>
      <div className={'mx-auto max-w-2xl text-center lg:max-w-5xl'}>
        <PageTitle title={'404 - not found'} />
        <p className={'mt-6 text-base text-zinc-500 dark:text-zinc-400'}>
          The link was a dream, A shadow of what once was— Now, nothing remains.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
