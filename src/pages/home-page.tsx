import type { ReactElement } from 'react'
import { Employment } from '@components/employment.tsx'
import { Contact } from '@components/contact.tsx'
import Page from '@components/common/page.tsx'
import ContentWrapper from '@components/common/content-wrapper.tsx'
import Avatar, { AvatarSize } from '@components/avatar.tsx'
import Projects from '@components/projects.tsx'
import ImageCarousel from '@components/image-carousel.tsx'
import PageTitle from '@components/typography/page-title.tsx'
import SocialIconlink from '@components/typography/social-iconlink.tsx'
import { projectsConfig } from '@models/config/project.config.ts'
import { experienceConfig } from '@models/config/experience.config.ts'
import { LINK_GITHUB, LINK_LINKEDIN, LINK_TWITTER } from '@/constants.ts'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '@shared/icons.ts'

import avatar from '@assets/images/mathias.webp'
import img_luna from '@assets/images/luna.webp'
import img_france from '@assets/images/mathias_france.webp'
import img_phantasialand from '@assets/images/phantasialand.webp'
import img_lights from '@assets/images/mathias_lights.webp'
import img_sailing from '@assets/images/mathias_sailing.webp'

export const HomePage = (): ReactElement => {
  return <Page
    renderAvatar={false}>
    <ContentWrapper>
      <div className={'relative px-2 sm:px-8 lg:px-12'}>
        <Avatar image={{ src: avatar, alt: 'Avatar' }} size={AvatarSize.s}/>
        <PageTitle title={'Mathias Bosman'}
                   subtitleSlot={
                     <div
                       className={'font-medium sm:text-4xl text-2xl mt-2'}>Software&nbsp;designer,
                       network&nbsp;engineer &amp; lighting&nbsp;tech</div>
                   }/>
        <p className={'mt-6 text-base text-zinc-500 dark:text-zinc-400'}>
          I&apos;m Mathias, a software designer and network engineer based in
          Lebbeke, Belgium.<br/>In my spare time you might find me: in a theatre (either watching whatever is on stage or fiddling with the
          stage lights), visiting amusement parks or riding my race bike.<br/>
          Currently <span
          className={'shadow-[inset_0_-10px_0_0] shadow-indigo-500/10 dark:shadow-indigo-500/30'}>full-time employed at the Department of Environment</span> of
          the Flemish Government.<br/>
          Yes, I&apos;m proud to be the human of a cute little Beagle; her name is
          (&apos;Queen&apos;) Luna.
        </p>
        <div className={'mt-6 flex gap-6'}>
          <SocialIconlink link={LINK_GITHUB} icon={GitHubIcon}/>
          <SocialIconlink link={LINK_LINKEDIN} icon={LinkedInIcon}/>
          <SocialIconlink link={LINK_TWITTER} icon={TwitterIcon}/>
        </div>
      </div>
    </ContentWrapper>

    <ImageCarousel images={[
      {
        alt: 'Me, somewhere on a hill in France',
        src: img_france
      },
      {
        alt: 'Phantasialand. Theme parks are just a hobby, I promise',
        src: img_phantasialand
      },
      {
        alt: 'On a sailtrip in Curacao',
        src: img_sailing
      },
      {
        alt: 'Luna, my favourite Beagle',
        src: img_luna
      },
      {
        alt: 'Me on a stage during Pride week',
        src: img_lights
      }
    ]}/>
    <div className={'sm:px-8 mt-8 px-2'}>
      <ContentWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl mt-10 lg:mt-6'}>
          <div
            className={'mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'}>
            <div className="grid grid-cols-1 gap-y-16">
              <Projects projects={projectsConfig.projects} pinned={true}/>
            </div>
            <div className={'space-y-10 lg:pl-16 xl:pl-24'}>
              <div
                className={'rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'}>
                <Contact/>
              </div>
              <div
                className={'rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'}>
                <Employment experiences={experienceConfig.experiences}/>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  </Page>
}

export default HomePage
