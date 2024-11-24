import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import logo from '../Pictures/logo/logo.jpg';
import styles from './Footer.css';

const Footer = () => (
    <footer className={styles.container} data-testid="footer-container">
        <div id={styles.firsrFloor} data-testid="first-floor">
            <div id={styles.head} data-testid="footer-head">
                <div id={styles.carLogo} data-testid="logo-container">
                    <img src={logo} alt="" id={styles.logo} data-testid="logo-img" />
                    <Link to="/" className={styles.link} data-testid="home-link">
                        <h1 data-testid="logo-text">CarNews</h1>
                    </Link>
                </div>
                <div id={styles.nav} data-testid="footer-nav">
                    <ul data-testid="nav-list">
                        <Link to="/" className={styles.link} data-testid="home-nav-link">
                            <li data-testid="home-nav-item">Головна сторінка</li>
                        </Link>
                        <Link to="/blog" className={styles.link} data-testid="blog-nav-link">
                            <li data-testid="blog-nav-item">Блог</li>
                        </Link>
                        <Link to="/" className={styles.link} data-testid="about-nav-link">
                            <li data-testid="about-nav-item">Про нас</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
        <div id={styles.secondFloor} data-testid="second-floor">
            <h1 data-testid="subscription-title">
                Підпишіться на наші новини,
                <br />
                що б отримуват останні <br />
                оновлення та новини
            </h1>
            <input type="text" placeholder="example@email.com" data-testid="email-input" />
            <button data-testid="subscribe-button">
                Підписатись <FaPaperPlane data-testid="subscribe-icon" />
            </button>
        </div>
        <div id={styles.socialLinks} data-testid="social-links">
            <ul data-testid="social-links-list">
                <Link to="/https://uk-ua.facebook.com/" data-testid="facebook-link">
                    <li data-testid="facebook-icon">
                        <FaFacebook />
                    </li>
                </Link>
                <Link to="/https://x.com/?lang=ua" data-testid="twitter-link">
                    <li data-testid="twitter-icon">
                        <FaTwitter />
                    </li>
                </Link>
                <Link to="/https://www.instagram.com/" data-testid="instagram-link">
                    <li data-testid="instagram-icon">
                        <FaInstagram />
                    </li>
                </Link>
                <Link to="/https://uk-ua.facebook.com/" data-testid="linkedin-link">
                    <li data-testid="linkedin-icon">
                        <CiLinkedin />
                    </li>
                </Link>
            </ul>
        </div>
    </footer>
);

export default Footer;
