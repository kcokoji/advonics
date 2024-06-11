import Container from "@/components/container";
import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title: string;
  className?: string;
}

export default function Header({ title, className }: Props) {
  return (
    <h1
      className={cn(
        " font-extrabold leading-[1.2] text-5xl text-blue max-w-xl",
        className
      )}
    >
      {title}
    </h1>
  );
}
