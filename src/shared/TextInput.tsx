import React from "react";
import { Column } from ".";

/**
 * @param label Text that will be showed to the user to describe the expected input
 * @param labelId non-spaced camelcased text that represent the id of the input
 * @param type the type of input, for example password or text type. CSS input types are the accepted values
 * @param placeholder placeholder text for input (an example of value expected)
 * @param hideLabel show or hide label, label is not required when this is true
 * @param value the value of the input (most likely the input of the user)
 * @param isDisabled whether the user can enter a value or not
 */

const textInput = ({
    label,
    labelId,
    type='text',
    placeholder,
    hideLabel=false,
    value,
    isDisabled,
    inputStyles,
    labelStyles,
    onChange,
    max,
    min,
    className,
    accept,
    styles
}: any) => (
    <Column alignHorizontal="start" styles={{ ...styles}} className={className}>
        {!hideLabel ?
        <label
            htmlFor={labelId} 
            style={{ 
                ...labelStyles 
            }}
        >{label}</label> : null}
        <input 
            id={labelId}
            type={type}
            name={labelId}
            placeholder={placeholder}
            disabled={isDisabled}
            value={value}
            onChange={onChange}
            maxLength={max}
            minLength={min}
            accept={accept}
            style={{ 
                borderRadius: 10,
                padding: '0.5em 1em',
                width: '100%',
                ...inputStyles 
            }}
        />
    </Column>
)

export default textInput