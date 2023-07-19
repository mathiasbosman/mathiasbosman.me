import { testOutgoingLinks } from '../../../support/e2e.ts'

describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Required elements are present', () => {
    cy.get('sandbox-home-page').should('be.visible')
    cy.get('sandbox-navigation').should('be.visible')
    cy.get('sandbox-avatar').should('be.visible')
    cy.get('sandbox-page-title').should('be.visible')
    cy.get('sandbox-icon-link').should('have.length', 2)
    cy.get('sandbox-image-carousel').should('be.visible')
    cy.get('sandbox-projects').should('be.visible')
    cy.get('sandbox-contact-section').should('be.visible')
    cy.get('sandbox-employment').should('be.visible')
    cy.get('sandbox-footer').should('be.visible')
    cy.screenshot()
  })

  it('Outgoing links do not return a 404 status', () => {
    testOutgoingLinks()
  })
})
