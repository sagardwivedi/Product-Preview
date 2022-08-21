import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("render logo and is spinniing", () => {
  render(<App />);
  const logo = screen.getByAltText(/logo/i);
  expect(logo).toHaveClass("App-logo");
});
