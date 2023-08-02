import NavigationModal from '../../../../../../src/components/common/navigation/navigation-modal'
import type { HTMLSimpleLink } from '../../../../../../src/shared/utils'
import { htmlSimpleLinkFixture } from '../../../fixtures/utils.fixture'

describe('<NavigationModal/>', () => {

  const mockLinks: HTMLSimpleLink[] = [
    htmlSimpleLinkFixture('/pageA', 'page A'),
    htmlSimpleLinkFixture('/pageB', 'page B')
  ]

  beforeEach('force smaller viewport', () => {
    cy.viewport(767, 1024)
    cy.mount(<NavigationModal links={mockLinks}/>)
  })

  it('modal does not render on page load', () => {
    cy.get('nav').should('not.be.visible')
  })

  it('button renders (on smaller viewport)', () => {
    cy.get('button[aria-expanded="true"]').should('be.visible')
  })

  it('clicking the button changes the modal visibility state', () => {
    cy.get('button[aria-expanded="true"]').click()
    cy.get('nav').should('be.visible')
    cy.get('button[aria-label="Close menu"]').should('be.visible')
    .click()
    cy.get('nav').should('not.be.visible')
  })
})
