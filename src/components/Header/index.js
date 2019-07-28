import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import MobileNav from '../MobileNav';

const Header = props => {
    const renderLinks = () => {
        const links = props.isLoggedIn
            ? props.header.loggedInLinks
            : props.header.loggedOutLinks;
        return links.map(({ text, link }) => (
            <li key={text}>
                {text === 'Sign Out' ? (
                    <Link to={link} onClick={() => props.signOut()}>
                        {text}
                    </Link>
                ) : (
                    <Link to={link}>{text}</Link>
                )}
            </li>
        ));
    };

    return (
        <header className="header">
            <nav className="header__nav">
                <Link className="header__logo" to="/">
                    {props.header.logoText}
                </Link>
                <ul className="header__links">{renderLinks()}</ul>
                <MobileNav links={renderLinks()} />
            </nav>
        </header>
    );
};

const mapStateToProps = state => {
    return { isLoggedIn: state.auth.token };
};

export default connect(
    mapStateToProps,
    actions
)(Header);
