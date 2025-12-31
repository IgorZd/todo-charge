import styled from "styled-components";

interface StyledCardProps {
  isSelected?: boolean;
}

export const StyledCard = styled.article<StyledCardProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 1px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.border.selected : theme.colors.border.default};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  box-shadow: ${({ isSelected, theme }) =>
    isSelected ? theme.shadows.selected : theme.shadows.xs};
  background-color: ${({ isSelected, theme }) =>
    isSelected
      ? theme.colors.background.selected
      : theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${({ theme }) => theme.transitions.slow};
`;

export const StyledCardHeader = styled.header`
  container-type: inline-size;
  display: grid;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0 ${({ theme }) => theme.spacing.lg};

  &:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }

  &.border-b {
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const StyledCardTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: ${({ theme }) => theme.lineHeight.tight};
  margin: 0;
`;

export const StyledCardDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

export const StyledCardAction = styled.div`
  grid-column-start: 2;
  grid-row: 1 / span 2;
  align-self: center;
  justify-self: end;
`;

export const StyledCardContent = styled.section`
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const StyledCardFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  &.border-t {
    padding-top: ${({ theme }) => theme.spacing.lg};
  }
`;
