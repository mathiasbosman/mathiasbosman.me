import type { Route } from "@vaadin/router";
import { Router } from "@vaadin/router";

const router = new Router();
const fallback = "(.*)";

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
    component: "sandbox-home-page",
    action: async () => {
      await import("./pages/home.page");
    },
  },
  {
    path: "/about",
    name: "About",
    component: "sandbox-about-page",
    action: async () => {
      await import("./pages/about.page");
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: "sandbox-projects-page",
    action: async () => {
      await import("./pages/projects.page");
    },
  },
  {
    path: "/experiences",
    name: "Experiences",
    component: "sandbox-experience-page",
    action: async () => {
      await import("./pages/experience.page");
    },
  },
  {
    path: fallback,
    component: "sandbox-error-page",
    action: async () => {
      await import("./pages/error.page");
    },
  },
];

const setRoutes = async (): Promise<void> => {
  await router.setRoutes(routes);
};

export { router, setRoutes, routes, fallback };
