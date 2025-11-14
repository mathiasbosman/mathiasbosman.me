import type { ReactElement } from 'react';
import SectionWrapper from '@components/common/section-wrapper.tsx';
import { sendEmail } from '@shared/utils.ts';
import { GitHubIcon, LinkedInIcon } from '@shared/icons.tsx';
import PageTitle from '@components/typography/page-title.tsx';
import { CONTACT_EMAIL, LINK_DEHORA, LINK_GITHUB, LINK_LINKEDIN } from '@/constants.ts';
import FollowIconLink from '@components/typography/folow-iconlink.tsx';
import profilePicture from '@assets/images/mathias_curacao.webp';
import Link from '@components/typography/link.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';

export const AboutPage = (): ReactElement => {
  return (
    <ContentWrapper>
      <SectionWrapper>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="-mt-6 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src={profilePicture}
                  alt="Just me being black and white"
                  style={{ color: 'transparent' }}
                  loading="lazy"
                  width={800}
                  height={800}
                  decoding="async"
                  className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover grayscale hover:grayscale-0 dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <PageTitle
                title={
                  <span>
                    I&apos;m&nbsp;
                    <span className="bg-gradient-to-r  from-violet-500 to-pink-600 bg-clip-text text-transparent">
                      Mathias Bosman
                    </span>
                    . Living in Belgium and being part of the future.
                  </span>
                }
              />
              <section className="mt-12 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Back in the late 1990s, I first got my hands on a simple Windows desktop rocking the late{' '}
                  <em>but great</em> Windows XP operating system. At first, I used it mainly as a school tool.
                  <br />
                  <em>However...</em> I also installed Game Maker (v.6) where a little spark of imagination and coding
                  came to life.
                </p>
                <p>
                  During my teenage years, that spark grew stronger and led me to study Information Technology Systems.
                  I started with Pascal, before developing a passion for PHP and web development.
                </p>
                <p>
                  That passion became a flame. I went on to study <i>Programming and Multimedia</i> and kickstarted my
                  career with an internship as a PHP web developer in the United Kingdom. After a short but invaluable
                  year learning how to work in a professional team, I returned home to Belgium.
                </p>
                <p>
                  Along the way, I also nurtured a side interest in stage lighting, inspired by my love of musical
                  theatre. While I couldn’t study this field in the UK (my “second home”), I earned a degree locally as
                  a stage lighting technician.
                </p>
                <p>
                  Today, I work at <Link link={LINK_DEHORA} /> as a backend developer focussing on{' '}
                  <Link
                    target="_blank"
                    link={{
                      href: 'https://planpoint.eu',
                      text: 'PlanPoint',
                    }}
                  />
                  — a software suite for workforce management, planning and time registration.
                </p>
                <p>
                  On the side, I also help install and support home and small business network infrastructures.
                  <br />I work remotely and on-site for clients around Dendermonde and the wider Flemish region.
                </p>
                <p>
                  Outside of work, you’ll often find me:
                  <ul className="ml-5 mt-1 list-disc">
                    <li>at the theatre (either in the audience or behind the lights),</li>
                    <li>swimming,</li>
                    <li>visiting amusement parks,</li>
                    <li>riding my race- or motorbike, or</li>
                    <li>spending quality time with my beagle, Luna.</li>
                  </ul>
                </p>
              </section>
            </div>
            <aside className="lg:pl-20">
              <h2 className="sr-only">My social media</h2>
              <ul role="list">
                <li className="mt-4 flex">
                  <FollowIconLink link={LINK_GITHUB} icon={GitHubIcon} />
                </li>
                <li className="mt-4 flex">
                  <FollowIconLink link={LINK_LINKEDIN} icon={LinkedInIcon} />
                </li>
                <li className="mt-8 flex border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                  <button
                    className="group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500"
                    onClick={() => {
                      sendEmail(CONTACT_EMAIL);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 fill-zinc-500 transition group-hover:fill-indigo-500"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span className="ml-4">Send me an email</span>
                  </button>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </SectionWrapper>
    </ContentWrapper>
  );
};

export default AboutPage;
