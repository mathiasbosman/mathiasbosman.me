import Page from "@components/common/page.tsx";
import { MemoryRouter } from "react-router-dom";
import type { ReactElement } from "react";

describe("<Page/> component", () => {
  const renderInRouterContext = (title: string): ReactElement => {
    return (
      <MemoryRouter initialEntries={["/", "/pageA"]}>
        <Page renderAvatar={true} title={title} />
      </MemoryRouter>
    );
  };

  it("Should manipulate the document title", () => {
    cy.mount(renderInRouterContext("foo bar"));
    cy.title().should("eq", "foo bar");
  });

  it("Should render with all expected elements", () => {
    cy.mount(renderInRouterContext("foo bar"));
    cy.get("main").should("be.visible");
    cy.get("nav").should("exist");
    cy.get("header").should("be.visible");
    cy.get("footer").should("be.visible");
  });
});
