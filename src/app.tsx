import type { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@models/config/navigation.config.tsx";
import packageJson from "../package.json";

const router = createBrowserRouter(routes);

export const App = (): ReactElement => {

  alert(window.location.origin);
  alert(packageJson.homepage);

  return (
    <>
      {window.location.origin.includes(packageJson.homepage) && (
        <p className={"sr-only"}>test</p>
      )}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
