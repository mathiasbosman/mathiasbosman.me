import type { HTMLImage, HTMLSimpleLink } from "@shared/utils.ts";
import { Period } from "@shared/utils.ts";

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
        src: "/assets/logos/flemishGov.webp",
      },
      items: [
        {
          period: new Period(new Date(2022, 11)),
          title: "IT project manager",
          pinned: true,
          description:
            "Team lead and project manager of a small software developer team who develop and maintain business applications for the department of environment.",
          link: {
            href: "https://www.vlaanderen.be/en/environment",
            text: "Department of Environment",
          },
        },
        {
          period: new Period(new Date(2018, 9), new Date(2022, 11)),
          title: "Java developer",
          pinned: true,
          description:
            "Part of a devops team at the department of environment.",
        },
        {
          period: new Period(new Date(2016, 10), new Date(2018, 9)),
          title: "Application manager",
          description:
            "Application manager for one of the most used applications at the department of environment.",
        },
        {
          period: new Period(new Date(2016, 2), new Date(2016, 8)),
          title: "Personnel administration",
        },
        {
          period: new Period(new Date(2013, 10), new Date(2016, 8)),
          title: "Expert personnel system & IT-support",
        },
      ],
    },
    {
      place: "Echoweb",
      logo: {
        alt: "Echoweb logo",
        src: "/assets/logos/echoweb.webp",
      },
      items: [
        {
          period: new Period(new Date(2013, 2), new Date(2013, 10)),
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
        src: "/assets/logos/procius.webp",
      },
      items: [
        {
          period: new Period(new Date(2012, 6), new Date(2012, 12)),
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
