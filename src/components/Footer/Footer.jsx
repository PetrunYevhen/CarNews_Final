import React from 'react';
import { CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import logo from '../Pictures/logo/logo.jpg';
import styles from './Footer.css';

const Footer = () => (
    <footer className={styles.container}>
        <div id={styles.firsrFloor}>
            <div id={styles.head}>
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
                    </ul>
                </div>
            </div>
        </div>
        <div id={styles.secondFloor}>
            <h1>
                Підпишіться на наші новини,
                <br />
                що б отримуват останні <br />
                оновлення та новини
            </h1>
            <input type="text" placeholder="example@email.com" />
            <button>
                Підписатись <FaPaperPlane />
            </button>
        </div>
        <div id={styles.socialLinks}>
            <ul>
                <Link to="/https://uk-ua.facebook.com/">
                    <li>
                        <FaFacebook />
                    </li>
                </Link>
                <Link to="/https://x.com/?lang=ua">
                    <li>
                        <FaTwitter />
                    </li>
                </Link>
                <Link to="/https://www.instagram.com/">
                    <li>
                        <FaInstagram />
                    </li>
                </Link>
                <Link to="/https://uk-ua.facebook.com/">
                    <li>
                        <CiLinkedin />
                    </li>
                </Link>
            </ul>
        </div>
    </footer>
);

export default Footer;
