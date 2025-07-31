import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12.5L3.5 9l1.4 5L7.5 9l1.4 5L11.5 9l1.4 5L15.5 9l1.4 5L19.5 9l1.6 5" />
      <path d="M12 2v20" />
    </svg>
  );
}
