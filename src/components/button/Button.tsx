import * as React from "react";
import { StyledButton, ButtonVariant, ButtonSize } from "./styles";

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button({
  className,
  variant = ButtonVariant.DEFAULT,
  size = ButtonSize.DEFAULT,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      data-slot="button"
      className={className}
      $variant={variant}
      $size={size}
      {...props}
    />
  );
}

export { Button, ButtonVariant, ButtonSize };
