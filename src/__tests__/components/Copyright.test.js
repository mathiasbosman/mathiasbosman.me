import {render, screen} from "@testing-library/react";
import Copyright from "../../components/Copyright";

describe("Copyright component", () => {
  test("renders correctly", () => {
    const currentYear = new Date().getFullYear();
    render(<Copyright name="John Doe"/>);
    expect(
        screen.getByText("© " + currentYear + " John Doe")).toBeInTheDocument();
  });
});
