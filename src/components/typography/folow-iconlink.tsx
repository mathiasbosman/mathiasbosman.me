import type { PropsWithChildren } from 'react'
import { type ReactElement } from 'react'
import type { Icon } from '../../shared/icons.tsx'
import type { HTMLSimpleLink } from '../../shared/utils.tsx'

interface Props {
  link: HTMLSimpleLink
  icon: Icon
}

export const FollowIconLink = (props: PropsWithChildren<Props>): ReactElement => {
  return <a
    className={'group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500'}
    href={props.link.href}
    aria-label={'Follow me on ' + props.link.text}>
    <svg
      viewBox={'0 0 24 24'} aria-hidden={true}
      className={'h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-blue-500'}>
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={props.icon.svgPath}></path>
    </svg>
    <span className={'ml-4'}>Follow me on {props.link.text}</span>
  </a>
}

export default FollowIconLink
