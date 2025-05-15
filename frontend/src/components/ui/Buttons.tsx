import type { ReactElement } from "react";

export interface ButtonProps {
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
}

// Use Maps
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-200 text-purple-600",
}

const defaultStyles = "font-light flex items-center";

const sizeStyles = {
    "sm": "px-2 py-1 text-sm rounded-sm",
    "md": "px-4 py-2 text-md rounded-md",
    "lg": "px-6 py-3 text-lg rounded-lg",
}

export const Button =  (props : ButtonProps)=>{

    return (
    <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles}`} onClick={props.onClick} type="button" >
        {props.startIcon ? <span className="pr-2">{props.startIcon}</span> : null }
        {props.text}
        {props.endIcon ? <span className="pl-2">{props.endIcon}</span> : null }
    </button>
    );
}
