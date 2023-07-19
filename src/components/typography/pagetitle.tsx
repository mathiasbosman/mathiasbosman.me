import { type PropsWithChildren, type ReactElement } from 'react'

interface Props {
  title: string
}
export const Pagetitle = (props: PropsWithChildren<Props>): ReactElement => {
  return <>
    <h1
      className={'mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'}
    >{props.title}</h1>
    {props.children !== undefined &&
    <p className={'mt-6 text-base text-zinc-500 dark:text-zinc-400'}>
      {props.children}
    </p>}
  </>
}

export default Pagetitle
