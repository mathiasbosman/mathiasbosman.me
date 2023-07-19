import { type PropsWithChildren, type ReactElement } from 'react'
import { type HTMLSimpleLink } from '../../shared/utils.tsx'
import Contentwrapper from './content-wrapper.tsx'
import Link from '../typography/link.tsx'

interface Props {
  links: HTMLSimpleLink[]
}

export const Footer = (props: PropsWithChildren<Props>): ReactElement => {
  return <footer className={'mt-32 sm:px-8'}>
      <Contentwrapper>
        <div className={'border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40'}>
          <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
            <div className={'flex flex-col items-center justify-between gap-6 sm:flex-row'}>
              <div className={'flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200'}>
                {Array.isArray(props.links) && props.links.map((link, i) => {
                  return <Link key={i} link={link}/>
                })}
              </div>
              <p className={'text-sm text-zinc-400 dark:text-zinc-500'}>
                © {new Date().getFullYear()} Mathias Bosman. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Contentwrapper>
    </footer>
}

export default Footer
