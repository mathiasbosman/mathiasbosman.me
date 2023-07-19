import { testOutgoingLinks } from '../../../support/e2e.ts'

describe('Experience page tests', () => {
  beforeEach(() => {
    cy.visit('/experiences')
  })

  it('Is available', () => {
    cy.screenshot()
  })

  it('Outgoing links do not return a 404 status', () => {
    testOutgoingLinks()
  })
})
