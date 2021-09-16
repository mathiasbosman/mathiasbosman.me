import {render, screen} from "@testing-library/react";
import GoogleMapsLocation from "../../components/GoogleMapsLocation";

describe("Google Maps location component", () => {
  test("Renders completely", () => {
    render(<GoogleMapsLocation locationName="town" postalCode="code"
                               country="country"/>);
    expect(screen.getByRole("link")).toHaveAttribute("href",
        "https://www.google.com/maps/place/code+town");
  });

  test("Renders without contry", () => {
    render(<GoogleMapsLocation locationName="town"/>);
    expect(screen.getByRole("link")).toHaveAttribute("href",
        "https://www.google.com/maps/place/town");
  });

  test("Renders with extra property", () => {
    render(<GoogleMapsLocation locationName="town" itemProp="homeLocation"/>);
    screen.debug();
    expect(screen.getByRole("link")).toHaveAttribute("itemprop",
        "homeLocation");
  });
});