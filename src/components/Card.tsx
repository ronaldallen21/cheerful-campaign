import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return <div className={`border p-4 rounded shadow ${className}`}>{children}</div>;
}
