import type { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@models/config/navigation.config.tsx";
import packageInfo from "../package.json";
import { Analytics } from "@components/analytics.tsx";

const router = createBrowserRouter(routes);

export const App = (): ReactElement => {

  return (
    <>
      {window.location.origin.includes(packageInfo.homepage) && (
        <Analytics
          endpoint={"https://stats.beanleaf.be/js/container_FpHyoHNp.js"}
        />
      )}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
