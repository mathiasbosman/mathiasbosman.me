import type { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@models/config/navigation.config.tsx";
import { PlausibleAnalytics } from "@components/analytics.tsx";

const router = createBrowserRouter(routes);

export const App = (): ReactElement => {
  return (
    <>
      <PlausibleAnalytics
        domain={"mathiasbosman.me"}
        endpoint={"https://plausible.io/js/script.js"}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
