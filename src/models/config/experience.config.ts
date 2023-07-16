import type { HTMLImage, HTMLSimpleLink, Period } from "../../shared/utils.ts";

export interface ExperienceConfig {
  experiences: Experience[];
}

export interface Experience {
  place: string;
  logo?: HTMLImage;
  items: ExperienceItem[];
}

export interface ExperienceItem {
  title: string;
  period: Period;
  description?: string;
  link?: HTMLSimpleLink;
  pinned?: boolean;
}

export const experienceConfig: ExperienceConfig = {
  experiences: [
    {
      place: "Flemish Government",
      logo: {
        alt: "lit logo",
        src: "/logos/flemishGov.webp",
      },
      items: [
        {
          period: { from: new Date(2022, 11) },
          title: "Project manager",
          pinned: true,
          description:
            "Team lead of a small developer team who develop and maintain business applications for the department of environment.",
          link: {
            href: "https://www.vlaanderen.be/en/environment",
            text: "Department of Environment",
          },
        },
        {
          period: { from: new Date(2018, 9), to: new Date(2022, 11) },
          title: "Java developer",
          pinned: true,
          description:
            "Part of a devops team at the department of environment.",
        },
        {
          period: { from: new Date(2016, 10), to: new Date(2018, 9) },
          title: "Application manager",
          description:
            "Application manager for one of the most used applications at the department of environment.",
        },
        {
          period: { from: new Date(2016, 2), to: new Date(2016, 8) },
          title: "Personnel administration",
        },
        {
          period: { from: new Date(2013, 10), to: new Date(2016, 8) },
          title: "Expert personnel system & IT-support",
        },
      ],
    },
    {
      place: "Echoweb",
      logo: {
        alt: "Echoweb logo",
        src: "/logos/echoweb.webp",
      },
      items: [
        {
          period: { from: new Date(2013, 2), to: new Date(2013, 10) },
          title: "PHP developer",
          pinned: true,
          description:
            "Developed an integrable recruitment and evaluation system in PHP.",
          link: {
            href: "https://www.echoweb.be/",
            text: "echoweb.be",
          },
        },
      ],
    },
    {
      place: "Procius Ltd.",
      logo: {
        alt: "Procius logo",
        src: "/logos/procius.webp",
      },
      items: [
        {
          period: { from: new Date(2012, 6), to: new Date(2012, 12) },
          title: "PHP developer",
          pinned: true,
          description: "6-month internship as PHP developer.",
          link: {
            href: "https://www.procius.com",
            text: "procius.com",
          },
        },
      ],
    },
  ],
};