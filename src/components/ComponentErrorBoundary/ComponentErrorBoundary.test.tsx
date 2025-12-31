import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { ComponentErrorBoundary } from "./ComponentErrorBoundary";

const mockUseRouteError = jest.fn();

jest.mock("react-router-dom", () => ({
  Link: ({
    children,
    to,
    ...props
  }: {
    children: React.ReactNode;
    to: string;
    [key: string]: unknown;
  }) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  useRouteError: () => mockUseRouteError(),
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ComponentErrorBoundary", () => {
  it("should render error title", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error"));

    renderWithTheme(<ComponentErrorBoundary />);
    expect(screen.getByText("Component Error")).toBeInTheDocument();
  });

  it("should render error message", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error"));

    renderWithTheme(<ComponentErrorBoundary />);
    expect(
      screen.getByText("Something went wrong with this component.")
    ).toBeInTheDocument();
  });

  it("should render error details for Error instance", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error message"));

    renderWithTheme(<ComponentErrorBoundary />);
    expect(screen.getByText(/Test error message/)).toBeInTheDocument();
  });

  it("should render link back to home", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error"));

    renderWithTheme(<ComponentErrorBoundary />);
    const homeLink = screen.getByRole("link", { name: /go back to home/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should handle null error", () => {
    mockUseRouteError.mockReturnValue(null);

    renderWithTheme(<ComponentErrorBoundary />);
    expect(screen.getByText("Component Error")).toBeInTheDocument();
    expect(screen.queryByText(/Error:/)).not.toBeInTheDocument();
  });

  it("should render error details section when error exists", () => {
    mockUseRouteError.mockReturnValue(new Error("Detailed error info"));

    renderWithTheme(<ComponentErrorBoundary />);
    const errorDetails = screen.getByText(/Error:/);

    expect(errorDetails).toBeInTheDocument();
    expect(screen.getByText(/Detailed error info/)).toBeInTheDocument();
  });

  it("should show 'Unknown error' for error without message", () => {
    const errorWithoutMessage = new Error();
    errorWithoutMessage.message = "";
    mockUseRouteError.mockReturnValue(errorWithoutMessage);

    renderWithTheme(<ComponentErrorBoundary />);
    expect(screen.getByText(/Unknown error/)).toBeInTheDocument();
  });
});
