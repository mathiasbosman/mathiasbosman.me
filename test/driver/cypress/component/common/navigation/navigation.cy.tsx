import Navigation from '../../../../../../src/components/common/navigation/navigation.tsx'
import { type HTMLSimpleLink } from '../../../../../../src/shared/utils.tsx'

const mockLinks: HTMLSimpleLink[] = [
  { href: '/', text: 'home' },
  { href: '/pageA', text: 'Page A' }
]

describe('<Navigation/>', () => {
  it('renders', () => {
    cy.mount(<Navigation renderAvatar={true} links={mockLinks} location={'/'}/>)
  })
})
