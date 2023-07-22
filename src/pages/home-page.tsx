import type { ReactElement } from 'react'
import Page from '../components/common/page.tsx'
import ContentWrapper from '../components/common/content-wrapper.tsx'
import Avatar, { AvatarSize } from '../components/avatar.tsx'

import avatar from '../assets/mathias.webp'
import PageTitle from '../components/typography/page-title.tsx'
import SocialIconlink from '../components/typography/social-iconlink.tsx'
import { LINK_GITHUB, LINK_LINKEDIN } from '../constants.tsx'
import { GitHubIcon, LinkedInIcon } from '../shared/icons.tsx'
import Imagecarousel from '../components/imagecarousel.tsx'

import roll_1 from '../assets/carousel/roll_1.webp'
import roll_2 from '../assets/carousel/roll_2.webp'
import roll_3 from '../assets/carousel/roll_3.webp'
import roll_4 from '../assets/carousel/roll_4.webp'
import roll_5 from '../assets/carousel/roll_5.webp'
import Projects from '../components/projects.tsx'
import { projectsConfig } from '../models/config/project.config.tsx'
import { Employment } from '../components/employment.tsx'
import { experienceConfig } from '../models/config/experience.config.tsx'
import { Contact } from '../components/contact.tsx'

export const HomePage = (): ReactElement => {
  return <Page
    renderAvatar={false}>
    <ContentWrapper>
      <div className={'relative px-2 sm:px-8 lg:px-12'}>
        <Avatar image={{ src: avatar, alt: 'Avatar' }} size={AvatarSize.s}/>
        <PageTitle title={'Software designer, network engineer and lighting tech.'}>
          I&apos;m Mathias, a software designer and network engineer based in
          Lebbeke, Belgium.<br/>In my spare time I like to fiddle with
          stage lights.<br/>
          Currently full-time employed at the Department of Environment of
          the Flemish Government.<br/>
          Yes, I&apos;m the human of the cute Beagle; her name is Luna.
        </PageTitle>
        <div className={'mt-6 flex gap-6'}>
          <SocialIconlink link={LINK_GITHUB} icon={GitHubIcon}/>
          <SocialIconlink link={LINK_LINKEDIN} icon={LinkedInIcon}/>
        </div>
      </div>
    </ContentWrapper>

    <Imagecarousel images={[
      {
        alt: 'Phantasialand. Theme parks are just a hobby, I promise',
        src: roll_3
      },
      {
        alt: 'Me, somewhere on a hill in France',
        src: roll_2
      },
      {
        alt: 'Enjoying a sail trip in Curacao',
        src: roll_5
      },
      {
        alt: 'Luna, my favourite Beagle',
        src: roll_1
      },
      {
        alt: 'Me on a stage during Pride week',
        src: roll_4
      }
    ]}/>
    <div className={'sm:px-8 mt-8 md:mt-28 px-2'}>
      <ContentWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl mt-10 lg:mt-6'}>
          <div
            className={'mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2'}>
            <div className="grid grid-cols-1 gap-y-16">
              <Projects projects={projectsConfig.projects} pinned={true}/>
            </div>
            <div className={'space-y-10 lg:pl-16 xl:pl-24'}>
              <div className={'rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'}>
                <Contact/>
              </div>
              <div className={'rounded-lg border border-zinc-100 p-6 dark:border-zinc-700/40'}>
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
