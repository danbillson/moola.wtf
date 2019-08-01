import './personalForm.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../Input';
import Button from '../Button';

const PersonalForm = props => {
    const [showPasswordField, setShowPasswordField] = useState(false);
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');

    return (
        <div id="personalForm" className="form">
            <form className="form__form">
                <Input
                    label="name"
                    value={props.name}
                    readOnly
                    onChange={e => props.setIncome(e.target.value)}
                />
                {showPasswordField && (
                    <>
                        <Input
                            type="password"
                            label="password"
                            placeholder="password"
                            autoComplete="new-password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <Input
                            type="password"
                            label="verify password"
                            placeholder="password"
                            autoComplete="new-password"
                            value={verifyPassword}
                            onChange={e => setVerifyPassword(e.target.value)}
                        />
                    </>
                )}
                <Button
                    type="button"
                    text="Change password"
                    prominence="primary"
                    onClick={() => setShowPasswordField(true)}
                />
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return { name: state.auth.name };
};

export default connect(
    mapStateToProps,
    actions
)(PersonalForm);
