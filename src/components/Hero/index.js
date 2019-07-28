import './hero.scss';
import React from 'react';
import Button from '../Button';

const Hero = props => {
    const renderButtons = () => {
        return props.hero.cta.map(({ text, link, prominence }) => (
            <Button
                key={text}
                text={text}
                prominence={prominence}
                onClick={() => (window.location.href = link)}
            />
        ));
    };

    return (
        <div className="hero">
            <div className="hero__details">
                <h1 className="hero__title">{props.hero.title}</h1>
                <p className="hero__tagline">{props.hero.tagline}</p>
                <div className="hero__cta">{renderButtons()}</div>
            </div>
            {props.hero.image}
        </div>
    );
};

export default Hero;
