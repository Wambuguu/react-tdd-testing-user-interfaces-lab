import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Lewis`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("renders an image of yourself with alt text identifying the content", () => {
  render(<App />);
  const image = screen.getByAltText("A snapshot of myself");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "path/to/your/image.jpg");
});

test('renders a second-level heading with the text "About Me"', () => {
  render(<App />);
  const heading = screen.getByRole("heading", { level: 2, name: /About Me/i });
  expect(heading).toBeInTheDocument();
});

test("renders a paragraph for your biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/Your biography goes here/i);
  expect(bioParagraph).toBeInTheDocument();
});

test("renders a link to your GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /GitHub/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/Wambuguu/");
});

test("renders a link to your LinkedIn page", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/lewis-wambugu-7882422a8"
  );
});
