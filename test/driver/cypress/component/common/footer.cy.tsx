import type { HTMLSimpleLink } from '../../../../../src/shared/utils.tsx'
import Footer from '../../../../../src/components/common/footer.tsx'
import { htmlSimpleLinkFixture } from '../../fixtures/utils.fixture.tsx'

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
    .should('have.text',
      '© ' + new Date().getFullYear().toString() + ' Mathias Bosman. All rights reserved.')
    .should('have.css', 'text-align', 'center')
  })
})
