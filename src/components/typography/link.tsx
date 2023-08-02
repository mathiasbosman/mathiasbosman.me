import type { PropsWithChildren, ReactElement } from 'react'
import type { HTMLSimpleLink } from '@shared/utils.ts'

interface Props {
  link: HTMLSimpleLink
}

export const Link = (props: PropsWithChildren<Props>): ReactElement => {
  return <a
    className={'hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600'}
    href={props.link.href}>
    {props.link.text}
  </a>
}

export default Link
