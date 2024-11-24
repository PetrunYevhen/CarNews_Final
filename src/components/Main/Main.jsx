import React from 'react';
import { Link } from 'react-router-dom';

import img6 from '../Pictures/MainPage/1.jpg';
import img4 from '../Pictures/MainPage/2.png';
import img3 from '../Pictures/MainPage/3.jpg';
import img5 from '../Pictures/MainPage/4.png';
import img1 from '../Pictures/MainPage/5.png';
import img8 from '../Pictures/MainPage/8.jpg';
import img2 from '../Pictures/MainPage/945x471.png';
import img7 from '../Pictures/MainPage/7906.jpg';
import img10 from '../Pictures/MainPage/image.png';
import ruslan from '../Pictures/MainPage/ruslan.jpg';
import img9 from '../Pictures/MainPage/thumbnail_600x251.png';
import styles from './Main.css';

const Main = () => (
    <div className={styles.mainContainer} data-testid="main-container">
        <div id={styles.textContainer} data-testid="text-container">
            <h1 data-testid="main-heading">
                Твоя подорож <br />
                Твій автомобіль <br />
                Твій шлях
            </h1>
            <h2 data-testid="subheading">
                CarNews - це платформа для справжніх автомобільних <br />
                ентузіастів, яка поєднує новини, блоги, огляди автомобілів. Тут <br />
                користувачі можуть дізнаватися про останні тенденції <br />
                автомобільної індустрії, обмінюватися своїми думками щодо авто <br />
                CarNews - це ваш провідник у світі автомобілів, який пропонує <br />
                свіжі новини та експертні огляди
            </h2>
            <img src={img1} alt="" id={styles.img1} data-testid="main-image" />
        </div>

        <div id={styles.MiddleContainer} data-testid="middle-container">
            <div id={styles.log} data-testid="log-container">
                <div id={styles.section1} data-testid="section1">
                    <h1 data-testid="latest-news-heading">Останні новини</h1>
                    <div id={styles.post} data-testid="post-container">
                        <img src={img2} alt="" id={styles.img2} data-testid="news-image" />
                        <h5 data-testid="news-date">Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2 data-testid="news-title">
                            Презентовано новий сімейний кросовер
                            <br />
                            Volkswagen Tayron
                        </h2>
                        <p data-testid="news-description">
                            У Німеччині презентували новий Volkswagen Tayron другого покоління. покажуть публіці на
                            автошоу в Парижі і він буде продаватися у Європі за ціною від 45 475 євро. Про нього
                            розповіли{' '}
                            <Link to="https://www.volkswagen.ua" id={styles.link} data-testid="volkswagen-link">
                                на офіційному сайті Volkswagen.
                            </Link>
                        </p>
                        <Link to="/blogPost" data-testid="read-more-link">
                            <button id={styles.readMore} data-testid="read-more-button">
                                Читати Більше
                            </button>
                        </Link>
                    </div>
                </div>
                <div id={styles.section2} data-testid="section2">
                    <h6 id={styles.all} data-testid="all-category">
                        Все
                    </h6>
                    <h1 data-testid="popular-blogs-heading">Популярні блоги</h1>
                    <div className={styles.new} data-testid="blog1">
                        <h5 data-testid="blog1-date">Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2 data-testid="blog1-title">
                            MINI в США представила <br />
                            кабріолте Cooper
                        </h2>
                    </div>
                    <div id={styles.new1} data-testid="blog2">
                        <h5 data-testid="blog2-date">Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2 data-testid="blog2-title">
                            Незвичний кабріолет Ferrari
                            <br />
                            Roma Spider представили
                            <br />
                            офіційно
                        </h2>
                    </div>

                    <div className={styles.new} data-testid="blog3">
                        <h5 data-testid="blog3-date">Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2 data-testid="blog3-title">
                            Skoda презентувала абсолютно
                            <br />
                            новий електрчний кросовер
                            <br />
                            Elroq
                        </h2>
                    </div>

                    <div className={styles.new} data-testid="blog4">
                        <h5 data-testid="blog4-date">Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2 data-testid="blog4-title">
                            Porsche Taycan Turbo GT став
                            <br />
                            найшвдкішим серійним
                            <br />
                            електромобілем
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div id={styles.newContainer} data-testid="categories-container">
            <h1 data-testid="categories-heading">Всі категорії</h1>
            <div id={styles.section3} data-testid="categories-section">
                <div className={styles.card} data-testid="car-reviews-card">
                    <img src={img3} alt="" data-testid="car-reviews-image" />
                    <h2 data-testid="car-reviews-title">Огляди авто</h2>
                    <h3 data-testid="car-reviews-description">
                        Огляд тенічних
                        <br />
                        харектеристик, дизайну,
                        <br />
                        безпеки та інновій
                    </h3>
                </div>
                <div className={styles.card} data-testid="maintenance-card">
                    <img src={img4} alt="" data-testid="maintenance-image" />
                    <h2 data-testid="maintenance-title">Обслуговування</h2>
                    <h3 data-testid="maintenance-description">
                        Корисні рекомендаціії з<br /> догляду за автомобілем
                    </h3>
                </div>
                <div className={styles.card} data-testid="modifications-card">
                    <img src={img5} alt="" data-testid="modifications-image" />
                    <h2 data-testid="modifications-title">
                        Модифікація <br />
                        автомобіля
                    </h2>
                    <h3 data-testid="modifications-description">
                        Зміни та покращення
                        <br /> технічних характеристик,
                        <br />
                        зовнішнього виду
                    </h3>
                </div>
                <div className={styles.card} data-testid="driving-tips-card">
                    <img src={img6} alt="" data-testid="driving-tips-image" />
                    <h2 data-testid="driving-tips-title">Поради з водіння</h2>
                    <h3 data-testid="driving-tips-description">
                        Практичні рекомендації, які
                        <br /> допоможуть покращити
                        <br /> навички керування авто
                    </h3>
                </div>
            </div>
        </div>
        <div id={styles.feedback} data-testid="feedback-section">
            <div id={styles.section4} data-testid="feedback-section1">
                <h2 data-testid="feedback-heading">ВІДГУКИ ПРО САЙТ</h2>
                <h1 data-testid="feedback-subheading">
                    Що люди
                    <br />
                    говорять про цей
                    <br />
                    сайт
                </h1>
                <h2 data-testid="feedback-comment">
                    &#34;Цей сайт став для мене відкритям!
                    <br />
                    Дуже зручний інтерфейс і корисна
                    <br />
                    інформація. Рекомендую всім!&#34;
                </h2>
            </div>
            <div id={styles.section5} data-testid="feedback-section2">
                <h1 data-testid="feedback-comment2">
                    &#34;Завжди знаходжу потрібну <br /> інформацію на цьому сайті. Дуже <br /> зручний і інтуїтивно
                    зрозумілий! <br /> Великий плюс - швидка <br /> навігація.&#34;
                </h1>
                <div id={styles.comment} data-testid="feedback-author">
                    <img src={ruslan} alt="" id={styles.avatar} data-testid="feedback-avatar" />
                    <h5 data-testid="feedback-author-name">Подзивало Руслан</h5>
                </div>
                <h4 data-testid="feedback-location">
                    Україна
                    <br />
                    Ужгород
                </h4>
            </div>
            <div id={styles.buttons} data-testid="feedback-buttons">
                <button id={styles.button1} data-testid="feedback-button1">
                    &#8592;
                </button>
                <button id={styles.button2} data-testid="feedback-button2">
                    &#8594;
                </button>
            </div>
        </div>
        <div id={styles.lastContainer} data-testid="last-container">
            <h1 data-testid="new-tech-heading">Нові технології</h1>
            <div id={styles.section6} data-testid="new-tech-section">
                <div className={styles.cardNew} data-testid="new-tech-card1">
                    <img src={img10} alt="" data-testid="new-tech-image1" />
                    <h2 data-testid="new-tech-title1">
                        Огляд автомобілів із <br />
                        передовими
                        <br />
                        інформаційно-
                        <br />
                        розважальними
                        <br />
                        системами
                    </h2>
                </div>
                <div className={styles.cardNew} data-testid="new-tech-card2">
                    <img src={img9} alt="" data-testid="new-tech-image2" />
                    <h2 data-testid="new-tech-title2">
                        Глибоке занурення в <br />
                        спортивні автомобілі{' '}
                    </h2>
                </div>
                <div className={styles.cardNew} data-testid="new-tech-card3">
                    <img src={img8} alt="" data-testid="new-tech-image3" />
                    <h2 data-testid="new-tech-title3">
                        Огляд автомобілів із <br /> найкращою вартістю <br />
                        перепродажу
                    </h2>
                </div>
                <div className={styles.cardNew} data-testid="new-tech-card4">
                    <img src={img7} alt="" data-testid="new-tech-image4" />
                    <h2 data-testid="new-tech-title4">
                        Огляд автомобілів із <br /> найкращою вартістю <br />
                        перепродажу
                    </h2>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
