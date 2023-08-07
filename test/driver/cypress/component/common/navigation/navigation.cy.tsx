import Navigation from "@components/common/navigation/navigation.tsx";
import type { HTMLSimpleLink } from "@shared/utils.ts";
import { htmlSimpleLinkFixture } from "../../../fixtures/utils.fixture.ts";
import { MemoryRouter } from "react-router-dom";

describe("<Navigation/> component", () => {
  const mockLinks: HTMLSimpleLink[] = [
    htmlSimpleLinkFixture("/pageA", "page A"),
    htmlSimpleLinkFixture("/pageB", "page B"),
  ];

  beforeEach("Setup router and component", () => {
    cy.mount(
      <MemoryRouter>
        <Navigation
          leftSlot={<span id="mock_slot">avatar</span>}
          links={mockLinks}
          location={"/pageA"}
        />
      </MemoryRouter>,
    );
  });

  context(
    "Small viewport",
    {
      viewportWidth: 639,
      viewportHeight: 200,
    },
    () => {
      it("Should not show on small viewport", () => {
        cy.get("nav").first().should("not.be.visible");
      });
    },
  );

  context(
    "Medium viewport",
    {
      viewportWidth: 640,
      viewportHeight: 200,
    },
    () => {
      it("Should render on medium viewport", () => {
        cy.get("nav")
          .first()
          .should("be.visible")
          .within(() => {
            cy.get("a").should("have.length", 2);
          });
        cy.get("#mock_slot").should("be.visible");
      });

      it("Should have a span on the active link", () => {
        cy.get("nav").first().get('a[href="/pageA').should("exist");
      });
    },
  );
});
