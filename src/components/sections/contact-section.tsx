import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import ExternalLink from '@components/ui/external-link.tsx';
import SectionLabel from '@components/ui/section-label.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const ContactSection = (): ReactElement => {
  return (
    <section
      className="relative scroll-mt-0 overflow-hidden bg-electric text-white dark:bg-charcoal dark:text-warm"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[17rem] -right-[17rem] hidden h-[38rem] w-[38rem] rounded-full bg-pink/20 dark:block lg:-bottom-[18rem] lg:-right-[8rem]"
      />
      <Container className="py-24 sm:py-28 lg:pb-20 lg:pt-32">
        <SectionLabel className="relative text-white/90 dark:text-warm/55" label="Contact" />
        <h2 className="relative mt-10 max-w-[68rem] text-[clamp(3.65rem,8vw,7.25rem)] font-normal leading-[0.88] tracking-[-0.075em]">
          <span className="block">Good software starts</span>
          <span className="block">with a useful</span>
          <span className="block">conversation.</span>
        </h2>
        <div className="relative mt-20 flex flex-col gap-8 border-t border-white/25 pt-7 text-xs sm:mt-24 sm:flex-row sm:items-end sm:justify-between lg:mt-28">
          <p className="max-w-[28rem] leading-5 text-white/90 dark:text-warm/65">
            Have an interesting technical problem, product idea or just want to compare notes?
          </p>
          <div className="flex items-center gap-8 font-semibold">
            <ExternalLink
              className="group underline decoration-white/50 underline-offset-4 transition-colors hover:text-acid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white dark:decoration-white/25 dark:hover:text-pink dark:focus-visible:outline-pink"
              href={portfolioConfig.social.linkedIn.href}
            >
              {portfolioConfig.social.linkedIn.label}
            </ExternalLink>
            <ExternalLink
              className="group underline decoration-white/50 underline-offset-4 transition-colors hover:text-acid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white dark:decoration-white/25 dark:hover:text-pink dark:focus-visible:outline-pink"
              href={portfolioConfig.social.github.href}
            >
              {portfolioConfig.social.github.label}
            </ExternalLink>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
