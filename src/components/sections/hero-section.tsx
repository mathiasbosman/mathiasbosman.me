import type { ReactElement } from 'react';
import profilePicture from '@assets/images/mathias_corp.webp';
import Container from '@components/layout/container.tsx';
import ExternalLink from '@components/ui/external-link.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const HeroSection = (): ReactElement => {
  return (
    <section className="relative overflow-hidden bg-paper text-ink" id="hero">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[24rem] -top-[26rem] h-[47rem] w-[47rem] rounded-full border border-electric/25 sm:-right-[20rem] sm:-top-[28rem] lg:-right-[16rem] lg:-top-[30rem] lg:h-[58rem] lg:w-[58rem]"
      />
      <Container className="relative pb-8 pt-24 sm:pt-32 lg:pb-10 lg:pt-44">
        <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2 text-[0.625rem] font-bold uppercase tracking-[0.2em] text-ink/65">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-electric" />
              {portfolioConfig.hero.eyebrow}
            </p>
            <h1 className="mt-8 max-w-[48rem] text-[clamp(3.65rem,7.3vw,6.75rem)] font-semibold leading-[0.88] tracking-[-0.075em] sm:mt-10">
              <span className="block">Software for</span>
              <span className="block">
                <span className="font-serif font-normal italic tracking-[-0.045em] text-electric">systems</span> people
              </span>
              <span className="block">rely on.</span>
            </h1>
            <p className="mt-10 max-w-[34rem] text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              {portfolioConfig.hero.introduction}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                className="bg-ink px-6 py-4 text-xs font-semibold text-white transition-colors hover:bg-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                href="#work"
              >
                Explore my work{' '}
                <span aria-hidden="true" className="ml-3">
                  &darr;
                </span>
              </a>
              <ExternalLink
                className="group text-xs font-semibold underline decoration-ink/40 underline-offset-4 transition-colors hover:text-electric focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
                href={portfolioConfig.social.github.href}
              >
                {portfolioConfig.social.github.label}
              </ExternalLink>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="relative mx-auto w-[min(82vw,24rem)] lg:mr-0 lg:w-full lg:max-w-[25rem]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-4 bg-acid sm:translate-x-4 sm:translate-y-5"
              />
              <figure className="relative rotate-[1.5deg] border-[0.375rem] border-ink bg-ink">
                <img
                  alt="Portrait of Mathias Bosman"
                  className="aspect-[4/5] w-full bg-mist object-cover contrast-[1.05] grayscale transition duration-300 hover:rotate-0 hover:grayscale-0"
                  decoding="async"
                  height="1000"
                  src={profilePicture}
                  width="800"
                />
                <figcaption className="flex items-center justify-between gap-4 px-3 py-2 text-[0.45rem] font-semibold uppercase tracking-[0.12em] text-white/80">
                  <span>Based near Dendermonde</span>
                  <span>BE · 50.98° N</span>
                </figcaption>
              </figure>
              <p
                aria-hidden="true"
                className="absolute -right-8 top-1/2 hidden -translate-y-1/2 text-[0.45rem] font-bold uppercase tracking-[0.2em] text-ink/55 [writing-mode:vertical-rl] xl:block"
              >
                Backend · product · systems
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-24 grid border-t border-ink/15 sm:grid-cols-3 lg:mt-40">
          {portfolioConfig.hero.stats.map((stat) => (
            <div
              className="flex items-baseline gap-2 border-b border-ink/15 py-5 sm:border-b-0 sm:pr-6"
              key={stat.label}
            >
              <dt className="order-2 text-[0.5625rem] font-semibold uppercase tracking-[0.16em] text-ink/65">
                {stat.label}
              </dt>
              <dd className="order-1 text-base font-semibold tracking-[-0.04em]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};

export default HeroSection;
