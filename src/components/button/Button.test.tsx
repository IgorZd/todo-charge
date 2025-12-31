import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Button, ButtonVariant, ButtonSize } from "./Button";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Button", () => {
  it("should render button with text", () => {
    renderWithTheme(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("should handle click events", async () => {
    const handleClick = jest.fn();

    renderWithTheme(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should be disabled when disabled prop is true", () => {
    renderWithTheme(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should apply default variant", () => {
    renderWithTheme(<Button variant={ButtonVariant.DEFAULT}>Default</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should apply destructive variant", () => {
    renderWithTheme(
      <Button variant={ButtonVariant.DESTRUCTIVE}>Delete</Button>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should apply outline variant", () => {
    renderWithTheme(<Button variant={ButtonVariant.OUTLINE}>Outline</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should apply small size", () => {
    renderWithTheme(<Button size={ButtonSize.SM}>Small</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should apply large size", () => {
    renderWithTheme(<Button size={ButtonSize.LG}>Large</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should accept custom className", () => {
    renderWithTheme(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
