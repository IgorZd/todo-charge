import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import NotFoundPage from "../../pages/notFound/NotFoundPage";

import { RoutePath } from "../../types/routes";
import { ComponentErrorBoundary } from "../../components/ComponentErrorBoundary/ComponentErrorBoundary";

export const router = createBrowserRouter([
  {
    path: RoutePath.HOME,
    element: <HomePage />,
    errorElement: <ComponentErrorBoundary />,
  },
  {
    path: RoutePath.NOT_FOUND,
    element: <NotFoundPage />,
    errorElement: <ComponentErrorBoundary />,
  },
  {
    path: "*",
    element: <Navigate to={RoutePath.NOT_FOUND} replace />,
  },
]);
