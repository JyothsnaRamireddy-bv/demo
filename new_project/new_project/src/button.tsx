import React from "react";

type ButtonProps = {
    buttonType?: string;
    onClick: () => void;
    todosCompletedPercentage: number;
}
export default function Button({buttonType,onClick,todosCompletedPercentage}: ButtonProps){
    return(
        <button type={buttonType} onClick={onClick}
        style={{width: `${todosCompletedPercentage}%`}}
        >Click me</button>
    );
}

// don't use setter functions directly,instead create separate event handler function
