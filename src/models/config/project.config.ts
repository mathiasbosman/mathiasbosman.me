import type { HTMLImage, HTMLSimpleLink } from '@shared/utils.ts';

export interface ProjectsConfig {
  projects: Project[];
}

export interface Project {
  pinned?: boolean;
  preview: HTMLImage;
  title: string;
  description: string;
  technologies: string[];
  links: ProjectLinks;
}

export interface ProjectLinks {
  github: HTMLSimpleLink;
  demo?: HTMLSimpleLink;
}

export const projectsConfig: ProjectsConfig = {
  projects: [
    {
      pinned: true,
      title: 'Witsb',
      preview: {
        alt: 'Witsb preview',
        src: '/assets/logos/witsb.svg',
      },
      links: {
        github: {
          href: 'https://github.com/mathiasbosman/witsb',
          text: 'GitHub',
        },
      },
      technologies: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
      description: 'Open-source storage API for immutable file references.',
    },
    {
      pinned: false,
      preview: {
        alt: 'Lit sandbox preview',
        src: '/assets/logos/lit.svg',
      },
      title: 'Lit sandbox',
      links: {
        github: {
          href: 'https://github.com/mathiasbosman/lit-sandbox',
          text: 'GitHub',
        },
      },
      technologies: ['TypeScript', 'Lit', 'Vite', 'Vitest'],
      description: 'Frontend playground to learn Lit with modern tooling.',
    },
    {
      pinned: true,
      preview: {
        alt: 'MQTT stress test preview',
        src: '/assets/logos/mqtt.svg',
      },
      title: 'MQTT stress test',
      links: {
        github: {
          href: 'https://github.com/mathiasbosman/mqtt-stresstest',
          text: 'GitHub',
        },
      },
      technologies: ['Java', 'Spring Boot', 'MQTT', 'Docker'],
      description: 'Load test harness for MQTT infrastructures and brokers.',
    },
    {
      preview: {
        alt: 'Cryptobot preview',
        src: '/assets/logos/bitvavo.svg',
      },
      title: 'Cryptobot',
      links: {
        github: {
          href: 'https://github.com/mathiasbosman/cryptobot',
          text: 'GitHub',
        },
      },
      technologies: ['Java', 'REST', 'Automation'],
      description: 'Experimental crypto trading bot integration for Bitvavo.',
    },
    {
      pinned: true,
      preview: {
        src: '/assets/logos/m.svg',
        alt: 'mathiasbosman.me preview',
      },
      title: 'mathiasbosman.me',
      links: {
        github: {
          href: 'https://github.com/mathiasbosman/mathiasbosman.me',
          text: 'GitHub',
        },
        demo: {
          href: 'https://mathiasbosman.me',
          text: 'Live demo',
        },
      },
      technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
      description: 'Personal website and digital garden built for speed.',
    },
  ],
};
