import type { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@models/config/navigation.config.tsx";

const router = createBrowserRouter(routes);

export const App = (): ReactElement => {

  console.log(process.env);

  return (
    <>
      {window.location.origin.includes("mathiasbosman-me") && (
        <p className={"sr-only"}>dummy-analytics</p>
      )}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
