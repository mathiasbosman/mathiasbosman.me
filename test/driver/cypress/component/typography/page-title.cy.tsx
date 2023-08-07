import PageTitle from "@components/typography/page-title.tsx";

describe("<PageTitle/> component", () => {
  it("Should render correctly", () => {
    cy.mount(<PageTitle title={"foo bar"} />);
    cy.get("h1").should("have.text", "foo bar");
  });

  it("Should render with Reactnode as title slot", () => {
    cy.mount(<PageTitle title={<div id="mock_slot">Foo bar</div>} />);
    cy.get("#mock_slot").should("have.text", "Foo bar").should("be.visible");
  });

  it("Should render subtitle slot with children", () => {
    cy.mount(
      <PageTitle
        title={"foo"}
        subtitleSlot={<span id="mock_slot">subtitle</span>}
      />,
    );
    cy.get("#mock_slot").should("have.text", "subtitle").should("be.visible");
  });
});
