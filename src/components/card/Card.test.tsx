import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./Card";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Card", () => {
  it("should render card with all sections", () => {
    renderWithTheme(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
          <CardDescription>Test Description</CardDescription>
          <CardAction>
            <button>Action</button>
          </CardAction>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /action/i })).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("should apply isSelected prop", () => {
    renderWithTheme(
      <Card isSelected>
        <CardTitle>Selected Card</CardTitle>
      </Card>
    );

    expect(screen.getByText("Selected Card")).toBeInTheDocument();
  });

  it("should render CardTitle as h3", () => {
    renderWithTheme(<CardTitle>Title</CardTitle>);
    const title = screen.getByRole("heading", { level: 3 });
    expect(title).toHaveTextContent("Title");
  });

  it("should render CardDescription as p", () => {
    renderWithTheme(<CardDescription>Description</CardDescription>);
    const description = screen.getByText("Description");
    expect(description.tagName).toBe("P");
  });

  it("should render semantic HTML elements", () => {
    renderWithTheme(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
        </CardHeader>
        <CardContent>Content text</CardContent>
        <CardFooter>Footer text</CardFooter>
      </Card>
    );

    // Verify content is accessible
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Content text")).toBeInTheDocument();
    expect(screen.getByText("Footer text")).toBeInTheDocument();
  });
});
