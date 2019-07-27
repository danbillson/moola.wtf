import './descriptionCTA.scss';
import React from 'react';
import Button from '../Button';

const DescriptionCTA = ({ descriptionCTA }) => {
    return (
        <div className="descriptionCTA">
            <h1 className="descriptionCTA__title">{descriptionCTA.title}</h1>
            <p className="descriptionCTA__description">
                {descriptionCTA.description}
            </p>
            <Button
                text={descriptionCTA.cta.text}
                onClick={() => (window.location.href = descriptionCTA.cta.link)}
                style={descriptionCTA.cta.style}
            />
        </div>
    );
};

export default DescriptionCTA;
