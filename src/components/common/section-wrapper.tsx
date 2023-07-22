import type { PropsWithChildren, ReactElement } from 'react'

export const SectionWrapper = (props: PropsWithChildren): ReactElement => {
  return <div className={'relative px-2 sm:px-8 lg:px-12 mt-16'}>
    {props.children}
  </div>
}

export default SectionWrapper
