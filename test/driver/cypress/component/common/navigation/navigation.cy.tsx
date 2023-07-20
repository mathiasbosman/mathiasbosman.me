import Navigation from '../../../../../../src/components/common/navigation/navigation.tsx'
import { mockLinks } from '../../../fixtures/navigation.fixture.ts'

describe('<Navigation/>', () => {
  beforeEach(() => {
    cy.mount(<Navigation renderAvatar={true} links={mockLinks} location={'/'}/>)
  })

  it('renders on medium viewport', () => {
    cy.viewport(768, 1024)
    cy.get('nav').first().should('be.visible').within(() => {
      cy.get('a').should('have.length', mockLinks.length)
    })
    cy.get('a[href="/"] img').should('be.visible')
  })

  it('active link has a span (indicator) on medium viewport', () => {
    cy.viewport(768, 1024)
    cy.get('nav').first().get('a[href="/"] span').should('exist')
  })

  it('main navigation does not show on smaller viewport', () => {
    cy.viewport(767, 1024)
    cy.get('nav').first().should('not.be.visible')
  })
})
