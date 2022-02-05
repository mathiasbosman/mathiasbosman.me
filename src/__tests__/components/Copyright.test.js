import {render} from "@testing-library/react";
import Copyright from "../../components/Copyright";

describe("Copyright component", () => {
  test("renders correctly", () => {
    jest
    .spyOn(global.Date, "now")
    .mockImplementationOnce(() =>
        new Date("2021-02-01T09:00:00.000Z").valueOf()
    );

    const dom = render(<Copyright name="foo bar"/>);
    expect(dom.container.querySelector("span")).toHaveTextContent(
        "© 2021 foo bar");
  });
});
