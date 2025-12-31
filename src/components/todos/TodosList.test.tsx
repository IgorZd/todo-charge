import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { theme } from "../../styles/theme";
import { TodosList } from "./TodosList";
import { ITodo } from "../../types/api/todos";

const mockTodos: ITodo[] = [
  { id: 1, userId: 1, title: "Complete task 1", completed: false },
  { id: 2, userId: 1, title: "Complete task 2", completed: true },
  { id: 3, userId: 1, title: "Complete task 3", completed: false },
];

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </BrowserRouter>
  );
};

describe("TodosList", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("should render todos list", () => {
    renderWithProviders(
      <TodosList username="testuser" todos={mockTodos} isLoading={false} />
    );

    expect(screen.getByText("testuser's TODOs")).toBeInTheDocument();
    expect(screen.getByText("Complete task 1")).toBeInTheDocument();
    expect(screen.getByText("Complete task 2")).toBeInTheDocument();
    expect(screen.getByText("Complete task 3")).toBeInTheDocument();
  });

  it("should render loading skeletons when isLoading is true", () => {
    renderWithProviders(
      <TodosList username="testuser" todos={undefined} isLoading={true} />
    );

    const skeletons = screen.getAllByTestId("skeleton-loader");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("should show hide completed checkbox", () => {
    renderWithProviders(
      <TodosList username="testuser" todos={mockTodos} isLoading={false} />
    );

    expect(screen.getByLabelText(/hide completed/i)).toBeInTheDocument();
  });

  it("should filter completed todos when checkbox is checked", async () => {
    renderWithProviders(
      <TodosList username="testuser" todos={mockTodos} isLoading={false} />
    );

    const checkbox = screen.getByLabelText(/hide completed/i);
    await userEvent.click(checkbox);

    // After filtering, completed task should not be visible
    expect(screen.getByText("Complete task 1")).toBeInTheDocument();
    expect(screen.queryByText("Complete task 2")).not.toBeInTheDocument();
    expect(screen.getByText("Complete task 3")).toBeInTheDocument();
  });

  it("should show empty state when no todos", () => {
    renderWithProviders(
      <TodosList username="testuser" todos={[]} isLoading={false} />
    );

    expect(screen.getByText("No todos found")).toBeInTheDocument();
  });

  it("should show correct empty state when all todos are filtered", async () => {
    const completedTodos: ITodo[] = [
      { id: 1, userId: 1, title: "Done task", completed: true },
    ];

    renderWithProviders(
      <TodosList username="testuser" todos={completedTodos} isLoading={false} />
    );

    const checkbox = screen.getByLabelText(/hide completed/i);
    await userEvent.click(checkbox);

    expect(screen.getByText("No incomplete todos")).toBeInTheDocument();
  });

  it("should render checkboxes as checked for completed todos", () => {
    renderWithProviders(
      <TodosList username="testuser" todos={mockTodos} isLoading={false} />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    // First checkbox is the filter checkbox, skip it
    expect(checkboxes[1]).not.toBeChecked(); // task 1
    expect(checkboxes[2]).toBeChecked(); // task 2 (completed)
    expect(checkboxes[3]).not.toBeChecked(); // task 3
  });
});
