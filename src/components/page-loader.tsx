import type { ReactElement } from 'react';
import SectionWrapper from '@components/common/section-wrapper.tsx';

export const PageLoader = (): ReactElement => {
  return (
    <div>
      <div className="z-20 h-1 bg-gradient-to-r from-violet-500 to-pink-700"></div>
      <SectionWrapper>
        <div className="container mx-auto mt-10 p-4">
          <div className="animate-pulse">
            <div className="mb-4 h-6 w-3/4 rounded bg-gray-300"></div>
          </div>

          <div className="animate-pulse">
            <div className="mb-6 h-6 w-1/4 rounded bg-gray-300"></div>
          </div>

          <div className="animate-pulse">
            <div className="mb-6 h-64 w-full rounded bg-gray-300"></div>
          </div>

          <div className="animate-pulse space-y-2">
            <div className="h-4 w-full rounded bg-gray-300"></div>
            <div className="h-4 w-5/6 rounded bg-gray-300"></div>
            <div className="h-4 w-4/6 rounded bg-gray-300"></div>
          </div>

          <div className="mt-6 animate-pulse space-y-3">
            <div className="h-4 w-1/2 rounded bg-gray-300"></div>
            <div className="h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="h-4 w-2/3 rounded bg-gray-300"></div>
            <div className="h-4 w-5/6 rounded bg-gray-300"></div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex animate-pulse space-x-4">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex animate-pulse space-x-4">
              <div className="h-10 w-16 rounded bg-gray-300"></div>
              <div className="h-10 w-16 rounded bg-gray-300"></div>
              <div className="h-10 w-16 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
