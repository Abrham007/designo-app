import React from "react";

export default function Button({
  children,
  $type,
}: {
  children: React.ReactNode;
  $type: string;
}) {
  switch ($type) {
    case "1":
      return (
        <button className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-DarkGrey hover:text-White  bg-White hover:bg-LightPeach">
          {children}
        </button>
      );
    case "2":
      return (
        <button className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-White hover:text-White bg-Peach hover:bg-LightPeach">
          {children}
        </button>
      );
    default:
      return (
        <button className="px-6 py-4 text-[0.9375rem] tracking-[0.0625rem] uppercase font-medium text-DarkGrey hover:text-White  bg-White hover:bg-LightPeach">
          {children}
        </button>
      );
  }
}
