import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import ExternalLink from '@components/ui/external-link.tsx';
import SectionLabel from '@components/ui/section-label.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const ContactSection = (): ReactElement => {
  return (
    <section className="scroll-mt-0 bg-electric text-white" id="contact">
      <Container className="py-24 sm:py-28 lg:pb-20 lg:pt-32">
        <SectionLabel className="text-white/90" label="Contact" />
        <h2 className="mt-10 max-w-[68rem] text-[clamp(3.65rem,8vw,7.25rem)] font-normal leading-[0.88] tracking-[-0.075em]">
          <span className="block">Good software starts</span>
          <span className="block">with a useful</span>
          <span className="block">conversation.</span>
        </h2>
        <div className="mt-20 flex flex-col gap-8 border-t border-white/25 pt-7 text-xs sm:mt-24 sm:flex-row sm:items-end sm:justify-between lg:mt-28">
          <p className="max-w-[28rem] leading-5 text-white/90">
            Have an interesting technical problem, product idea or just want to compare notes?
          </p>
          <div className="flex items-center gap-8 font-semibold">
            <ExternalLink
              className="group underline decoration-white/50 underline-offset-4 transition-colors hover:text-acid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              href={portfolioConfig.social.linkedIn.href}
            >
              {portfolioConfig.social.linkedIn.label}
            </ExternalLink>
            <ExternalLink
              className="group underline decoration-white/50 underline-offset-4 transition-colors hover:text-acid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
