import {render, screen} from "@testing-library/react";
import TimeLineItem from "../../components/timeline/TimeLineItem";

describe("AbbrName component", () => {
  test("renders abbreviate name", () => {
    render(<TimeLineItem organisation="testOrg" title="testTitle" from="2000"
                         to="2001">test content</TimeLineItem>);
    expect(screen.getByText("testOrg")).toBeInTheDocument();
    expect(screen.getByText("testTitle")).toBeInTheDocument();
    expect(screen.getByText("2000 - 2001")).toBeInTheDocument();
    expect(screen.getByText("test content")).toBeInTheDocument();
  });

  test("renders to present", () => {
    render(<TimeLineItem organisation="testOrg" title="testTitle" from="2000">test
      content</TimeLineItem>);
    expect(screen.getByText("2000 - present")).toBeInTheDocument();
  });
});