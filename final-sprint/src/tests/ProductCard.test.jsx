import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductCard from "../components/ProductCard";

describe("ProductCard", () => {
  test("renders the product name", () => {
    const mockProduct = {
      id: "1",
      name: "The Base Stick",
      price: 37,
      shortDescription: "Sheer Foundation",
      image: "/Images/foundation-stick.png",
    };

    render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText("The Base Stick")).toBeInTheDocument();
  });
});
