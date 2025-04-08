import type { ReactElement } from 'react';
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@models/config/navigation.config.tsx';
import '@fontsource/inter/400.css';
import '@fontsource/inter/400-italic.css';
import '@fontsource/inter/700.css';
import { PageLoader } from '@components/page-loader.tsx';
import { DelayedFallback } from '@components/common/delayed-fallback.tsx';

const router = createBrowserRouter(routes);

export const App = (): ReactElement => {
  return (
    <Suspense
      fallback={
        <DelayedFallback>
          <PageLoader />
        </DelayedFallback>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
