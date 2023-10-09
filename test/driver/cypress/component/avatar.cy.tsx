import Avatar, { AvatarSize } from "@components/avatar.tsx";
import { htmlImageFixture } from "../../../fixtures/utils.fixture.ts";

describe("<Avatar/> component", () => {
  it("Should render correctly", () => {
    cy.mount(
      <Avatar
        image={htmlImageFixture("foo.webp", "img_alt")}
        size={AvatarSize.s}
      />,
    );
    cy.get("img")
      .should("be.visible")
      .should("have.attr", "alt", "img_alt")
      .should("have.attr", "src", "foo.webp");
  });

  it("Should have correctly applied size", () => {
    cy.mount(
      <Avatar
        image={htmlImageFixture("foo.webp", "img_alt")}
        size={AvatarSize.s}
      />,
    );
    cy.get("div")
      .should("have.class", "w-" + AvatarSize.s)
      .should("have.class", "h-" + AvatarSize.s);
  });
});
