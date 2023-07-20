import type { HTMLSimpleLink } from '../../../../../src/shared/utils.tsx'
import Footer from '../../../../../src/components/common/footer.tsx'

const mockLinks: HTMLSimpleLink[] = [
  { href: '/', text: 'home' },
  { href: '/pageA', text: 'Page A' }
]
describe('<Footer/>', () => {
  it('Footer renders correctly', () => {
    cy.mount(<Footer links={mockLinks}/>)
    cy.get('footer').should('be.visible')
    cy.get('a').should('have.length', mockLinks.length)
    cy.get('p').should('have.text',
      '© ' + new Date().getFullYear().toString() + ' Mathias Bosman. All rights reserved.')
  })
})
