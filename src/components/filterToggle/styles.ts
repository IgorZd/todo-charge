import styled from "styled-components";

export const FilterLabel = styled.label`
  width: max-content;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  cursor: pointer;

  input[type="checkbox"] {
    cursor: pointer;
    width: 1.25rem;
    height: 1.25rem;
    margin: 0;
  }
`;
