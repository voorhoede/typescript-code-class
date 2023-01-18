import React from "react";

/*

    Exercise 2
    
    Step 1: Create an interface that extends HTMLButtonElement
    Step 2: Add the missing props you need
    Step 3: Implement the interface in the component

*/

export const TextInput = (props: unknown) => {

    return (
        <button
            disabled={props.disabled}
            style={props.invalid ? { backgroundColor: 'red' } : {}}
        >
            Click
        </button>
    )
}