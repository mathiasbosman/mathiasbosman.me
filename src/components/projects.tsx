import type { Project } from '../models/config/project.config.tsx'
import type { PropsWithChildren, ReactElement } from 'react'
import { LinkIcon } from '../shared/icons.tsx'

interface Props {
  projects: Project[]
  pinned: boolean
}

export const Projects = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderItem (project: Project, key: number): ReactElement {
    return <div key={key} className={'group relative flex flex-col'}>
      <div
        className={'relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0'}>
        {<img src={project.logo.src}
              alt={project.logo.alt}
              loading={'lazy'}
              width={32}
              height={32}
              decoding={'async'}
              className={'h-8 w-8 rounded-full'}
        />}
      </div>
      <h2 className={'mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100'}>
        <div
          className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50
              opacity-0 transition group-hover:scale-100 group-hover:opacity-100
              dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-xl"
        ></div>
        <a href={project.link.href}>
          <span
            className={'absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-xl'}></span>
          <span className={'relative z-10'}>{project.title}</span>
        </a>
      </h2>
      <p className={'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'}>
        {project.description}
      </p>
      <p
        className={'relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200'}>
        <svg viewBox={'0 0 24 24'} aria-hidden={true} className={'h-6 w-6 flex-none'}>
          <path d={LinkIcon.svgPath} fill={'currentColor'}></path>
        </svg>
        <span className={'ml-2'}>{project.link.text}</span>
      </p>
    </div>
  }

  return <>
    {props.projects
    .filter(project => props.pinned ? project.pinned : true)
    .map((project, i) => {
      return _renderItem(project, i)
    })}
  </>
}

export default Projects
