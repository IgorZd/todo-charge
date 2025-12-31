import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import {
  ErrorContainer,
  ErrorTitle,
  ErrorStatus,
  ErrorMessage,
  HomeLink,
} from "./styles";

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
    <ErrorContainer>
      <ErrorTitle>Oops! Something went wrong</ErrorTitle>
      {errorStatus && <ErrorStatus>Error {errorStatus}</ErrorStatus>}
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <HomeLink to="/">Go back to Home</HomeLink>
    </ErrorContainer>
  );
};

export default ErrorBoundary;
