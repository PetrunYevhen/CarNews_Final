import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import styles from './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function logIn(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail('');
                setPassword('');
                setError('');
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                setError('Sorry, could not find your account');
            });
    }

    return (
        <div id={styles.registerContainer} data-testid="login-container">
            <form onSubmit={logIn} data-testid="login-form">
                <div data-testid="input-container">
                    <div>
                        <label htmlFor="email" id={styles.l1} data-testid="email-label">
                            Email:
                        </label>
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            id="email"
                            data-testid="email-input"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" data-testid="password-label">
                            Пароль:
                        </label>
                        <input
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            id="password"
                            data-testid="password-input"
                        />
                    </div>
                </div>
                <h3 data-testid="forgot-password-text">Забули пароль?</h3>
                <button type="submit" id={styles.login} data-testid="login-button">
                    Вхід
                </button>
                {error && (
                    <p id={styles.error} data-testid="error-message">
                        {error}
                    </p>
                )}
                <Link to={`/register`} id={styles.links} data-testid="register-link">
                    <button type="button" id={styles.create} data-testid="create-account-button">
                        Створити профіль
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
