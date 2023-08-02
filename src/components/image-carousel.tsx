import type { PropsWithChildren, ReactElement } from 'react'
import type { HTMLImage } from '@shared/utils.ts'

interface Props {
  images: HTMLImage[]
}

export const ImageCarousel = (props: PropsWithChildren<Props>): ReactElement => {
  return <div className={'mt-8 sm:mt-16 flex justify-center gap-8 overflow-hidden py-4'}>
      {props.images.map((img, i) => {
        const cssRotation = i % 2 === 0 ? '-rotate-2' : 'rotate-2'
        return <div key={i} className={cssRotation
          + ' relative aspect-[5/10] lg:aspect-[9/10] lg:w-72 w-24 sm:w-36 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl'}>
          <img alt={img.alt}
               src={img.src}
               loading={'lazy'} decoding={'async'}
               className={'inset-0 h-full w-full object-cover bg-zinc-100 dark:bg-zinc-800'}
               style={{ color: 'transparent' }}/>
        </div>
      })}
    </div>
}

export default ImageCarousel
