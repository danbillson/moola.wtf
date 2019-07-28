import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async () => {
        if (!name || !email || !password) {
            return setError('You must enter a name, email and password');
        }

        if (password !== verifyPassword) {
            return setError('The passwords do not match');
        }

        props.signUp({ name, email, password }, (res, err) => {
            if (err) {
                return setError(err);
            }

            setError('');
            window.location.href = '/';
        });
    };

    return (
        <div className="form">
            <h2 className="form__title">SIGN UP</h2>
            <form className="form__form">
                <Input
                    label="name"
                    placeholder="Kate"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    label="email"
                    placeholder="example@hotmail.com"
                    autoComplete="username"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
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
                {error && <p className="form__error">{error}</p>}
                <Button
                    type="button"
                    text="Sign Up"
                    prominence="tertiary"
                    onClick={() => onSubmit()}
                />
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return { authError: state.auth.error };
};

export default connect(
    mapStateToProps,
    actions
)(SignUp);
