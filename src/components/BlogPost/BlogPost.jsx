import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../Pictures/BlogPost/2025-Volkswagen-Tayon-China-new-3.png';
import img6 from '../Pictures/MainPage/1.jpg';
import img4 from '../Pictures/MainPage/2.png';
import img3 from '../Pictures/MainPage/3.jpg';
import img5 from '../Pictures/MainPage/4.png';
import styles from './BlogPost.css';

const BlogPost = () => (
    <div id={styles.blogPostContainer}>
        <div>
            <img src={img1} alt="" id={styles.img1} />
            <h1>
                Презентовано новий сімейний кросовер
                <br />
                Volkswagen Tayron
            </h1>
        </div>
        <div id={styles.text}>
            <h2>InfoCar</h2>
            <h3>Жовтень 11, 2024 • 3 min Read</h3>
        </div>
        <div id={styles.textSpace}>
            <p>
                У Німеччині презентували новий Volkswagen Tayron другого покоління. Сімейний кросовер покажуть публіці
                на автошоу в Парижі і він буде продаватися у Європі за ціною від 45 475 євро. Про нього розповіли{' '}
                <Link to="/" id={styles.link}>
                    на офіційному сайті Volkswagen.
                </Link>
                Кросовер Volkswagen Tayron другої генерації став «глобальною» моделлю (попередника продавали лише в
                Китаї) і замінив VW Tiguan Allspace. По суті, це подовжений варіант нового Volkswagen Tiguan третього
                покоління. У нього такий же дизайн із роздутими крилами, широкою решіткою радіатора та продовгуватими
                фарами і ліхтарями. <br />
                <br />
                Розміри Volkswagen Tayron 2025:
                <br /> довжина - 47/0 мм;
                <br /> • ширина = 1852 мм:
                <br /> • висота - 1660 мм:
                <br /> • колісна база - 279 мм.
                <br /> Салон Volkswagen Tayron також витриманий у стилістиці Tiguan. Кросовер отримав віртуальний щиток
                приладів та великий 15-дюймовий тачкрін. <br />
                <br />
                Модель поопонують у версіях на 5 та 7 місшь. Об&#39;єм багажника Volkswagen Tavron становить 345 л у
                семимісній конфігурації, 885 л - у п&#39;ятимісній та 2090 л - зі складеними задніми сидіннями. Базова
                комплектація Volkswagen Tavron включає тризонний клімат-контроль, камеру, паркувальний автопілот,
                датчики дощу та світла. Серед опцій є матричні фари, 700-ваттна аудіосистема, панорамний дах, система
                напівавтономного руху, ChatGPT, електропривід, вентиляція та масаж сидінь.
                <br />
                <br /> Новий Volkswagen Tayron дебютує із бензиновими турбомоторами об&#39;ємом 1,5 л (150 к.с.) | 2,0 л
                (265 к.с.), а також 2,0-літровими турбодизелями на 150 і 193 к. с. Пропонують і плагін-гібриди
                потужністю 204 і 272 к. с., здатні проїхати 100 км на електротязі
                <br />
                Усі версії отримали 7-ступінчастий робот DSG, а привід може бути переднім або повним.
            </p>
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
    </div>
);

export default BlogPost;
