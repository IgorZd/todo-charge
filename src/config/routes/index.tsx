import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import ErrorBoundary from "../../components/ErrorBoundary";
import { RoutePath } from "./types";

export const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: <HomePage />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: "*",
    element: <Navigate to={RoutePath.NOT_FOUND} replace />,
  },
]);

export { RoutePath } from "./types";
