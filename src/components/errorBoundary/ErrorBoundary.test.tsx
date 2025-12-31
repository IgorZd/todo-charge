import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { ErrorBoundary } from "./ErrorBoundary";

// Mock react-router-dom
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
  isRouteErrorResponse: (error: unknown) =>
    error && typeof (error as Record<string, unknown>).status === "number",
}));

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("ErrorBoundary", () => {
  it("should render error title", () => {
    mockUseRouteError.mockReturnValue(
      new Response("Not Found", { status: 404, statusText: "Not Found" })
    );

    renderWithTheme(<ErrorBoundary />);
    expect(screen.getByText("Oops! Something went wrong")).toBeInTheDocument();
  });

  it("should render 404 error with status", () => {
    mockUseRouteError.mockReturnValue({
      status: 404,
      statusText: "Not Found",
    });

    renderWithTheme(<ErrorBoundary />);
    expect(screen.getByText("Error 404")).toBeInTheDocument();
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });

  it("should render 500 error with status", () => {
    mockUseRouteError.mockReturnValue({
      status: 500,
      statusText: "Internal Server Error",
    });

    renderWithTheme(<ErrorBoundary />);
    expect(screen.getByText("Error 500")).toBeInTheDocument();
    expect(screen.getByText("Internal Server Error")).toBeInTheDocument();
  });

  it("should render error message for Error instance", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error message"));

    renderWithTheme(<ErrorBoundary />);
    expect(screen.getByText("Test error message")).toBeInTheDocument();
  });

  it("should render generic error message for unknown errors", () => {
    mockUseRouteError.mockReturnValue("Unknown error");

    renderWithTheme(<ErrorBoundary />);
    expect(
      screen.getByText("An unexpected error occurred")
    ).toBeInTheDocument();
  });

  it("should render link back to home", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error"));

    renderWithTheme(<ErrorBoundary />);
    const homeLink = screen.getByRole("link", { name: /go back to home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });

  it("should not render status when it is not available", () => {
    mockUseRouteError.mockReturnValue(new Error("Test error"));

    renderWithTheme(<ErrorBoundary />);
    expect(screen.queryByText(/Error \d+/)).not.toBeInTheDocument();
  });
});
