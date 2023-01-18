import React from "react";

export interface TextInputProps extends HTMLButtonElement {
    invalid?: boolean;
}

export const TextInput = (props: TextInputProps) => {

    return (
        <button
            disabled={props.disabled}
            style={props.invalid ? { backgroundColor: 'red' } : {}}
        >
            Click
        </button>
    )
}