import React from "react";
import { FilterLabel } from "./styles";

interface FilterToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({
  checked,
  onChange,
  label = "Hide completed",
}) => {
  return (
    <FilterLabel>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </FilterLabel>
  );
};
