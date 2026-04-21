import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CartPage from "../pages/CartPage";

describe("CartPage", () => {
  test("shows the empty cart message", () => {
    render(
      <MemoryRouter>
        <CartPage
          cart={[]}
          increaseQty={() => {}}
          decreaseQty={() => {}}
          removeFromCart={() => {}}
        />
      </MemoryRouter>,
    );

    expect(screen.getByText("Your cart is empty.")).toBeInTheDocument();
  });
});
