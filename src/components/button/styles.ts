import styled, { css } from "styled-components";

export enum ButtonVariant {
  DEFAULT = "default",
  DESTRUCTIVE = "destructive",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  GHOST = "ghost",
  LINK = "link",
}

export enum ButtonSize {
  DEFAULT = "default",
  SM = "sm",
  LG = "lg",
  ICON = "icon",
}

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const getVariantStyles = ($variant: ButtonVariant) => {
  switch ($variant) {
    case ButtonVariant.DEFAULT:
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text.white};
        box-shadow: ${({ theme }) => theme.shadows.xs};
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primaryHover};
        }
      `;
    case ButtonVariant.DESTRUCTIVE:
      return css`
        background-color: ${({ theme }) => theme.colors.destructive};
        color: ${({ theme }) => theme.colors.text.white};
        box-shadow: ${({ theme }) => theme.shadows.xs};
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.destructiveHover};
        }
        &:focus-visible {
          ring: rgba(239, 68, 68, 0.2);
        }
      `;
    case ButtonVariant.OUTLINE:
      return css`
        border: 1px solid ${({ theme }) => theme.colors.border.default};
        background-color: ${({ theme }) => theme.colors.background.primary};
        box-shadow: ${({ theme }) => theme.shadows.xs};
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.background.hover};
          color: ${({ theme }) => theme.colors.text.primary};
        }
      `;
    case ButtonVariant.SECONDARY:
      return css`
        background-color: ${({ theme }) => theme.colors.background.secondary};
        color: ${({ theme }) => theme.colors.text.primary};
        box-shadow: ${({ theme }) => theme.shadows.xs};
        &:hover:not(:disabled) {
          background-color: rgba(243, 244, 246, 0.8);
        }
      `;
    case ButtonVariant.GHOST:
      return css`
        background-color: transparent;
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.background.hover};
          color: ${({ theme }) => theme.colors.text.primary};
        }
      `;
    case ButtonVariant.LINK:
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: underline;
        text-underline-offset: 4px;
        &:hover:not(:disabled) {
          text-decoration: underline;
        }
      `;
  }
};

const getSizeStyles = ($size: ButtonSize) => {
  switch ($size) {
    case ButtonSize.DEFAULT:
      return css`
        height: 2.25rem;
        padding: ${({ theme }) => theme.spacing.sm}
          ${({ theme }) => theme.spacing.md};
        &:has(> svg) {
          padding: ${({ theme }) => theme.spacing.sm} 0.75rem;
        }
      `;
    case ButtonSize.SM:
      return css`
        height: 2rem;
        padding: ${({ theme }) => theme.spacing.sm} 0.75rem;
        gap: ${({ theme }) => theme.spacing.xs};
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        &:has(> svg) {
          padding: ${({ theme }) => theme.spacing.sm} 0.625rem;
        }
      `;
    case ButtonSize.LG:
      return css`
        height: 2.5rem;
        padding: ${({ theme }) => theme.spacing.sm}
          ${({ theme }) => theme.spacing.lg};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        &:has(> svg) {
          padding: ${({ theme }) => theme.spacing.sm}
            ${({ theme }) => theme.spacing.md};
        }
      `;
    case ButtonSize.ICON:
      return css`
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
      `;
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.normal};
  outline: none;
  border: none;
  cursor: pointer;
  flex-shrink: 0;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  & svg {
    pointer-events: none;
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }

  &:focus-visible {
    ring: 3px solid rgba(59, 130, 246, 0.5);
  }

  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}
`;
