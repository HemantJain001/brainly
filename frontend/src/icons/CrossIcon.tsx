import { iconSizeVariants } from ".";
import type { IconProps } from ".";

export function CrossIcon({size} : IconProps) {
  return ( 
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={iconSizeVariants[size]}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 17.571L17.571 6.43m0 11.142L6.43 6.43"
            />
        </svg>
  );
}
    
