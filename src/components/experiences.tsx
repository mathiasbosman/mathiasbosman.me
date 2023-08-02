import { renderPeriodYearString } from '@shared/utils.ts'
import { ArrowRightIcon } from '@shared/icons.ts'
import type { Experience, ExperienceItem } from '@models/config/experience.config.ts'
import type { PropsWithChildren, ReactElement } from 'react'

interface Props {
  experiences: Experience[]
}

export const Experiences = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderSubtitle (subtitle: string): ReactElement {
    return <>
      <span className={'absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl'}></span>
      <span className={'relative z-10'}>{subtitle}</span>
    </>
  }

  function _renderLink (item: ExperienceItem): ReactElement {
    if (item.link != null) {
      return <a href={item.link.href}>
        {_renderSubtitle(item.title)}
      </a>
    } else {
      return _renderSubtitle(item.title)
    }
  }

  function _renderItem (item: ExperienceItem, key: number): ReactElement {
    return <article key={key} className={'group relative flex flex-col items-start'}>
      <h3 className={'text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100'}>
        <div
          className={'absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-xl'}></div>
        {_renderLink(item)}
      </h3>
      <p
        className={'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5'}>
                  <span
                    className="absolute inset-y-0 left-0 flex items-center"
                    aria-hidden={true}>
                    <span
                      className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                  </span>
        {renderPeriodYearString(item.period, 'present')}
      </p>
      {
        item.description !== undefined &&
        <p className={'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'}>
          {item.description}
        </p>
      }
      {item.link !== undefined && <
        div aria-hidden={true}
            className={'relative z-10 mt-4 flex items-center text-sm font-medium text-indigo-500'}>
        {item.link.text}
        <svg viewBox={'0 0 16 16'}
             fill={'none'}
             aria-hidden={true}
             className={'ml-1 h-4 w-4 stroke-current'}>
          <path d={ArrowRightIcon.svgPath}
                strokeWidth={1.5}
                strokeLinecap={'round'}
                strokeLinejoin={'round'}></path>
        </svg>
      </div>}
    </article>
  }

  function _renderSection (experience: Experience, key: number): ReactElement {
    return <section
      key={key}
      aria-labelledby={`ref:${experience.place}`}
      className={'md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40'}>
      <div className={'grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4'}>
        <h2 id={`ref:${experience.place}`}
            className={'text-sm font-semibold text-zinc-800 dark:text-zinc-100'}>
          {experience.place}
        </h2>
        <div className={'md:col-span-3'}>
          <div className={'space-y-16'}>
            {experience.items.map((item, i) => {
              return _renderItem(item, i)
            })}
          </div>
        </div>
      </div>
    </section>
  }

  return <div className={'space-y-20'}>
    {props.experiences.map((item, i) => {
      return _renderSection(item, i)
    })}
  </div>
}

export default Experiences
