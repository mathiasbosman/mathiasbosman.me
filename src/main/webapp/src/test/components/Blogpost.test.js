import {render, screen} from "@testing-library/react";
import BlogPostExcerpt from "../../components/blog/BlogPostExcerpt";

describe("Blogpost component", () => {
  test("renders shortname correctly", () => {
    let postObject = {
      content: {},
      poster: {
        firstName: "John",
        lastName: "Doe"
      }
    }
    render(<BlogPostExcerpt post={postObject}/>);
    expect(screen.getByText("John D.")).toBeInTheDocument();
  });
});