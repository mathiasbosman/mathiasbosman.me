import {render} from "@testing-library/react";
import Age from "../../components/Age";

describe("Age component", () => {
  test("renders years correctly", () => {
    jest
    .spyOn(global.Date, "now")
    .mockImplementationOnce(() =>
        new Date("2021-02-01T09:00:00.000Z").valueOf()
    );

    const dom = render(<Age birthdate="1990-12-05"/>);
    expect(dom.container.querySelector("span")).toHaveTextContent(
        "30 years");
  });

  test("renders one year correctly", () => {
    jest
    .spyOn(global.Date, "now")
    .mockImplementationOnce(() =>
        new Date("1991-12-06T09:00:00.000Z").valueOf()
    );

    const dom = render(<Age birthdate="1990-12-05"/>);
    expect(dom.container.querySelector("span")).toHaveTextContent(
        "1 year");
  });

  test("renders one month correctly", () => {
    jest
    .spyOn(global.Date, "now")
    .mockImplementationOnce(() =>
        new Date("1990-12-06T09:00:00.000Z").valueOf()
    );

    const dom = render(<Age birthdate="1990-12-05"/>);
    expect(dom.container.querySelector("span")).toHaveTextContent(
        "1 month");
  });

  test("renders months correctly", () => {
    jest
    .spyOn(global.Date, "now")
    .mockImplementationOnce(() =>
        new Date("1991-02-06T09:00:00.000Z").valueOf()
    );

    const dom = render(<Age birthdate="1990-12-05"/>);
    expect(dom.container.querySelector("span")).toHaveTextContent(
        "2 months");
  });
});
