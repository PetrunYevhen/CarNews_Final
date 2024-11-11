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

    function logIn(e) {
        e.preventDefault();
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
        <div id={styles.registerContainer}>
            <form onSubmit={logIn}>
                <div>
                    <div>
                        <label htmlFor="email" id={styles.l1}>
                            Email:
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Пароль:</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                        />
                    </div>
                </div>
                <h3>Забули пароль?</h3>
                <button type="submit" id={styles.login}>
                    Вхід
                </button>
                {error && <p id={styles.error}>{error}</p>}
                <Link to={`/register`} id={styles.links}>
                    <button type="button" id={styles.create}>
                        Маєте профіль?
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
