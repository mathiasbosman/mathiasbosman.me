import type { PropsWithChildren } from 'react'
import { type ReactElement } from 'react'
import type { Icon } from '../../shared/icons.tsx'
import type { HTMLSimpleLink } from '../../shared/utils.tsx'

interface Props {
  link: HTMLSimpleLink
  icon: Icon
  prefix?: string
  postfix?: string
}

export const FollowIconLink = (props: PropsWithChildren<Props>): ReactElement => {

  const prefix = props.prefix ?? 'Follow me on '

  return <a
    className={'group flex text-sm font-medium text-zinc-800 transition hover:text-indigo-500 dark:text-zinc-200 dark:hover:text-indigo-500'}
    href={props.link.href}
    aria-label={'Follow me on ' + props.link.text}>
    <svg
      viewBox={'0 0 24 24'} aria-hidden={true}
      className={'h-5 w-5 flex-none fill-zinc-500 transition group-hover:fill-indigo-500'}>
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={props.icon.svgPath}></path>
    </svg>
    <span className={'ml-4'}>{prefix}{props.link.text}{props.postfix}</span>
  </a>
}

export default FollowIconLink
