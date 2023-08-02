import SocialIconlink from '../../../../../src/components/typography/social-iconlink'
import { LinkIcon } from '../../../../../src/shared/icons'
import { htmlSimpleLinkFixture } from '../../fixtures/utils.fixture'

describe('<SocialIconlink/>', () => {
  it('Renders correctly', () => {
    cy.mount(<SocialIconlink link={htmlSimpleLinkFixture('/href', 'text')} icon={LinkIcon}/>)
    cy.get('a').should('be.visible')
    .should('have.attr', 'href', '/href')
    .should('have.attr', 'aria-label', 'Follow on ' + LinkIcon.name)
    cy.get('path').should('have.attr', 'd', LinkIcon.svgPath)
  })
})
