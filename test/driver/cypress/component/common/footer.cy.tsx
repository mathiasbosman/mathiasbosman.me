import type { HTMLSimpleLink } from '../../../../../src/shared/utils'
import Footer from '../../../../../src/components/common/footer'
import { htmlSimpleLinkFixture } from '../../fixtures/utils.fixture'

const mockLinks: HTMLSimpleLink[] = [
  htmlSimpleLinkFixture('/', 'home'),
  htmlSimpleLinkFixture('/pageA', 'page A')
]
describe('<Footer/>', () => {
  it('Footer renders correctly', () => {
    cy.mount(<Footer links={mockLinks}/>)
    cy.get('footer').should('be.visible')
    cy.get('a').should('have.length', 2)
    cy.get('p')
    .should('have.html',
      '©&nbsp;' + new Date().getFullYear().toString()
      + ' Mathias&nbsp;Bosman. All&nbsp;rights&nbsp;reserved.')
    .should('have.css', 'text-align', 'center')
  })
})
