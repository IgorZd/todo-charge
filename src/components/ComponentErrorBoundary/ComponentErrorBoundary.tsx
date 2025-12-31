import React from "react";
import { useRouteError } from "react-router-dom";
import { Container, Title, Message, ErrorDetails, BackLink } from "./styles";

export const ComponentErrorBoundary: React.FC = () => {
  const error = useRouteError() as Error;

  return (
    <Container>
      <Title>Component Error</Title>
      <Message>Something went wrong with this component.</Message>
      {error && (
        <ErrorDetails>
          <strong>Error:</strong> {error.message || "Unknown error"}
        </ErrorDetails>
      )}
      <BackLink to="/">Go back to Home</BackLink>
    </Container>
  );
};
