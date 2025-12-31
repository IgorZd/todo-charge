import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { EmptyState } from "./EmptyState";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("EmptyState", () => {
  it("should render children text", () => {
    renderWithTheme(<EmptyState>No items found</EmptyState>);
    expect(screen.getByText("No items found")).toBeInTheDocument();
  });

  it("should render complex children", () => {
    renderWithTheme(
      <EmptyState>
        <div>
          <h3>Empty</h3>
          <p>Nothing to show here</p>
        </div>
      </EmptyState>
    );

    expect(screen.getByText("Empty")).toBeInTheDocument();
    expect(screen.getByText("Nothing to show here")).toBeInTheDocument();
  });

  it("should render multiple text nodes", () => {
    renderWithTheme(
      <EmptyState>No users found. Please try again later.</EmptyState>
    );

    expect(screen.getByText(/No users found/i)).toBeInTheDocument();
  });

  it("should apply correct styling", () => {
    renderWithTheme(<EmptyState>Empty</EmptyState>);
    const element = screen.getByText("Empty");

    expect(element).toHaveStyle({
      textAlign: "center",
    });
  });
});
