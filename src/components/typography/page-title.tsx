import type { PropsWithChildren, ReactElement, ReactNode } from 'react'

interface Props {
  title: ReactNode
  subtitleSlot?: ReactNode
}

export const PageTitle = (props: PropsWithChildren<Props>): ReactElement => {
  return <>
    <h1
      className={'mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 z-10'}
    >{props.title}
      {props.subtitleSlot}
    </h1>
  </>
}

export default PageTitle
