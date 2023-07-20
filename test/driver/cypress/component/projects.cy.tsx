import type { Project } from '../../../../src/models/config/project.config.tsx'
import { projectFixutre } from '../fixtures/project.fixture.tsx'
import Projects from '../../../../src/components/projects.tsx'

describe('<Projects/>', () => {
  let mockImageSrc: string

  before('Load mock images', () => {
    cy.fixture('images/cypress_logo.webp', 'base64').then(data => {
      mockImageSrc = `data:image/webp;base64,${data}`
    })
  })

  it('Renders all projects when pinned is false', () => {
    const mockProjectList: Project[] = [
      projectFixutre('project A', true, mockImageSrc),
      projectFixutre('project B', true, mockImageSrc),
      projectFixutre('project C', false, mockImageSrc)
    ]
    cy.mount(<Projects projects={mockProjectList} pinned={false}/>)
    cy.get('h2').should('have.length', mockProjectList.length)
  })

  it('Renders only pinned projects when pinned is true', () => {
    const mockProjectList: Project[] = [
      projectFixutre('project A', true, mockImageSrc),
      projectFixutre('project B', true, mockImageSrc),
      projectFixutre('project C', false, mockImageSrc)
    ]
    cy.mount(<Projects projects={mockProjectList} pinned={true}/>)
    cy.get('h2').should('have.length', 2)
  })
})
