import { Employment } from "@components/employment.tsx";
import {
  experienceItemMock,
  experiencesWithOnePlaceAndOneItem,
  experiencesWithTwoPlaces,
} from "../../../fixtures/experience.fixture";

describe("<Employment/> component", () => {
  it("Should render correctly with a single item", () => {
    cy.mount(<Employment experiences={experiencesWithOnePlaceAndOneItem} />);
    cy.get("article")
      .should("contain.text", experienceItemMock.title)
      .should("contain.text", experiencesWithOnePlaceAndOneItem[0].place);
  });

  it("Should render correctly with multiple experiences", () => {
    cy.mount(<Employment experiences={experiencesWithTwoPlaces} />);
    let amountPinned = 0;
    experiencesWithTwoPlaces.map((exp) =>
      exp.items.filter((item) => item.pinned).map(() => amountPinned++),
    );
    cy.get("article").should("have.length", amountPinned);
  });
});
