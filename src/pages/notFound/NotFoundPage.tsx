import React from "react";
import { Container, Title, Message, StyledLink } from "./styles";

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <Title>404 - Page Not Found</Title>
      <Message>The page you're looking for doesn't exist.</Message>
      <StyledLink to="/">Go back to Home</StyledLink>
    </Container>
  );
};

export default NotFoundPage;
