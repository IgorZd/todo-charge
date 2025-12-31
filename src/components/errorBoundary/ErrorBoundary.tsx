import React from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError();

  let errorMessage: string;
  let errorStatus: number | undefined;

  if (isRouteErrorResponse(error)) {
    errorMessage =
      error.statusText || error.data?.message || "An error occurred";
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else {
    errorMessage = "An unexpected error occurred";
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong</h1>
      {errorStatus && <h2>Error {errorStatus}</h2>}
      <p style={{ color: "#ff6b6b", margin: "1rem 0" }}>{errorMessage}</p>
      <Link to="/" style={{ color: "#61dafb", textDecoration: "none" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorBoundary;
