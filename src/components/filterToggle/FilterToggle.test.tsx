import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { FilterToggle } from "./FilterToggle";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe("FilterToggle", () => {
  it("should render with default label", () => {
    const handleChange = jest.fn();
    renderWithTheme(<FilterToggle checked={false} onChange={handleChange} />);

    expect(screen.getByText("Hide completed")).toBeInTheDocument();
  });

  it("should render with custom label", () => {
    const handleChange = jest.fn();
    renderWithTheme(
      <FilterToggle
        checked={false}
        onChange={handleChange}
        label="Custom filter"
      />
    );

    expect(screen.getByText("Custom filter")).toBeInTheDocument();
  });

  it("should render checkbox with checked state", () => {
    const handleChange = jest.fn();
    renderWithTheme(<FilterToggle checked={true} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("should render checkbox with unchecked state", () => {
    const handleChange = jest.fn();
    renderWithTheme(<FilterToggle checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("should call onChange when checkbox is clicked", async () => {
    const handleChange = jest.fn();
    renderWithTheme(<FilterToggle checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("should call onChange with false when unchecking", async () => {
    const handleChange = jest.fn();
    renderWithTheme(<FilterToggle checked={true} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    await userEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("should have accessible label", () => {
    const handleChange = jest.fn();
    renderWithTheme(<FilterToggle checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("Hide completed");

    expect(label).toBeInTheDocument();
    expect(checkbox).toBeInTheDocument();
  });
});
