import type { PropsWithChildren} from 'react';
import { type ReactElement, useEffect } from 'react'
import Footer from './footer.tsx'
import { LINK_GITHUB, LINK_LINKEDIN } from '../../constants.tsx'
import Navigation from './navigation/navigation.tsx'
import { publicPages } from '../../models/config/navigation.config.tsx'
import { useLocation } from 'react-router-dom'

interface Props {
  title?: string
  renderAvatar: boolean
}

export const Page = (props: PropsWithChildren<Props>): ReactElement => {
  useEffect(() => {
    if (props.title != null) { document.title = props.title }
  }, [props.title])

  return <main id="mainBoxy"
              className={'h-full flex flex-col bg-zinc-50 dark:bg-black antialiased'}>
    <div className={'fixed inset-0 flex justify-center sm:px-8'}>
      <div className={'flex w-full max-w-7xl lg:px-8'}>
        <div
          className={'w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'}></div>
      </div>
    </div>

    <div className={'relative'}>
      <div>
        <header className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <Navigation renderAvatar={props.renderAvatar}
                      links={publicPages}
                      location={useLocation().pathname}/>
        </header>
        {props.children}
      </div>
      <Footer links={[
        LINK_GITHUB, LINK_LINKEDIN
      ]}/>
    </div>
  </main>
}

export default Page
