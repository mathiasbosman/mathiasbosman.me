import type { HTMLImage, HTMLSimpleLink } from '@shared/utils.ts';

import avatar from '@assets/images/mathias.webp';

export interface ProjectsConfig {
  projects: Project[];
}

export interface Project {
  pinned?: boolean;
  logo: HTMLImage;
  title: string;
  link: HTMLSimpleLink;
  description: string;
}

export const projectsConfig: ProjectsConfig = {
  projects: [
    {
      pinned: true,
      title: 'Witsb',
      logo: {
        alt: 'Witsb icon',
        src: '/assets/logos/witsb.webp',
      },
      link: {
        href: 'https://github.com/mathiasbosman/witsb',
        text: 'GitHub repo',
      },
      description:
        'Where is the save button? My take on a simple API to store files and reference them in a unique way.',
    },
    {
      pinned: false,
      logo: {
        alt: 'Lit logo',
        src: '/assets/logos/lit.webp',
      },
      title: 'Lit sandbox',
      link: {
        href: 'https://github.com/mathiasbosman/lit-sandbox',
        text: 'GitHub repo',
      },
      description: 'Sandbox project I used to learn some Lit. Uses Vite and Vitest.',
    },
    {
      pinned: true,
      logo: {
        alt: 'MQTT logo',
        src: '/assets/logos/mqtt.webp',
      },
      title: 'MQTT stress test',
      link: {
        href: 'https://github.com/mathiasbosman/mqtt-stresstest',
        text: 'GitHub repo',
      },
      description:
        'A Spring Boot application to stress test a MQTT service. Originally used to stress test ThingsBoard.',
    },
    {
      logo: {
        alt: 'Bitvavo logo',
        src: '/assets/logos/bitvavo.webp',
      },
      title: 'Cryptobot',
      link: {
        href: 'https://github.com/mathiasbosman/cryptobot',
        text: 'GitHub repo',
      },
      description:
        'A trial cryptocurrency bot integration for the Bitvavo API. Purely for academic purposes... truly. Written in Java.',
    },
    {
      pinned: true,
      logo: {
        src: avatar,
        alt: 'Avatar',
      },
      title: 'mathiasbosman.me',
      link: {
        href: 'https://github.com/mathiasbosman/mathiasbosman.me',
        text: 'GitHub repo',
      },
      description: 'This very website! Using React, Tailwind CSS and Vercel for hosting.',
    },
  ],
};
