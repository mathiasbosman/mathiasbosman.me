import type { ReactElement } from 'react';
import { Employment } from '@components/employment.tsx';
import { Contact } from '@components/contact.tsx';
import Page from '@components/common/page.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';
import Avatar, { AvatarSize } from '@components/avatar.tsx';
import Projects from '@components/projects.tsx';
import ImageCarousel from '@components/image-carousel.tsx';
import PageTitle from '@components/typography/page-title.tsx';
import SocialIconlink from '@components/typography/social-iconlink.tsx';
import { projectsConfig } from '@models/config/project.config.ts';
import { experienceConfig } from '@models/config/experience.config.ts';
import { LINK_DEHORA, LINK_GITHUB, LINK_LINKEDIN } from '@/constants.ts';
import { GitHubIcon, LinkedInIcon } from '@shared/icons.tsx';
import avatar from '@assets/images/mathias.webp';
import img_luna from '@assets/images/luna.webp';
import img_phantasialand from '@assets/images/phantasialand.webp';
import img_lights from '@assets/images/mathias_lights.webp';
import img_sailing from '@assets/images/mathias_sailing.webp';
import img_office from '@assets/images/mathias_office.webp';
import img_xsr from '@assets/images/xsr125.webp';
import img_bike from '@assets/images/mathias_bike.webp';
import img_desk from '@assets/images/mathias_desk.webp';
import img_shirt from '@assets/images/mathias_shirt.webp';
import img_theatre from '@assets/images/mathias_theatre.webp';
import Link from '@components/typography/link.tsx';

export const HomePage = (): ReactElement => {
  return (
    <Page renderAvatar={false}>
      <ContentWrapper>
        <section className="relative px-2 sm:px-8 lg:px-12">
          <Avatar image={{ src: avatar, alt: 'Avatar' }} size={AvatarSize.s} />
          <PageTitle
            title="Mathias Bosman"
            subtitleSlot={
              <div className="mt-2 text-2xl font-medium sm:text-4xl">
                IT&nbsp;project&nbsp;manager, software&nbsp;developer, network&nbsp;engineer &amp; lighting&nbsp;tech
              </div>
            }
          />
          <aside className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m Mathias, an IT project manager, software developer and network engineer based in Lebbeke,
              Belgium.
              <br />
              In my spare time, you might find me: in a theatre (either watching whatever is on stage or fiddling with
              the stage lights), swimming, visiting amusement parks or riding my race bike.
            </p>
            <p>
              Currently working for <Link link={LINK_DEHORA} target="_blank" /> as a back-end developer.
              <br />
              Also, I&apos;m proud to be the human of a cute little Beagle; her name is (&apos;Queen&apos;) Luna.
            </p>
          </aside>

          <div className="mt-6 flex gap-6">
            <SocialIconlink link={LINK_GITHUB} icon={GitHubIcon} />
            <SocialIconlink link={LINK_LINKEDIN} icon={LinkedInIcon} />
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
            src: img_xsr
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
            alt: 'Looking corporate',
            src: img_shirt,
          },
          {
            alt: 'At the Moulin Rouge',
            src: img_theatre,
          }
        ]}
      />
      <div className="mt-8 px-2 sm:px-8">
        <ContentWrapper>
          <div className="mx-auto mt-10 max-w-2xl lg:mt-6 lg:max-w-5xl">
            <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
              <section className="grid grid-cols-1 gap-y-16">
                <h2 className="sr-only">Projects</h2>
                <Projects projects={projectsConfig.projects} pinned={true} />
              </section>
              <section className="space-y-10 lg:pl-16 xl:pl-24">
                <div className="rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40">
                  <Contact />
                </div>
                <div className="rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40">
                  <Employment experiences={experienceConfig.experiences} />
                </div>
              </section>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </Page>
  );
};

export default HomePage;
