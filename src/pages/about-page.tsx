import type { ReactElement } from 'react';
import SectionWrapper from '@components/common/section-wrapper.tsx';
import { GitHubIcon, LinkedInIcon } from '@shared/icons.tsx';
import PageTitle from '@components/typography/page-title.tsx';
import { LINK_DEHORA, LINK_GITHUB, LINK_LINKEDIN } from '@/constants.ts';
import FollowIconLink from '@components/typography/folow-iconlink.tsx';
import profilePicture from '@assets/images/mathias_corp.webp';
import Link from '@components/typography/link.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';

const CAREER_START_YEAR = 2012;

const OUTSIDE_OF_WORK = [
  {
    title: 'Theatre nights',
    detail: 'In the audience or behind the lights.',
    vibe: 'Creative mode',
    tone: 'bg-violet-100/70 text-violet-900 dark:bg-violet-500/20 dark:text-violet-100',
  },
  {
    title: 'Swimming',
    detail: 'A reset button for my head after long coding sessions.',
    vibe: 'Recharge',
    tone: 'bg-sky-100/70 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100',
  },
  {
    title: 'Theme park trips',
    detail: 'I like great technical ride systems and obsessive attention to detail.',
    vibe: 'Energy boost',
    tone: 'bg-amber-100/70 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100',
  },
  {
    title: 'Road time',
    detail: 'Riding my race bike or motorbike whenever the weather cooperates.',
    vibe: 'Speed and focus',
    tone: 'bg-emerald-100/70 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100',
  },
] as const;

export const AboutPage = (): ReactElement => {
  const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR;

  return (
    <ContentWrapper>
      <SectionWrapper>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <div className="-mt-6 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-10">
            <div className="lg:pl-16">
              <div className="max-w-xs px-2.5 lg:max-w-none">
                <img
                  src={profilePicture}
                  alt="Portrait of Mathias Bosman"
                  style={{ color: 'transparent' }}
                  loading="lazy"
                  width={800}
                  height={800}
                  decoding="async"
                  className="aspect-square rotate-3 rounded-2xl border border-zinc-200/80 bg-zinc-100 object-cover grayscale transition duration-300 hover:rotate-0 hover:grayscale-0 dark:border-zinc-700/60 dark:bg-zinc-800"
                />
              </div>
            </div>

            <div className="lg:order-first lg:row-span-2">
              <PageTitle
                title={
                  <span>
                    I&apos;m{' '}
                    <span className="bg-gradient-to-r from-violet-500 to-pink-600 bg-clip-text text-transparent">
                      Mathias Bosman
                    </span>
                    , a software engineer who likes building practical products with people in mind.
                  </span>
                }
              />

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  {yearsOfExperience}+ years in software
                </span>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Backend and delivery focused
                </span>
                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Based in Belgium
                </span>
              </div>

              <section className="mt-10 space-y-8 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                <article>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    How it started
                  </h2>
                  <p className="mt-3">
                    In the late 1990s I got access to a simple Windows desktop and mostly used it for school. Then I
                    found Game Maker (v6), and suddenly software became more than a tool: it became a way to build
                    ideas.
                  </p>
                  <p className="mt-3">
                    During my teenage years I studied Information Technology Systems. I started with Pascal and later
                    grew into PHP and web development.
                  </p>
                </article>

                <article>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    Building a career
                  </h2>
                  <p className="mt-3">
                    I continued with Programming and Multimedia and began my career through a PHP web development
                    internship in the United Kingdom. That year taught me how to work in a professional product team and
                    shaped how I approach software today.
                  </p>
                  <p className="mt-3">
                    I also pursued a second passion: stage lighting. I earned a degree as a stage lighting technician,
                    which still influences how I think about timing, detail, and audience experience.
                  </p>
                </article>

                <article>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    Today
                  </h2>
                  <p className="mt-3">
                    I currently work at <Link link={LINK_DEHORA} /> as a backend developer focused on{' '}
                    <Link
                      target="_blank"
                      link={{
                        href: 'https://planpoint.eu',
                        text: 'PlanPoint',
                      }}
                    />
                    , a workforce management suite for planning and time registration.
                  </p>
                  <p className="mt-3">
                    On the side, I support home and small business network infrastructure projects, both remotely and
                    on-site around Dendermonde and the wider Flemish region.
                  </p>
                </article>

                <article>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                    Outside of work
                  </h2>
                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    A few things that keep me curious, creative, and energized.
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {OUTSIDE_OF_WORK.map((activity) => (
                      <li key={activity.title} className="h-full">
                        <div
                          className={`flex h-full flex-col rounded-xl px-4 py-3 subpixel-antialiased shadow-sm shadow-zinc-900/5 transition duration-300 hover:-translate-y-1 dark:shadow-black/20 ${activity.tone}`}
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-wide opacity-80">
                            {activity.vibe}
                          </p>
                          <p className="mt-1 text-sm font-semibold">{activity.title}</p>
                          <p className="mt-1 text-xs opacity-90">{activity.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </section>
            </div>

            <aside className="lg:pl-16">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300">
                Find me
              </h2>
              <ul role="list" className="mt-3 space-y-3">
                <li className="flex">
                  <FollowIconLink link={LINK_GITHUB} icon={GitHubIcon} />
                </li>
                <li className="flex">
                  <FollowIconLink link={LINK_LINKEDIN} icon={LinkedInIcon} />
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
