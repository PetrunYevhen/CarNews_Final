import React from 'react';

import {Link} from "react-router-dom";
import img6 from '../Pictures/MainPage//1.jpg'
import img4 from '../Pictures/MainPage/2.png'
import img3 from '../Pictures/MainPage/3.jpg'
import img5 from '../Pictures/MainPage/4.png'
import img1 from '../Pictures/MainPage/5.png'
import img2 from '../Pictures/MainPage/945x471.png'
import img7 from '../Pictures/MainPage/7906.jpg'
import img10 from '../Pictures/MainPage/image.png'
import img8 from '../Pictures/MainPage/8.jpg'
import img9 from '../Pictures/MainPage/thumbnail_600x251.png'
import ruslan from '../Pictures/MainPage/Ruslan.jpg'

import styles from './Main.css';

// function Header() {};
const Main = () => (
    <div className={styles.mainContainer}>
        <div id={styles.textContainer}>
            <h1>
                Твоя подорож <br />
                Твій автомобіль <br />
                Твій шлях
            </h1>
            <h2>
                CarNews - це платформа для справжніх автомобільних <br />
                ентузіастів, яка поєднує новини, блоги, огляди автомобілів. Тут <br />
                користувачі можуть дізнаватися про останні тенденції <br />
                автомобільної індустрії, обмінюватися своїми думками щодо авто <br />
                CarNews - це ваш провідник у світі автомобілів, який пропонує <br />
                свіжі новини та експертні огляди
            </h2>
            <img src={img1} alt="" id={styles.img1} />
        </div>

        <div id={styles.MiddleContainer}>
            <div id={styles.log}>
                <div id={styles.section1}>
                    <h1>Останні новини</h1>
                    <div id={styles.post}>
                        <img src={img2} alt="" id={styles.img2} />
                        <h5>Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2>
                            Презентовано новий сімейний кросовер
                            <br />
                            Volkswagen Tayron
                        </h2>
                        <p>
                            У Німеччині презентували новий Volkswagen Tayron другого покоління. покажуть публіці на
                            автошоу в Парижі і він буде продаватися у Європі за ціною від 45 475 євро. Про нього
                            розповіли{' '}
                            <Link to="https://www.volkswagen.ua" id={styles.link}>
                                на офіційному сайті Volkswagen.
                            </Link>
                        </p>
                        <Link to="/blogPost">
                            <button id={styles.readMore}>Читати Більше</button>
                        </Link>
                    </div>
                </div>
                <div id={styles.section2}>
                    <h6 id={styles.all}>Все</h6>
                    <h1>Популярні блоги</h1>
                    <div className={styles.new}>
                        <h5>Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2>
                            MINI в США представила <br />
                            кабріолте Cooper
                        </h2>
                    </div>
                    <div id={styles.new1}>
                        <h5>Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2>
                            Незвичний кабріолет Ferrari
                            <br />
                            Roma Spider представили
                            <br />
                            офіційно
                        </h2>
                    </div>

                    <div className={styles.new}>
                        <h5>Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2>
                            Skoda презентувала абсолютно
                            <br />
                            новий електрчний кросовер
                            <br />
                            Elroq
                        </h2>
                    </div>

                    <div className={styles.new}>
                        <h5>Від &#34;InfoCar&#34; | Жовтень 11, 2024</h5>
                        <h2>
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
        <div id={styles.newContainer}>
            <h1>Всі категорії</h1>
            <div id={styles.section3}>
                <div className={styles.card}>
                    <img src={img3} alt="" />
                    <h2>Огляди авто</h2>
                    <h3>
                        Огляд тенічних
                        <br />
                        харектеристик, дизайну,
                        <br />
                        безпеки та інновій
                    </h3>
                </div>
                <div className={styles.card}>
                    <img src={img4} alt="" />
                    <h2>Обслуговування</h2>
                    <h3>
                        Корисні рекомендаціії з<br /> догляду за автомобілем
                    </h3>
                </div>
                <div className={styles.card}>
                    <img src={img5} alt="" />
                    <h2>
                        Модифікація <br />
                        автомобіля
                    </h2>
                    <h3>
                        Зміни та покращення
                        <br /> технічних характеристик,
                        <br />
                        зовнішнього виду
                    </h3>
                </div>
                <div className={styles.card}>
                    <img src={img6} alt="" />
                    <h2>Поради з водіння</h2>
                    <h3>
                        Практичні рекомендації, які
                        <br /> допоможуть покращити
                        <br /> навички керування авто
                    </h3>
                </div>
            </div>
        </div>
        <div id={styles.feedback}>
            <div id={styles.section4}>
                <h2>ВІДГУКИ ПРО САЙТ</h2>
                <h1>
                    Що люди
                    <br />
                    говорять про шаш
                    <br />
                    сайт
                </h1>
                <h2>
                    &#34;Цей сайт став для мене відкритям!
                    <br />
                    Дуже зручний інтерфейс і корисна
                    <br />
                    інформація. Рекомендую всім!&#34;
                </h2>
            </div>
            <div id={styles.section5}>
                <h1>
                    &#34;Завжди знаходжу потрібну <br /> інформацію на цьому сайті. Дуже <br /> зручний і інтуїтивно
                    зрозумілий! <br /> Великий плюс - швидка <br /> навігація.&#34;
                </h1>
                <div id={styles.comment}>
                    <img src={ruslan} alt="" id={styles.avatar} />
                    <h5>Подзивало Руслан</h5>
                </div>
                <h4>
                    Україна
                    <br />
                    Ужгород
                </h4>
            </div>
            <div id={styles.buttons}>
                <button id={styles.button1}>&#8592;</button>
                <button id={styles.button2}>&#8594;</button>
            </div>
        </div>
        <div id={styles.lastContainer}>
            <h1>Нові технології</h1>
            <div id={styles.section6}>
                <div className={styles.cardNew}>
                    <img src={img10} alt="" />
                    <h2>
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
                <div className={styles.cardNew}>
                    <img src={img9} alt="" />
                    <h2>
                        Глибоке занурення в <br />
                        спортивні автомобілі{' '}
                    </h2>
                </div>
                <div className={styles.cardNew}>
                    <img src={img8} alt="" />
                    <h2>
                        Огляд автомобілів із <br /> найкращою вартістю <br />
                        перепродажу
                    </h2>
                </div>
                <div className={styles.cardNew}>
                    <img src={img7} alt="" />
                    <h2>
                        Огляд автомобілів із <br /> найкращою вартістю <br />
                        перепродажу
                    </h2>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
