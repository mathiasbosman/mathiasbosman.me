import type { ReactElement } from 'react';
import { Employment } from '@components/employment.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';
import Projects from '@components/projects.tsx';
import ImageCarousel from '@components/image-carousel.tsx';
import SocialIconlink from '@components/typography/social-iconlink.tsx';
import { projectsConfig } from '@models/config/project.config.ts';
import { experienceConfig } from '@models/config/experience.config.ts';
import { LINK_GITHUB, LINK_LINKEDIN } from '@/constants.ts';
import { GitHubIcon, LinkedInIcon } from '@shared/icons.tsx';
import img_corp from '@assets/images/mathias_corp.webp';
import img_luna from '@assets/images/luna.webp';
import img_phantasialand from '@assets/images/phantasialand.webp';
import img_lights from '@assets/images/mathias_lights.webp';
import img_sailing from '@assets/images/mathias_sailing.webp';
import img_office from '@assets/images/mathias_office.webp';
import img_xsr from '@assets/images/xsr125.webp';
import img_bike from '@assets/images/mathias_bike.webp';
import img_desk from '@assets/images/mathias_desk.webp';
import img_theatre from '@assets/images/mathias_theatre.webp';
import img_curacao from '@assets/images/mathias_curacao.webp';
import Link from '@components/typography/link.tsx';

export const HomePage = (): ReactElement => {
  return (
    <>
      <ContentWrapper>
        <section className="relative flex min-h-[calc(100svh-25rem)] items-center px-2 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-2xl font-medium text-zinc-800 dark:text-zinc-100 sm:text-3xl">Hi, I&apos;m Mathias.</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-6xl">
              <span className="bg-gradient-to-r  from-violet-500 to-pink-600 bg-clip-text text-transparent">
                Backend engineer
              </span>{' '}
              <br /> building software that solves <br /> real-world problems.
            </h1>
            <p className="mt-6 text-lg font-medium text-zinc-700 dark:text-zinc-300 sm:text-2xl">
              Java • Spring Boot • React • SQL
            </p>
            <p className="mt-8 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
              Currently building workforce management software at Déhora Belgium.
            </p>
            <p className="mt-8 text-base text-zinc-800 dark:text-zinc-100 sm:text-lg">
              <Link link={{ href: '#projects', text: '↓ View my recent projects' }} scrollIntoView />
            </p>

            <div className="mt-10 flex gap-6">
              <SocialIconlink link={LINK_GITHUB} icon={GitHubIcon} />
              <SocialIconlink link={LINK_LINKEDIN} icon={LinkedInIcon} />
            </div>
          </div>
        </section>
      </ContentWrapper>
      <ImageCarousel
        images={[
          {
            alt: 'Me on a stage during Pride week',
            src: img_lights,
          },
          {
            alt: 'Phantasialand. Theme parks are just a hobby, I promise',
            src: img_phantasialand,
          },
          {
            alt: 'My office space at home',
            src: img_office,
          },
          {
            alt: 'Luna, my favourite Beagle',
            src: img_luna,
          },
          {
            alt: 'My (just) 125cc Yamaha XSR',
            src: img_xsr,
          },
          {
            alt: 'On a sailing trip in Curacao',
            src: img_sailing,
          },
          {
            alt: 'Knocked out after a bike ride',
            src: img_bike,
          },
          {
            alt: 'Trying to figure out bug 9001',
            src: img_desk,
          },
          {
            alt: 'At the Moulin Rouge',
            src: img_theatre,
          },
          {
            alt: 'Looking very corporate',
            src: img_corp,
          },
          {
            alt: '',
            src: img_curacao,
          },
        ]}
      />
      <div className="mt-8 scroll-mt-24 px-2 sm:px-8" id="projects">
        <ContentWrapper>
          <div className="mx-auto mt-10 max-w-2xl lg:mt-6 lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <section className="grid grid-cols-1 gap-y-16">
                <h2 className="sr-only">Projects</h2>
                <Projects projects={projectsConfig.projects} pinned={true} />
              </section>
              <section className="space-y-10 lg:pl-16 xl:pl-24">
                <div className="rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40">
                  <Employment experiences={experienceConfig.experiences} />
                </div>
              </section>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
};

export default HomePage;
