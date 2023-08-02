import Navigation from '@components/common/navigation/navigation.tsx'
import type { HTMLSimpleLink } from '@shared/utils.ts'
import { htmlSimpleLinkFixture } from '../../../fixtures/utils.fixture.ts'

describe('<Navigation/>', () => {

  const mockLinks: HTMLSimpleLink[] = [
    htmlSimpleLinkFixture('/pageA', 'page A'),
    htmlSimpleLinkFixture('/pageB', 'page B')
  ]

  beforeEach(() => {
    cy.mount(<Navigation
      leftSlot={<span id="mock_slot">avatar</span>}
      links={mockLinks}
      location={'/pageA'}/>)
  })

  it('renders on medium viewport', () => {
    cy.viewport(768, 1024)
    cy.get('nav').first().should('be.visible').within(() => {
      cy.get('a').should('have.length', 2)
    })
    cy.get('#mock_slot').should('be.visible')
  })

  it('active link has a span (indicator) on medium viewport', () => {
    cy.viewport(768, 1024)
    cy.get('nav').first().get('a[href="/pageA"] span').should('exist')
  })

  it('main navigation does not show on smaller viewport', () => {
    cy.viewport(767, 1024)
    cy.get('nav').first().should('not.be.visible')
  })
})
