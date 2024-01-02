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

/**
 * Configuration for the routes in the application.
 * Each route is represented as an object with the following properties:
 * - link: An object representing the link for the route. It has two properties:
 *   - href: The URL path for the route.
 *   - text: The text to display for the link.
 * - element: The React component to render for the route.
 * - isPublic: A boolean indicating whether the route is public. Optional.
 * - errorElement: The React component to render if there is an error. Optional.
 *
 * @see vercel.json for the configuration of the routes in the Vercel deployment.
 * @type {RouteLink[]}
 */
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
