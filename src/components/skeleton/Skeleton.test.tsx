import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Skeleton } from "./Skeleton";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("Skeleton", () => {
  it("should render skeleton element", () => {
    renderWithTheme(<Skeleton />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toBeInTheDocument();
  });

  it("should apply width as number", () => {
    renderWithTheme(<Skeleton width={100} />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toHaveStyle({ width: "100px" });
  });

  it("should apply width as string", () => {
    renderWithTheme(<Skeleton width="50%" />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toHaveStyle({ width: "50%" });
  });

  it("should apply height as number", () => {
    renderWithTheme(<Skeleton height={50} />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toHaveStyle({ height: "50px" });
  });

  it("should apply height as string", () => {
    renderWithTheme(<Skeleton height="2rem" />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toHaveStyle({ height: "2rem" });
  });

  it("should apply both width and height", () => {
    renderWithTheme(<Skeleton width={200} height={100} />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toHaveStyle({ width: "200px", height: "100px" });
  });

  it("should accept custom className", () => {
    renderWithTheme(<Skeleton className="custom-skeleton" />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton).toHaveClass("custom-skeleton");
  });

  it("should render as span element", () => {
    renderWithTheme(<Skeleton />);
    const skeleton = screen.getByTestId("skeleton-loader");
    expect(skeleton.tagName).toBe("SPAN");
  });
});
