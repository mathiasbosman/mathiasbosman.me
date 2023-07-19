import { testOutgoingLinks } from '../../../support/e2e.ts'

describe('Projects page tests', () => {
  beforeEach(() => {
    cy.visit('/projects')
  })

  it('Is available', () => {
    cy.screenshot()
  })

  it('Outgoing links do not return a 404 status', () => {
    testOutgoingLinks()
  })
})
