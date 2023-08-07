import type { Project } from "@models/config/project.config.ts";
import Projects from "@components/projects.tsx";
import { projectFixture } from "../fixtures/project.fixture.ts";

describe("<Projects/> component", () => {
  let mockImageSrc: string;

  before("Load mock images", () => {
    cy.fixture("images/cypress_logo.webp", "base64").then((data) => {
      mockImageSrc = `data:image/webp;base64,${data}`;
    });
  });

  it("Should render all projects when pinned is false", () => {
    const mockProjectList: Project[] = [
      projectFixture("project A", true, mockImageSrc),
      projectFixture("project B", true, mockImageSrc),
      projectFixture("project C", false, mockImageSrc),
    ];
    cy.mount(<Projects projects={mockProjectList} pinned={false} />);
    cy.get("article").should("have.length", mockProjectList.length);
  });

  it("Should only render pinned projects when pinned is true", () => {
    const mockProjectList: Project[] = [
      projectFixture("project A", true, mockImageSrc),
      projectFixture("project B", true, mockImageSrc),
      projectFixture("project C", false, mockImageSrc),
    ];
    cy.mount(<Projects projects={mockProjectList} pinned={true} />);
    cy.get("article").should("have.length", 2);
  });
});
