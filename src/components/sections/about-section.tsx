import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';
import SectionLabel from '@components/ui/section-label.tsx';

export const AboutSection = (): ReactElement => {
  return (
    <section className="relative overflow-hidden bg-acid text-ink dark:bg-pink dark:text-night" id="about">
      <Container className="py-24 sm:py-28 lg:pb-20 lg:pt-32">
        <SectionLabel className="text-ink/65 dark:text-night/90" label="Beyond the commit" />
        <div className="lg:col-span-8 lg:col-start-4">
          <h2 className="mt-8 max-w-[50rem] text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.06em]">
            Curious by default, practical by choice.
          </h2>
          <div className="mt-10 grid gap-6 text-sm leading-6 text-ink/70 dark:text-night/90 sm:grid-cols-2 sm:gap-10">
            {portfolioConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {portfolioConfig.about.interests.map((interest) => (
              <li
                className="rounded-full border border-ink/25 px-3 py-1.5 text-[0.625rem] font-semibold"
                key={interest}
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
