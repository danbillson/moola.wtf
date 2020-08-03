import './select.scss';
import React from 'react';

const Select = ({ label, selectRef, options, ...rest }) => {
    const renderOptions = () => {
        return options.map(({ value, text }) => {
            return <option value={value}>{text || value}</option>;
        });
    };

    return (
        <div className="select">
            <span className="select__chevron" />
            <label className="select__label">{label}</label>
            <select className="select__select" ref={selectRef} {...rest}>
                {renderOptions()}
            </select>
        </div>
    );
};

export default Select;
