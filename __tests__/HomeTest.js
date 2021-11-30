import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/index";

test("Check for Getting Started Text", () => {
  render(<Home />);
  expect(screen.getByText("Get started by editing")).toBeInTheDocument();
});