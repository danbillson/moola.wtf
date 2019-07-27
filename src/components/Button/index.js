import './button.scss';
import React from 'react';

const Button = ({ text, style = 'primary', ...rest }) => {
    return (
        <button className={`button ${style}`} {...rest}>
            {text}
        </button>
    );
};

export default Button;
