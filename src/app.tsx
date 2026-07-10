import type { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@models/config/navigation.config.tsx';
import '@fontsource/geist/400.css';
import '@fontsource/geist/400-italic.css';
import '@fontsource/geist/700.css';

const router = createBrowserRouter(routes);

export const App = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
