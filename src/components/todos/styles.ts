import styled from "styled-components";

export const TodosSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const TodosHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
`;

export const FilterContainer = styled.div`
  width: max-content;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  user-select: none;

  input[type="checkbox"] {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.hover};
  transition: all ${({ theme }) => theme.transitions.fast};
`;

export const TodoCheckbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
`;

interface TodoTitleProps {
  completed: boolean;
}

export const TodoTitle = styled.span<TodoTitleProps>`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colors.text.primary};
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.6 : 1)};
  flex: 1;
`;

// export const EmptyState = styled.div`
//   padding: ${({ theme }) => theme.spacing.xl};
//   text-align: center;
//   color: ${({ theme }) => theme.colors.text.secondary};
//   font-size: ${({ theme }) => theme.fontSize.base};
//   border-radius: ${({ theme }) => theme.borderRadius.md};
//   border: 2px dashed ${({ theme }) => theme.colors.border.default};
// `;
