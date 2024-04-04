import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  $type: string;
}

export default function Button({ children, $type, ...props }: ButtonProps) {
  switch ($type) {
    case "1":
      return (
        <button
          {...props}
          className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-DarkGrey hover:text-White  bg-White hover:bg-LightPeach rounded-lg"
        >
          {children}
        </button>
      );
    case "2":
      return (
        <button
          {...props}
          className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-White hover:text-White bg-Peach hover:bg-LightPeach rounded-lg"
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          {...props}
          className="px-12 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-DarkGrey hover:text-White  bg-White hover:bg-LightPeach rounded-lg"
        >
          {children}
        </button>
      );
  }
}
