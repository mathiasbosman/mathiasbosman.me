import { type HTMLSimpleLink } from '../../../shared/utils.tsx'
import { type PropsWithChildren, type ReactElement, useState } from 'react'
import { ArrowDownIcon, CloseIcon } from '../../../shared/icons.tsx'

interface Props {
  links: HTMLSimpleLink[]
}

export const NavigationModal = (props: PropsWithChildren<Props>): ReactElement => {
  const [visible, setVisible] = useState(false)

  return <>
    <div className={'pointer-events-auto mx-2 md:hidden justify-end flex'}>
      <button className={'group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'}
              type={'button'}
              aria-expanded={true}
              onClick={() => { setVisible(!visible) }}
              >
        Menu
        <svg viewBox={'0 0 8 6'}
             aria-hidden={!visible}
             className={'ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400'}
          >
          <path d={ArrowDownIcon.svgPath} fill={'none'} strokeWidth={1.5} strokeLinecap={'round'} strokeLinejoin={'round'}></path>
        </svg>
      </button>
      <div>
        <div className={'fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100 ' + (!visible ? 'hidden' : '')}
             aria-hidden={!visible}></div>
        <div className={'fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100 ' + (!visible ? 'hidden' : '')}
             tabIndex={-1}>
          <div className={'flex flex-row-reverse items-center justify-between'}>
            <button aria-label={'Close menu'}
                    className={'-m-1 p-1'}
                    type={'button'}
                    tabIndex={0}
                    onClick={() => { setVisible(!visible) }}
            >
              <svg viewBox={'0 0 24 24'} aria-hidden={!visible}
                   className={'h-6 w-6 text-zinc-500 dark:text-zinc-400'}>
                <path d={CloseIcon.svgPath}
                      fill={'none'}
                      stroke={'currentColor'}
                      strokeWidth={1.5}
                      strokeLinecap={'round'}
                      strokeLinejoin={'round'}></path>
              </svg>
            </button>
            <h2 className={'text-sm font-medium text-zinc-600 dark:text-zinc-400'}>
              Navigation
            </h2>
          </div>
          <nav className={'mt-6'}>
            <ul
              className={'-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'}
            >
              {props.links.map((link, i) => {
                return <li key={i}>
                    <a className={'block py-2'} href={link.href}>{link.text}</a>
                  </li>
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </>
}

export default NavigationModal
