import { type PropsWithChildren, type ReactElement } from 'react'
import { type HTMLImage } from '../shared/utils.tsx'

export enum AvatarSize {
  xs = 9,
  s = 16,
}

interface Props {
  image: HTMLImage
  size: AvatarSize
}

export const Avatar = (props: PropsWithChildren<Props>): ReactElement => {
  function _renderAvatarLink (css: string): ReactElement {
    return <a aria-label={'Home'} className={css + ' pointer-events-auto block'} href={'/'}>
      <img
        alt={props.image.alt}
        decoding='async'
        src={props.image.src}
        className={css + ' rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'}
      />
    </a>
  }

  switch (props.size) {
    case AvatarSize.s:
      return <div className={'w-16 h-16 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'}>
        {_renderAvatarLink('w-16 h-16')}
      </div>
    case AvatarSize.xs:
      return <div className={'w-9 h-9 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'}>
        {_renderAvatarLink('w-9 h-9')}
      </div>
  }
}

export default Avatar
