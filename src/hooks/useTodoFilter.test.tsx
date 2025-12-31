import { renderHook, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useTodoFilter } from "./useTodoFilter";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("useTodoFilter", () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/");
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    expect(result.current.selectedUser).toBeNull();
    expect(result.current.hideCompleted).toBe(false);
  });

  it("should read selectedUser from URL", () => {
    window.history.pushState({}, "", "/?user=5");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    expect(result.current.selectedUser).toBe(5);
  });

  it("should read hideCompleted from URL", () => {
    window.history.pushState({}, "", "/?user=3&hide_completed=1");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    expect(result.current.selectedUser).toBe(3);
    expect(result.current.hideCompleted).toBe(true);
  });

  it("should set selected user", () => {
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    act(() => {
      result.current.setSelectedUser(7);
    });

    expect(result.current.selectedUser).toBe(7);
    expect(window.location.search).toContain("user=7");
  });

  it("should clear selected user", () => {
    window.history.pushState({}, "", "/?user=5&hide_completed=1");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    act(() => {
      result.current.setSelectedUser(null);
    });

    expect(result.current.selectedUser).toBeNull();
    expect(window.location.search).toBe("");
  });

  it("should set hide completed", () => {
    window.history.pushState({}, "", "/?user=3");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    act(() => {
      result.current.setHideCompleted(true);
    });

    expect(result.current.hideCompleted).toBe(true);
    expect(window.location.search).toContain("hide_completed=1");
  });

  it("should remove hide_completed param when set to false", () => {
    window.history.pushState({}, "", "/?user=3&hide_completed=1");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    act(() => {
      result.current.setHideCompleted(false);
    });

    expect(result.current.hideCompleted).toBe(false);
    expect(window.location.search).not.toContain("hide_completed");
  });

  it("should reset hideCompleted when selecting new user with selectUser", () => {
    window.history.pushState({}, "", "/?user=5&hide_completed=1");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    act(() => {
      result.current.selectUser(8);
    });

    expect(result.current.selectedUser).toBe(8);
    expect(result.current.hideCompleted).toBe(false);
    expect(window.location.search).not.toContain("hide_completed");
  });

  it("should clear all params when selectUser is called with null", () => {
    window.history.pushState({}, "", "/?user=5&hide_completed=1");
    const { result } = renderHook(() => useTodoFilter(), { wrapper });

    act(() => {
      result.current.selectUser(null);
    });

    expect(result.current.selectedUser).toBeNull();
    expect(result.current.hideCompleted).toBe(false);
    expect(window.location.search).toBe("");
  });
});
