import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer", () => {
  test("Renders the Common logo text", () => {
    render(<Footer />);
    expect(screen.getByText("Common")).toBeInTheDocument();
  });
});
