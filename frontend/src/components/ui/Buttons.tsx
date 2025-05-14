export interface ButtonProps {
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;
}

// Use Maps
const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600",
}


const sizeStyles = {
    "sm": "px-2 py-1 text-sm rounded-sm flex items-center",
    "md": "px-4 py-2 text-md rounded-md flex items-center",
    "lg": "px-6 py-3 text-lg rounded-lg flex items-center",
}

export const Button =  (props : ButtonProps)=>{

    return (
    <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]}`} onClick={props.onClick} type="button" >
        {props.startIcon ? <span className="pr-2">{props.startIcon}</span> : null }
        {props.text}
        {props.endIcon ? <span className="pl-2">{props.endIcon}</span> : null }
    </button>
    );
}
