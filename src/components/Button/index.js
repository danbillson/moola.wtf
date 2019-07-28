import './button.scss';
import React from 'react';

const Button = ({ text, prominence = 'primary', ...rest }) => {
    return (
        <button className={`button ${prominence}`} {...rest}>
            {text}
        </button>
    );
};

export default Button;
