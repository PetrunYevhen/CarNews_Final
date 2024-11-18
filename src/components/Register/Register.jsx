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
        <div id={styles.registerContainer}>
            <form onSubmit={handleRegister}>
                <div>
                    <div>
                        <label htmlFor="email" id={styles.l1}>
                            Email:
                        </label>
                        <input
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            type="email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль:</label>
                        <input
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            required
                        />
                    </div>
                </div>
                <h3>Забули пароль?</h3>
                <button type="submit" id={styles.login}>
                    Зареєструватися
                </button>
                {error && <p id={styles.error}>{error}</p>}
                <Link to="/login" id={styles.links}>
                    <button id={styles.create}>Увійти в профіль</button>
                </Link>
            </form>
        </div>
    );
};

export default Register;
