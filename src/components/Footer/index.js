import './footer.scss';
import React from 'react';

const Footer = ({ footer }) => {
    return (
        <footer className="footer">
            <h1 className="footer__title">{footer.title}</h1>
            <p className="footer__description">{footer.description}</p>
        </footer>
    );
};

export default Footer;
