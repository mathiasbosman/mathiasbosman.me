export interface NavigationItem {
  href: `#${string}`;
  label: string;
}

export interface ExternalLinkConfig {
  href: string;
  label: string;
}

export interface StatConfig {
  label: string;
  value: string;
}

export interface ExperienceEntry {
  company: ExternalLinkConfig;
  current?: boolean;
  description: string;
  period: string;
  role: string;
}

export interface ProjectEntry {
  description: string;
  link: ExternalLinkConfig;
  stack: string[];
}

export interface ToolboxGroup {
  label: string;
  skills: string[];
}

const CAREER_START_YEAR = 2012;
const yearsInSoftware = new Date().getFullYear() - CAREER_START_YEAR;

export const portfolioConfig = {
  navigation: [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ] satisfies NavigationItem[],
  social: {
    github: {
      href: 'https://github.com/mathiasbosman',
      label: 'GitHub',
    },
    linkedIn: {
      href: 'https://linkedin.com/in/mathiasbosman',
      label: 'LinkedIn',
    },
  } satisfies Record<string, ExternalLinkConfig>,
  hero: {
    eyebrow: 'Java software developer · Belgium',
    introduction:
      'I’m Mathias, a backend engineer who turns complex operational rules into maintainable Java and Spring Boot products.',
    stats: [
      { value: `${yearsInSoftware}+`, label: 'Years in software' },
      { value: 'Java', label: 'Backend focused' },
      { value: '01', label: 'Product mindset' },
    ] satisfies StatConfig[],
  },
  focus: {
    description: [
      'At Déhora Belgium, I work on Planpoint software for workforce management, planning and time registration.',
      'My work spans backend architecture, integrations, security and performance; always with an eye on the people using the product every day.',
    ],
    technologies: ['Java 21', 'Spring Boot', 'REST APIs', 'SQL Server', 'React', 'Azure'],
  },
  experience: [
    {
      period: '2024 - now',
      role: 'Back-end developer',
      company: { href: 'https://dehora.be/', label: 'Déhora Belgium' },
      description:
        'Developing and maintaining Planpoint, a workforce management suite for planning and time registration.',
      current: true,
    },
    {
      period: '2022 - 2024',
      role: 'IT project manager',
      company: { href: 'https://www.vlaanderen.be/en/environment', label: 'Flemish Government' },
      description:
        'Team lead and project manager for a small software team building business applications for the Department of Environment.',
    },
    {
      period: '2018 - 2022',
      role: 'Java developer',
      company: { href: 'https://www.vlaanderen.be/en/environment', label: 'Flemish Government' },
      description: 'Part of a DevOps team responsible for dependable public-sector applications.',
    },
    {
      period: '2013 - 2018',
      role: 'Application & systems specialist',
      company: { href: 'https://www.vlaanderen.be/en', label: 'Flemish Government' },
      description:
        'Moved from personnel systems and IT support into application management: the bridge from operations to software engineering.',
    },
    {
      period: '2012 - 2013',
      role: 'PHP developer',
      company: { href: 'https://www.echoweb.be/', label: 'Procius · Echoweb' },
      description:
        'Started in the United Kingdom with a six-month internship, then built an integrable recruitment and evaluation platform in Belgium.',
    },
  ] satisfies ExperienceEntry[],
  projects: [
    {
      description: 'An open-source storage API for immutable file references.',
      link: { href: 'https://github.com/mathiasbosman/witsb', label: 'Witsb' },
      stack: ['Java', 'Spring Boot', 'Docker', 'PostgreSQL'],
    },
    {
      description: 'A load-test harness for MQTT infrastructures and brokers.',
      link: { href: 'https://github.com/mathiasbosman/mqtt-stresstest', label: 'MQTT stress test' },
      stack: ['Java', 'Spring Boot', 'MQTT', 'Docker'],
    },
    {
      description: 'A frontend playground for learning Lit with modern tooling.',
      link: { href: 'https://github.com/mathiasbosman/lit-sandbox', label: 'Lit sandbox' },
      stack: ['TypeScript', 'Lit', 'Vite', 'Vitest'],
    },
  ] satisfies ProjectEntry[],
  toolbox: [
    {
      label: 'Backend',
      skills: ['Java', 'Spring Boot', 'REST APIs', 'Spring Security', 'OpenAPI', 'WebSocket & SSE'],
    },
    {
      label: 'Data',
      skills: ['SQL Server', 'PostgreSQL', 'JPA / Hibernate', 'Query tuning', 'Data modeling'],
    },
    {
      label: 'Frontend',
      skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Accessible UI'],
    },
    {
      label: 'Delivery',
      skills: ['Maven', 'GitLab CI', 'Docker', 'Tomcat', 'Linux', 'Azure'],
    },
  ] satisfies ToolboxGroup[],
  about: {
    paragraphs: [
      'I started building things with Game Maker in the late nineties, moved through Pascal and PHP, and found my professional home in Java. A bachelor’s degree in Programming & Multimedia turned that curiosity into a career.',
      'I also trained as a stage-lighting technician; a second passion that still shapes how I think about timing, detail and audience experience. Away from a screen, you’ll usually find me swimming, cycling, at the theatre or out on my motorbike.',
    ],
    interests: ['Swimming', 'Cycling', 'Stage lighting', 'Motorcycles', 'Theme parks', 'Networks'],
  },
} as const;
