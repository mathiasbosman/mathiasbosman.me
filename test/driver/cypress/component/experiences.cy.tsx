import Experiences from "@components/experiences.tsx";
import {
  experienceItemMock,
  experiencesWithOnePlaceAndOneItem,
  experienceWithOnePlaceAndOneItem,
} from "../../../fixtures/experience.fixture";

describe("<Experiences/> component", () => {
  it("Should render with one item", () => {
    cy.mount(<Experiences experiences={experiencesWithOnePlaceAndOneItem} />);
    const ref = "ref:" + experienceWithOnePlaceAndOneItem.place;
    const section = cy.get("section");
    section.should("be.visible").and("have.attr", "aria-labelledby", ref);
    section.within(() => {
      // experience checks
      cy.get("h2")
        .should("be.visible")
        .should("have.attr", "id", ref)
        .should("have.text", experienceWithOnePlaceAndOneItem.place);

      const article = cy.get("article");
      article.should("be.visible");
      article.within(() => {
        // item checks
        cy.get('a[href="/href"]')
          .should("be.visible")
          .should("have.text", experienceItemMock.title);
        cy.get("p").should("contain.text", experienceItemMock.description);
        cy.get("p").should(
          "contain.text",
          experienceItemMock.period.toString(),
        );
      });
    });
  });
});
