import {render} from "@testing-library/react";
import Copyright from "../../components/Copyright";

describe("Copyright component", () => {

  beforeEach(() => {
    jest
    .spyOn(global.Date, "now")
    .mockImplementationOnce(() =>
        new Date("2021-02-01T09:00:00.000Z").valueOf()
    );
  });

  test("renders correctly without version", () => {
    const dom = render(<Copyright name="foo bar"/>);
    expect(dom.container.querySelector("span"))
    .toHaveTextContent("© 2021 foo bar");
    expect(dom.container.querySelector("span")
    .getAttribute("data-version")).toBeNull();
  });

  test("renders correctly with version", () => {
    const dom = render(<Copyright name="foo bar" version="1.0"/>);
    expect(dom.container.querySelector("span"))
    .toHaveTextContent("© 2021 foo bar");

    expect(dom.container.querySelector("span"))
    .toHaveAttribute("data-version", "1.0");
  });
});
