import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import SectionLabel from '@components/ui/section-label.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const FocusSection = (): ReactElement => {
  return (
    <section className="scroll-mt-0 bg-ink text-white dark:bg-charcoal dark:text-warm" id="work">
      <Container className="py-24 sm:py-28 lg:py-36">
        <SectionLabel className="text-white/50 dark:text-warm/50" label="Current focus" />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <h2 className="max-w-[46rem] text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[0.98] tracking-[-0.06em] lg:col-span-7">
            Building workforce software that respects the{' '}
            <span className="font-serif italic tracking-[-0.035em] dark:text-pink">complexity</span> of real work.
          </h2>
          <div className="space-y-6 text-sm leading-7 text-white/65 dark:text-warm/60 sm:text-base lg:col-span-4 lg:col-start-9 lg:pt-2">
            {portfolioConfig.focus.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ul className="mt-14 flex flex-wrap gap-2.5 lg:mt-16">
          {portfolioConfig.focus.technologies.map((technology) => (
            <li
              className="rounded-full border border-white/20 px-4 py-2 text-[0.625rem] font-medium text-white/70 dark:border-warm/25 dark:text-warm/65"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default FocusSection;
