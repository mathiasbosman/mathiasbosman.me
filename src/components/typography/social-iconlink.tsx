import type { PropsWithChildren, ReactElement } from 'react'
import type { Icon } from '@shared/icons.ts'
import type { HTMLSimpleLink } from '@shared/utils.ts'

interface Props {
  link: HTMLSimpleLink
  icon: Icon
}

export const SocialIconlink = (props: PropsWithChildren<Props>): ReactElement => {
  return <a className={'group -m-1 p-1'}
            aria-label={`Follow on ${props.icon.name}`}
            href={props.link.href}>
    <svg viewBox={'0 0 24 24'}
         aria-hidden={true}
         className={'h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'}>
      <path fillRule={'evenodd'} clipRule={'evenodd'} d={props.icon.svgPath}></path>
    </svg>
  </a>
}

export default SocialIconlink
