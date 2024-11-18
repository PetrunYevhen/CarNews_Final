import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Pictures/logo/logo.jpg';
import styles from './Header.css';

// function Header() {};
const Header = () => (
    <header className={styles.container}>
        <div id={styles.carLogo}>
            <img src={logo} alt="" id={styles.logo} />
            <Link to="/" className={styles.link}>
                <h1>CarNews</h1>
            </Link>
        </div>
        <div id={styles.nav}>
            <ul>
                <Link to="/" className={styles.link}>
                    <li>Головна сторінка</li>
                </Link>
                <Link to="/blog" className={styles.link}>
                    <li>Блог</li>
                </Link>
                <Link to="/" className={styles.link}>
                    <li>Про нас</li>
                </Link>
                <Link to="/register" className={styles.link}>
                    <li id={styles.register}>Реєстрація</li>
                </Link>
            </ul>
        </div>
    </header>
);

export default Header;
