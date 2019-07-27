import './input.scss';
import React from 'react';

const Input = ({ label, ...rest }) => {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input className="input__input" {...rest} />
        </div>
    );
};

export default Input;
