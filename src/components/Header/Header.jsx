import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../Pictures/logo/logo.jpg';
import styles from './Header.css';

const Header = () => (
    <header className={styles.container} data-testid="header-container">
        <div id={styles.carLogo} data-testid="car-logo">
            <img src={logo} alt="" id={styles.logo} data-testid="logo-image" />
            <Link to="/" className={styles.link} data-testid="home-link">
                <h1>CarNews</h1>
            </Link>
        </div>
        <div id={styles.nav} data-testid="navigation">
            <ul data-testid="nav-list">
                <Link to="/" className={styles.link} data-testid="home-page-link">
                    <li data-testid="home-page-item">Головна сторінка</li>
                </Link>
                <Link to="/blog" className={styles.link} data-testid="blog-link">
                    <li data-testid="blog-item">Блог</li>
                </Link>
                <Link to="/" className={styles.link} data-testid="about-us-link">
                    <li data-testid="about-us-item">Про нас</li>
                </Link>
                <Link to="/register" className={styles.link} data-testid="register-link">
                    <li id={styles.register} data-testid="register-item">
                        Реєстрація
                    </li>
                </Link>
            </ul>
        </div>
    </header>
);

export default Header;
