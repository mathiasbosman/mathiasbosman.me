import { type PropsWithChildren, type ReactElement } from 'react'
import { type HTMLImage, type HTMLSimpleLink } from '../../../shared/utils.tsx'
import Avatar, { AvatarSize } from '../../avatar.tsx'

import avatar from '../../../assets/mathias.webp'
import NavigationModal from './navigation-modal.tsx'

interface Props {
  renderAvatar: boolean
  links: HTMLSimpleLink[]
  location: string
}

export const Navigation = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderLink (link: HTMLSimpleLink): ReactElement {
    const isCurrentUrl = props.location === link.href
    return <a className={'relative inline-block px-3 p-2 transition hover:text-blue-500 dark:hover:text-blue-400 '}
         href={link.href}>
        {link.text}
        {isCurrentUrl && <span
          className={'absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0'}
        ></span>}
      </a>
  }

  function _renderLinks (links: HTMLSimpleLink[]): ReactElement {
    return <nav className={'pointer-events-auto hidden md:inline-block'}>
      <ul className={'flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'}>
        {links.map((link, i) => {
          return <li key={i}>{_renderLink(link)}</li>
        })}
      </ul></nav>
  }

  function _renderAvatar (image: HTMLImage, size: AvatarSize): ReactElement | undefined {
    if (props.renderAvatar) {
      return <Avatar image={image} size={size}/>
    }
  }

  return <div className={'flex justify-between md:justify-center flex-row mt-8 px-4 md:px-2 items-center'}>
      <div className={'md:basis-1/3'}>
        {_renderAvatar({ src: avatar, alt: 'Home' }, AvatarSize.xs)}
      </div>
      <div className={'md:basis-1/3 flex md:justify-center'}>
        {_renderLinks(props.links)}
      </div>
      <div className={'md:basis-1/3'}>
        <NavigationModal links={props.links} />
      </div>
    </div>
}

export default Navigation
