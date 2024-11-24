import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import styles from './Register.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User registered:', userCredential);
                setEmail('');
                setPassword('');
                setError('');
                navigate('/');
            })
            .catch((error) => {
                console.error('Registration error:', error);
                setError('Не вдалося зареєструватися. Спробуйте ще раз.');
            });
    };

    return (
        <div id={styles.registerContainer} data-testid="register-container">
            <form onSubmit={handleRegister} data-testid="register-form">
                <div data-testid="form-fields">
                    <div data-testid="email-field">
                        <label htmlFor="email" id={styles.l1} data-testid="email-label">
                            Email:
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            required
                            data-testid="email-input"
                        />
                    </div>
                    <div data-testid="password-field">
                        <label htmlFor="password" data-testid="password-label">
                            Пароль:
                        </label>
                        <input
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            required
                            data-testid="password-input"
                        />
                    </div>
                </div>
                <h3 data-testid="forgot-password-text">Забули пароль?</h3>
                <button type="submit" id={styles.login} data-testid="register-button">
                    Зареєструватися
                </button>
                {error && (
                    <p id={styles.error} data-testid="error-message">
                        {error}
                    </p>
                )}
                <Link to="/login" id={styles.links} data-testid="login-link">
                    <button id={styles.create} data-testid="login-button">
                        Увійти в профіль
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Register;
