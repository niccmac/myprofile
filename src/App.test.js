import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page link", () => {
  render(<App />);
  const linkElement = screen.getByText(/nicole maclean/i);
  expect(linkElement).toBeInTheDocument();
});
