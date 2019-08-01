import './input.scss';
import React from 'react';

const Input = ({ label, inputRef, ...rest }) => {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input className="input__input" ref={inputRef} {...rest} />
        </div>
    );
};

export default Input;
