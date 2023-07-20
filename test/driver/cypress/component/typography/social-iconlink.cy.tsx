import SocialIconlink from '../../../../../src/components/typography/social-iconlink.tsx'
import { mockPageLink } from '../../fixtures/navigation.fixture.ts'
import { LinkIcon } from '../../../../../src/shared/icons.tsx'

describe('<SocialIconlink/>', () => {
  it('Renders correctly', () => {
    cy.mount(<SocialIconlink link={mockPageLink} icon={LinkIcon} />)
    cy.get('a').should('be.visible')
      .should('have.attr', 'href', mockPageLink.href)
      .should('have.attr', 'aria-label', 'Follow on ' + LinkIcon.name)
    cy.get('path').should('have.attr', 'd', LinkIcon.svgPath)
  })
})
