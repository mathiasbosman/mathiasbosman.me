import type { RouteObject } from 'react-router-dom';
import HomePage from '@pages/home-page.tsx';
import AboutPage from '@pages/about-page.tsx';
import ErrorPage from '@pages/error-page.tsx';
import ExperiencePage from '@pages/experience-page.tsx';
import ProjectsPage from '@pages/projects-page.tsx';
import AppLayout from '@/layouts/AppLayout.tsx';
import type { HTMLSimpleLink } from '@shared/utils.ts';

export const navigationLinks: HTMLSimpleLink[] = [
  { href: '/about', text: 'About' },
  { href: '/experiences', text: 'Experiences' },
  { href: '/projects', text: 'Projects' },
];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />, // stays mounted
    children: [
      {
        // Error boundary GROUP: keeps AppLayout, only this level swaps on error
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
            handle: { title: 'Home', renderAvatar: false },
          },
          {
            path: 'about',
            element: <AboutPage />,
            handle: { title: 'About', renderAvatar: true },
          },
          {
            path: 'experiences',
            element: <ExperiencePage />,
            handle: { title: 'Experiences', renderAvatar: true },
          },
          {
            path: 'projects',
            element: <ProjectsPage />,
            handle: { title: 'Projects', renderAvatar: true },
          },

          // 404 catch-all -> rendered inside AppLayout
          {
            path: '*',
            element: <ErrorPage />,
            handle: { title: '404 - Not found', renderAvatar: true },
          },
        ],
      },
    ],
  },
];
