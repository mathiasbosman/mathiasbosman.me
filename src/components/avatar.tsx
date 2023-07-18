import { type PropsWithChildren, type ReactElement } from 'react'
import { type HTMLImage, ImageDecoding } from '../shared/utils.tsx'

export enum AvatarSize {
  xs = 9,
  s = 16,
}

interface Props {
  image: HTMLImage
  size: AvatarSize
}

export const Avatar = (props: PropsWithChildren<Props>): ReactElement => {
  const cssSizeStyles = `w-${props.size} h-${props.size}`

  return <div className={cssSizeStyles + ' rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'}>
      <a aria-label={'Home'} className={cssSizeStyles + ' pointer-events-auto block'} href={'/'}>
        <img alt={props.image.alt} decoding={ImageDecoding.Async} src={props.image.src}
          className={cssSizeStyles + ' rounded-full bg-zinc-100 object-cover dark:bg-zinc-800'}
        />
      </a>
    </div>
}

export default Avatar
