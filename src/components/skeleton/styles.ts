import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

interface StyledSkeletonProps {
  width?: string | number;
  height?: string | number;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  background-color: ${({ theme }) => theme.colors.background.skeleton};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  ${({ width }) =>
    width && `width: ${typeof width === "number" ? `${width}px` : width};`}
  ${({ height }) =>
    height && `height: ${typeof height === "number" ? `${height}px` : height};`}
`;
