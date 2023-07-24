import type { PropsWithChildren, ReactElement, ReactNode } from 'react'
import type { HTMLSimpleLink } from '../../../shared/utils.tsx'
import NavigationModal from './navigation-modal.tsx'

interface Props {
  avatar: ReactNode
  renderAvatar: boolean
  links: HTMLSimpleLink[]
  location: string
}

export const Navigation = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderLink (link: HTMLSimpleLink): ReactElement {
    const isCurrentUrl = props.location === link.href
    return <a
      className={'relative inline-block px-3 p-2 transition hover:text-indigo-500 dark:hover:text-indigo-400 '}
      href={link.href}>
      {link.text}
      {isCurrentUrl && <span
        className={'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0'}
      ></span>}
    </a>
  }

  function _renderLinks (links: HTMLSimpleLink[]): ReactElement {
    return <nav className={'pointer-events-auto hidden md:inline-block'}>
      <ul
        className={'flex rounded-lg bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'}>
        {links.map((link, i) => {
          return <li key={i}>{_renderLink(link)}</li>
        })}
      </ul>
    </nav>
  }

  return <div
    className={'flex justify-between md:justify-center flex-row mt-8 px-4 md:px-2 items-center'}>
    <div className={'md:basis-1/3'}>
      {props.renderAvatar && props.avatar}
    </div>
    <div className={'md:basis-1/3 flex md:justify-center'}>
      {_renderLinks(props.links)}
    </div>
    <div className={'md:basis-1/3'}>
      <NavigationModal links={props.links}/>
    </div>
  </div>
}

export default Navigation
