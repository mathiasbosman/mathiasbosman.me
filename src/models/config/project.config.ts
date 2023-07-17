import type { HTMLImage, HTMLSimpleLink } from "../../shared/utils.ts";
import avatar from "../../assets/mathias.webp";

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

export const config: ProjectsConfig = {
  projects: [
    {
      pinned: true,
      logo: {
        alt: "Lit logo",
        src: "/logos/lit.webp",
      },
      title: "Lit sandbox",
      link: {
        href: "https://github.com/mathiasbosman/lit-sandbox",
        text: "GitHub repo",
      },
      description:
        "Sandbox project I used to learn some Lit. Uses Vite and Vitest. It also served as the base for this website.",
    },
    {
      pinned: true,
      logo: {
        alt: "MQTT logo",
        src: "/logos/mqtt.webp",
      },
      title: "MQTT stress test",
      link: {
        href: "https://github.com/mathiasbosman/mqtt-stresstest",
        text: "GitHub repo",
      },
      description:
        "A Spring Boot application to stress test a MQTT service. Originally used to stress test ThingsBoard.",
    },
    {
      logo: {
        alt: "Bitvavo logo",
        src: "/logos/bitvavo.webp",
      },
      title: "Cryptobot",
      link: {
        href: "https://github.com/mathiasbosman/cryptobot",
        text: "GitHub repo",
      },
      description:
        "A trial cryptocurrency bot integration for the Bitvavo API. Purely for academic purposes... truly. Written in Java",
    },
    {
      pinned: true,
      logo: {
        src: avatar,
        alt: "Avatar",
      },
      title: "mathiasbosman.be",
      link: {
        href: "#",
        text: "mathiasbosman.be",
      },
      description:
        "This very website! Using Lit web components and Tailwind CSS.",
    },
  ],
};
