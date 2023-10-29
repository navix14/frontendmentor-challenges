import React, { HTMLAttributes } from "react";

interface RadioGroupProps extends HTMLAttributes<HTMLElement> {
  name: string;
  horizontal?: boolean;
  children: React.ReactNode;
}

export default function RadioGroup({
  name,
  horizontal,
  children,
  ...props
}: RadioGroupProps) {
  return (
    <div
      className={`${props.className} ${
        horizontal ? "flex space-x-5" : "space-y-2"
      }`}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement<HTMLInputElement>(child)) {
          return React.cloneElement(child, { name });
        }
        return child;
      })}
    </div>
  );
}
