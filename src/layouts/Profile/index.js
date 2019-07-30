import './profile.scss';
import React from 'react';
import { connect } from 'react-redux';

const Profile = props => {
    return (
        <div className="profile">
            <h2>Hey, {props.name}</h2>
        </div>
    );
};

const mapStateToProps = state => {
    return { name: state.auth.name };
};

export default connect(mapStateToProps)(Profile);
