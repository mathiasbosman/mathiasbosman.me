import {render, screen} from "@testing-library/react";
import BlogPost from "../../components/blog/Blogpost";

describe("Blogpost component", () => {
  test("renders shortname correctly", () => {
    let postObject = {
      content: {},
      poster: {
        firstName: "John",
        lastName: "Doe"
      }
    }
    render(<BlogPost post={postObject}/>);
    expect(screen.getByText("by John D.")).toBeInTheDocument();
  });
});