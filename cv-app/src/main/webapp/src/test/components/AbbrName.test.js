import {render, screen} from "@testing-library/react";
import AbbrName from "../../components/AbbrName";

describe("AbbrName component", () => {
  test("renders abbreviate complete name", () => {
    render(<AbbrName firstName="John" lastName="Doe"/>);
    expect(screen.getByText("John D.")).toBeInTheDocument();
  });

  test("renders just first name", () => {
    render(<AbbrName firstName="John"/>);
    expect(screen.getByText("John")).toBeInTheDocument();
  });
});