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

  it("All pages can be visited directly and have an h1", () => {
    allPages.forEach((page) => {
      cy.visit(page);
      cy.get("h1").should("be.visible");
      cy.screenshot("pages" + page);
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

  it("All outgoing links should be reachable", () => {
    interface testedLink {
      href: string;
      page: string;
    }

    const checkedLinks: testedLink[] = [];
    allPages.forEach((page) => {
      cy.visit(page);
      cy.get(`a[href^="http://"],a[href^="https://"]`).each((link) => {
        const testingLink: testedLink = {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          href: link.prop(`href`),
          page: page,
        };
        const alreadyChecked = checkedLinks.find(
          (link) => link.href === testingLink.href,
        );

        if (alreadyChecked === undefined) {
          cy.request({
            failOnStatusCode: false,
            url: testingLink.href,
          })
            .its(`status`)
            .should(`not.eq`, 404);
          checkedLinks.push(testingLink);
        } else {
          cy.log(
            alreadyChecked.href + " already tested in " + alreadyChecked.page,
          );
        }
      });
    });
  });
});
