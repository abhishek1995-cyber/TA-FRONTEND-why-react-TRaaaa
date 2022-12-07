import React from "react";
import classNames from 'classnames';


function Button({ 
    disabled = false,
    label = 'Submit',
    onClickHandler , 
    size = "small", 
    type="primary"  
}){
    const btnClass = classNames({
        'small-btn': size === 'small',
        'medium-btn': size === 'medium',
        'large-btn': size === 'large',
        'pri-btn': type === 'primary',
        'sec-btn': type === 'secondary',
        'ter-btn': type === 'tertiary'
    })

    return (
        <>
        <button 
        disabled = {disabled}
        onClick={onClickHandler ? onClickHandler : () => {}}
        size = {size}
        className={ btnClass}
        >
            {label}
        </button>

        </>
    )
}

export default Button