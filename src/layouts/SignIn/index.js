import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async () => {
        if (!email || !password) {
            return setError('You must enter an email and password');
        }

        props.signIn({ email, password }, (res, err) => {
            if (err) {
                return setError(err);
            }

            setError('');
            window.location.href = '/';
        });
    };

    return (
        <div className="form">
            <h2 className="form__title">SIGN IN</h2>
            <form className="form__form">
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
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {error && <p className="form__error">{error}</p>}
                <Button
                    type="button"
                    text="Sign In"
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
)(SignIn);
