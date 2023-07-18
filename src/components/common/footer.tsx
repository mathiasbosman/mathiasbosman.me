import { type PropsWithChildren, type ReactElement } from 'react'
import { type HTMLSimpleLink } from '../../shared/utils.ts'

interface Props {
  links: HTMLSimpleLink[]
}

const Footer = (props: PropsWithChildren<Props>): ReactElement => {
  return <>
    <footer className="mt-32 sm:px-8">
      <span>SANDBOX_CONTENT_WRAPPER</span>
    </footer>
  </>
}

export default Footer
