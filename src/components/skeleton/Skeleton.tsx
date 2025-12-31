import * as React from "react";

import { StyledSkeleton } from "./styles";

interface SkeletonProps extends React.ComponentProps<"span"> {
  width?: string | number;
  height?: string | number;
}

function Skeleton({ className, width, height, ...props }: SkeletonProps) {
  return (
    <StyledSkeleton
      data-slot="skeleton"
      data-testid="skeleton-loader"
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
}

export { Skeleton };
