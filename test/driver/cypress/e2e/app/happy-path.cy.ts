import { allPages, publicTestPages } from "../config.ts";

describe("Happy paths", () => {
  beforeEach("Set viewport for navigation", () => {
    cy.viewport(850, 660);
  });

  function _navigate(path: string): void {
    cy.get("nav")
      .find('a[href="' + path + '"]')
      .filter(":visible") //we have two navs but in this case we don't really care
      .click();
  }

  it("All pages can be visited directly", () => {
    allPages.forEach((page) => {
      cy.visit(page);
    });
  });

  it("User can navigate to and back home from each public page", () => {
    cy.visit("/");
    publicTestPages.forEach((path) => {
      _navigate(path);
      cy.get('header a[href="/"]').click();
      cy.location().should((loc) => expect(loc.pathname).to.eq("/"));
    });
  });

  it("User can navigate back and forth between public pages", () => {
    publicTestPages.forEach((currentPath) => {
      cy.visit(currentPath);
      // navigate via ui to other page
      publicTestPages
        .filter((link) => link !== currentPath)
        .forEach((link) => {
          cy.log("Navigation from " + currentPath + " to " + link);
          _navigate(link);
          // return to starting point
          cy.visit(currentPath);
        });
    });
  });
});
