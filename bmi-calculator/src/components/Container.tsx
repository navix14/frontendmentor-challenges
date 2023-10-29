import React, { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export default function Container({ children, ...props }: ContainerProps) {
  return (
    <div className={`w-full px-8 ${props.className} max-w-6xl m-auto`}>
      {children}
    </div>
  );
}
