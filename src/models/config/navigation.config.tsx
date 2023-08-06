import type { HTMLSimpleLink } from "@shared/utils.ts";
import React from "react";
import type { RouteObject } from "react-router-dom";
import HomePage from "@pages/home-page.tsx";
import AboutPage from "@pages/about-page.tsx";
import ErrorPage from "@pages/error-page.tsx";
import ExperiencePage from "@pages/experience-page.tsx";
import ProjectsPage from "@pages/projects-page.tsx";

interface RouteLink {
  link: HTMLSimpleLink;
  element: React.ReactNode;
  isPublic?: boolean;
  errorElement?: React.ReactElement;
}

export const routeConfig: RouteLink[] = [
  {
    link: { href: "/", text: "Home" },
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    link: { href: "/about", text: "About" },
    isPublic: true,
    element: <AboutPage />,
  },
  {
    link: { href: "/experiences", text: "Experiences" },
    isPublic: true,
    element: <ExperiencePage />,
  },
  {
    link: { href: "/projects", text: "Projects" },
    isPublic: true,
    element: <ProjectsPage />,
  },
  {
    link: { href: "/404", text: "Not found" },
    element: <ErrorPage />,
  },
];

export const publicPages: HTMLSimpleLink[] = routeConfig
  .filter((routeLInk) => routeLInk.isPublic)
  .map((routeLink) => {
    return routeLink.link;
  });

export const routes: RouteObject[] = routeConfig.map((routeLink) => {
  return {
    path: routeLink.link.href,
    element: routeLink.element,
    errorElement: routeLink.errorElement,
  };
});
