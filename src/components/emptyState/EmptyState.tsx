import React from "react";
import { StyledEmptyState } from "./styles";

interface EmptyStateProps {
  children: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ children }) => {
  return <StyledEmptyState>{children}</StyledEmptyState>;
};
