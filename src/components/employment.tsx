import type { PropsWithChildren, ReactElement } from 'react'
import type { Experience, ExperienceItem } from '@models/config/experience.config.ts'
import type { HTMLImage } from '@shared/utils.ts'

interface Props {
  experiences: Experience[]
}

export const Employment = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderLogo (logo: HTMLImage): ReactElement {
    return <div
      className={'relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'}>
      <img style={{ color: 'transparent' }} alt={logo.alt} loading={'lazy'} width={28} height={28}
           decoding={'async'} className={'h-7 w-7'} src={logo.src}/>
    </div>
  }

  function _renderItem (item: ExperienceItem, index: number, experience: Experience): ReactElement {
    const until = item.period.to
    const untilString = until?.getFullYear() ?? 'present'
    const from = item.period.from.getFullYear()
    return <li key={index} className={'flex gap-4'}>
      {experience.logo !== undefined && _renderLogo(experience.logo)}
      <dl className={'flex flex-auto flex-wrap gap-x-2'}>
        <dt className={'sr-only'}>Company</dt>
        <dd className={'w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100'}>
          {experience.place}
        </dd>
        <dt className={'sr-only'}>Role</dt>
        <dd className={'text-xs text-zinc-500 dark:text-zinc-400'}>
          {item.title}
        </dd>
        <dt className={'sr-only'}>Date</dt>
        <dd className={'ml-auto text-xs text-zinc-400 dark:text-zinc-500'}
            aria-label={`${from} until ${untilString}`}>
          <time dateTime={from.toString()}>
            {from}
          </time>
          <span aria-hidden={true}>-</span>
          <time dateTime={until !== undefined ? until.getFullYear().toString()
            : new Date().getFullYear().toString()}>
            {untilString}
          </time>
        </dd>
      </dl>
    </li>
  }

  return <>
    <h2 className={'flex text-sm font-semibold text-zinc-900 dark:text-zinc-100'}>
      <svg viewBox={'0 0 24 24'} fill={'none'} strokeWidth={1.5} strokeLinecap={'round'}
           strokeLinejoin={'round'}
           aria-hidden={true} className={'h-5 w-5 flex-none'}>
        <path
          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className={'fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500'}
        ></path>
        <path
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
          className={'stroke-zinc-400 dark:stroke-zinc-500'}
        ></path>
      </svg>
      <span className={'ml-3'}>Work</span>
    </h2>
    <ol className={'mt-6 space-y-4'}>
      {props.experiences.map(experience => {
        return experience.items
        .filter(item => item.pinned)
        .map((item, i) => {
          return _renderItem(item, i, experience)
        })
      })}
    </ol>
  </>
}
