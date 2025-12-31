import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import NotFoundPage from "../../pages/notFound/NotFoundPage";
import { ErrorBoundary } from "../../components/errorBoundary/ErrorBoundary";
import { RoutePath } from "../../types/routes";

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
