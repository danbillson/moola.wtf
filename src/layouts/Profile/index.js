import './profile.scss';
import React from 'react';
import { connect } from 'react-redux';
import DescriptionCTA from '../../components/DescriptionCTA';
import PersonalForm from '../../components/personalForm';
import { description } from '../../config/profile';

const Profile = props => {
    return (
        <div className="profile">
            <DescriptionCTA
                descriptionCTA={{
                    title: `Hey, ${props.name}`,
                    description
                }}
            />
            <PersonalForm />
        </div>
    );
};

const mapStateToProps = state => {
    return { name: state.auth.name };
};

export default connect(mapStateToProps)(Profile);
