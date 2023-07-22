import type { PropsWithChildren, ReactElement } from 'react'
import type { HTMLSimpleLink } from '../../shared/utils.tsx'

interface Props {
  link: HTMLSimpleLink
}

export const Link = (props: PropsWithChildren<Props>): ReactElement => {
  return <a className={'transition hover:text-blue-500 dark:hover:text-blue-400'}
            href={props.link.href}>
    {props.link.text}
  </a>
}

export default Link
