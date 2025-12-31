import * as React from "react";
import {
  StyledCard,
  StyledCardAction,
  StyledCardContent,
  StyledCardDescription,
  StyledCardFooter,
  StyledCardHeader,
  StyledCardTitle,
} from "./styles";

interface CardProps extends React.ComponentProps<"article"> {
  isSelected?: boolean;
}

function Card({ className, isSelected, ...props }: CardProps) {
  return (
    <StyledCard
      data-slot="card"
      className={className}
      $isSelected={isSelected}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <StyledCardHeader
      data-slot="card-header"
      className={className}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <StyledCardTitle data-slot="card-title" className={className} {...props} />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <StyledCardDescription
      data-slot="card-description"
      className={className}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <StyledCardAction
      data-slot="card-action"
      className={className}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <StyledCardContent
      data-slot="card-content"
      className={className}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"footer">) {
  return (
    <StyledCardFooter
      data-slot="card-footer"
      className={className}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
