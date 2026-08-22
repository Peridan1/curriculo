import { IconProps } from "./types";

export default function ChevronRightIcon({ className = "size-5", size, ...props }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            width={size}
            height={size}
            aria-hidden="true"
            {...props}
        >
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );
}
