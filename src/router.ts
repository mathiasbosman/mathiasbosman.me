import { Router } from "@vaadin/router";

const router = new Router();

const routes = [
  {
    path: "/",
    component: "sandbox-home-page",
    action: async () => {
      await import("./pages/home.page");
    },
  },
  {
    path: "/about",
    component: "sandbox-about-page",
    action: async () => {
      await import("./pages/about.page");
    },
  },
  {
    path: "(.*)",
    component: "sandbox-error-page",
    action: async () => {
      await import("./pages/error.page");
    },
  },
];

const setRoutes = async (): Promise<void> => {
  await router.setRoutes(routes);
};

export { router, setRoutes };
