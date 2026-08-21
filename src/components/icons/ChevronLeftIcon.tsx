import { IconProps } from "./types";

export default function ChevronLeftIcon({ className = "size-5", size, ...props }: IconProps) {
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
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );
}
