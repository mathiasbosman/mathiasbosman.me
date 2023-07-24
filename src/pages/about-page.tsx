import type { ReactElement } from 'react'
import Page from '../components/common/page.tsx'
import ContentWrapper from '../components/common/content-wrapper.tsx'
import SectionWrapper from '../components/common/section-wrapper.tsx'
import { sendEmail } from '../shared/utils.tsx'
import { EmailIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from '../shared/icons.tsx'
import { CONTACT_EMAIL, LINK_GITHUB, LINK_LINKEDIN, LINK_TWITTER } from '../constants.tsx'

import profilePicture from '../assets/mathias_large.webp'
import PageTitle from '../components/typography/page-title.tsx'
import FollowIconLink from '../components/typography/folow-iconlink.tsx'

export const AboutPage = (): ReactElement => {
  return <Page title={'About - Mathias Bosman'}
               renderAvatar={true}>
    <ContentWrapper>
      <SectionWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <div
            className={'-mt-6 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'}>
            <div className={'lg:pl-20'}>
              <div className={'max-w-xs px-2.5 lg:max-w-none'}>
                <img
                  src={profilePicture}
                  alt={'Just me being black and white'}
                  style={{ color: 'transparent' }}
                  loading={'lazy'}
                  width={800}
                  height={800}
                  decoding={'async'}
                  className={'aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 object-cover'}/>
              </div>
            </div>
            <div className={'lg:order-first lg:row-span-2'}>
              <PageTitle
                title={'I\'m Mathias Bosman. I live in Belgium, being part of the future.'}/>
              <div className={'space-y-7 text-base text-zinc-600 dark:text-zinc-400 mt-12'}>
                <p>
                  In the late 90&apos;s I got my hands on a fairly simple Windows
                  desktop rocking the late <em>but great</em> Windows XP
                  operating system to use as a tool for school.
                </p>
                <p>
                  In my last teenage years I choose to study &quot;information
                  technology systems&quot;, which basically bottled down to learning how to
                  type and learning the programming language Pascal.
                </p>
                <p>
                  And that&apos;s where the IT spark inside of me became a flame.
                  I went on to study Programming and Multimedia in which I
                  started my career by means of an internship as a PHP Web
                  developer in the United Kingdom. After a short but
                  educational year I returned to Belgium.
                </p>
                <p>
                  During my first years of employment I took a side-interest
                  into stage lighting coming from my love for musical
                  theatre. Sadly I could not study this in the UK and so I
                  got my degree as stage lighting technician locally.
                </p>
                <p>
                  Today, I&apos;m the team lead -
                  <em>(I prefer &quot;one of the team&quot;)</em> - of a small group
                  of Java developers who develop and maintain business
                  applications for the department of environment of the Flemish government.
                </p>
              </div>
            </div>
            <div className={'lg:pl-20'}>
              <ul role={'list'}>
                <li className={'mt-4 flex'}>
                  <FollowIconLink link={LINK_GITHUB} icon={GitHubIcon}/>
                </li>
                <li className={'mt-4 flex'}>
                  <FollowIconLink link={LINK_LINKEDIN} icon={LinkedInIcon}/>
                </li>
                <li className={'mt-4 flex'}>
                  <FollowIconLink link={LINK_TWITTER} icon={TwitterIcon}/>
                </li>
                <li
                  className={'mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex'}>
                  <button
                    className={'group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'}
                    onClick={() => { sendEmail(CONTACT_EMAIL) }}>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className={'h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-indigo-500'}>
                      <path
                        fillRule={'evenodd'}
                        d={EmailIcon.svgPath}
                      ></path>
                    </svg>
                    <span className={'ml-4'}>Send me an email</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </ContentWrapper>
  </Page>
}

export default AboutPage
