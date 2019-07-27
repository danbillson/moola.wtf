import './mobileNav.scss';
import React, { useState } from 'react';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg';

const MobileNav = props => {
    const [open, setOpen] = useState(false);

    const withActive = className => {
        return open ? `${className} active` : className;
    };

    return (
        <>
            <Hamburger
                className={withActive('hamburger')}
                onClick={() => setOpen(!open)}
            />
            <div className={withActive('mobileNav')}>
                <ul className="mobileNav__links">{props.links}</ul>
            </div>
        </>
    );
};

export default MobileNav;
