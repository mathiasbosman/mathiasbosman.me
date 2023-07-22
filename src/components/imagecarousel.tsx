import type { PropsWithChildren } from 'react'
import { type ReactElement } from 'react'
import type { HTMLImage } from '../shared/utils.tsx'

interface Props {
  images: HTMLImage[]
}

export const Imagecarousel = (props: PropsWithChildren<Props>): ReactElement => {
  return <div className={'mt-8 sm:mt-16'}>
    <div className={'-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'}>
      {props.images.map((img, i) => {
        const cssRotation = i % 2 === 0 ? '-rotate-2' : 'rotate-2'
        return <div key={i} className={cssRotation
          + ' aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 '}>
          <img alt={img.alt} src={img.src} loading={'lazy'} decoding={'async'}
               className={'inset-0 h-full w-full object-cover'}/>
        </div>
      })}
    </div>
  </div>
}

export default Imagecarousel
