import { testOutgoingLinks } from '../../../support/e2e.ts'

describe('Homepage tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Is available', () => {
    cy.screenshot()
  })

  it('Outgoing links do not return a 404 status', () => {
    testOutgoingLinks()
  })
})