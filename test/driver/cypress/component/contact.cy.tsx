import { Contact } from "@components/contact.tsx";

describe("<Contact/> component", () => {
  it("Should render correctly", () => {
    cy.mount(<Contact />);
    cy.get('input[aria-label="Your subject"]').should("be.visible");
    cy.get("button").should("be.visible");
  });

  it("Should handle input correctly", () => {
    cy.mount(<Contact />);
    const dummyText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    const input = cy.get('input[aria-label="Your subject"]');
    input.type(dummyText);
    input.should("have.value", dummyText.substring(0, 30));
  });
});
