import Footer from './footer.tsx'
import Navigation from './navigation/navigation.tsx'
import { publicPages } from '@/models/config/navigation.config.tsx'
import { useLocation } from 'react-router-dom'
import type { PropsWithChildren, ReactElement } from 'react'
import { useEffect } from 'react'
import Avatar, { AvatarSize } from '@components/avatar.tsx'

import avatar from '@assets/mathias.webp'

interface Props {
  title?: string
  renderAvatar: boolean
}

export const Page = (props: PropsWithChildren<Props>): ReactElement => {
  useEffect(() => {
    if (props.title != null) { document.title = props.title }
  }, [props.title])

  return <main id="mainBoxy"
               className={'h-full flex flex-col bg-white dark:bg-black antialiased'}>
    <div className="h-1 bg-gradient-to-r from-violet-500 to-pink-700 "></div>
    <div className={'mx-auto w-full max-w-7xl lg:px-8'}>
      <div className={'relative px-4 sm:px-8 lg:px-12'}>
        <header className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <Navigation
            leftSlot={props.renderAvatar && <Avatar image={{
              src: avatar,
              alt: 'Avatar'
            }} size={AvatarSize.xs}/>}
            links={publicPages}
            location={useLocation().pathname}/>
        </header>
      </div>
    </div>
    {props.children}
    <Footer links={publicPages}/>
  </main>
}

export default Page
