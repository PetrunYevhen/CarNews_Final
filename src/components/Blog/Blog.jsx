import React from 'react';

import img1 from '../Pictures/Blog/1.jpg';
import img7 from '../Pictures/Blog/945x471 (1).jpg';
import img8 from '../Pictures/Blog/945x471 (2).jpg';
import img10 from '../Pictures/Blog/945x471 (3).jpg';
import img9 from '../Pictures/Blog/945x471.jpg';
import img4 from '../Pictures/Blog/F40-SupercarFlat-300x400.jpg';
import img6 from '../Pictures/Blog/image.png';
import img3 from '../Pictures/Blog/mercedes-8674371_1280.png';
import img5 from '../Pictures/Blog/screenshot_2_a2d2213fd951c4fb458f10dafa75a824_650x410.jpg';
import img2 from '../Pictures/Blog/thumbnail_260x461.png';
import styles from './Blog.css';

// function Header() {};
const Blog = () => (
    <div className={styles.mainContainer}>
        <div is={styles.topContainer}>
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
            </div>
            <div id={styles.imageContainer}>
                <img src={img1} alt="" id={styles.img1} />
                <img src={img2} alt="" id={styles.img2} />
                <img src={img3} alt="" id={styles.img3} />
                <img src={img4} alt="" id={styles.img4} />
            </div>
        </div>
        <div id={styles.posts}>
            <h1>Всі пости</h1>
            <div id={styles.postContainer}>
                <div id={styles.postInfo}>
                    <div className={styles.imgZone}>
                        <img src={img5} alt="" className={styles.imgCar} />
                    </div>
                    <div className={styles.infoZone}>
                        <h2>Незвичний Кабріолет Ferrari Roma Spider Представили Офіційно</h2>
                        <h5>InfoCar</h5>
                        <h6>Жовтень 11, 2024 • 3 min Read</h6>
                        <h3>
                            Кабріолет Ferrari Roma Spider Отримав Ексклюзивну Версію Tailor Made. Унікальне Авто Буде
                            Виставлена В Музеї Енцо Феррарі В Модені З Метою Показати Нові Варіанти Оздоблення Салону Та
                            Декору. Про Це Повідомляє Прес-Служба Ferrari.
                        </h3>
                        <button>Читати більше</button>
                    </div>
                </div>

                <div id={styles.postInfo}>
                    <div className={styles.imgZone}>
                        <img src={img6} alt="" className={styles.imgCar} />
                    </div>
                    <div className={styles.infoZone}>
                        <h2>Раритетний Porsche 911 Turbo Продали 3 Аукціону За Колосальні 818 Тисяч Доларів</h2>
                        <h5>InfoCar</h5>
                        <h6>Жовтень 11, 2024 • 3 min Read</h6>
                        <h3>
                            3 Аукціону Bonhams Продали Останній Porsche 911 Turbo Coupe з Повітряним Охолодженням.
                            Спорткар 1998 Року Випуску, Який Усі Ці Роки Зберігався У Гаражі, Пішов 3 Молотка За
                            Неймовірні 818 Тисяч Доларів.
                        </h3>
                        <button>Читати більше</button>
                    </div>
                </div>
                <div id={styles.postInfo}>
                    <div className={styles.imgZone}>
                        <img src={img7} alt="" className={styles.imgCar} />
                    </div>
                    <div className={styles.infoZone}>
                        <h2>На Український Ринок Виходить Нова Toyota Camry 2025</h2>
                        <h5>InfoCar</h5>
                        <h6>Жовтень 11, 2024 • 3 min Read</h6>
                        <h3>
                            В Україні Стартують Продажі Toyota Camry Нового Покоління. Седан D-Класу Буде Доступний Із
                            24 Жовтня. Інформація Про Нього З&#39;явилася На Сайті Представництва Toyota В Україні.
                        </h3>
                        <button>Читати більше</button>
                    </div>
                </div>
                <div id={styles.postInfo}>
                    <div className={styles.imgZone}>
                        <img src={img8} alt="" className={styles.imgCar} />
                    </div>
                    <div className={styles.infoZone}>
                        <h2>Volkswagen Розпочав Продажі Нового Седана Passat Pro</h2>
                        <h5>InfoCar</h5>
                        <h6>Жовтень 11, 2024 • 3 min Read</h6>
                        <h3>
                            Компанія Volkswagen Розпочала Продажі Нового Покоління Passat В Кузові Седан. Глобальна
                            Модель 3 Заводським Індексом В9 Доступна Тільки В Кузові Універсал, А Седан Запропонований
                            Тільки Для Ринку Китаю. Про Це Повідомляє Сайт Autohome.
                        </h3>
                        <button>Читати більше</button>
                    </div>
                </div>
                <div id={styles.postInfo}>
                    <div className={styles.imgZone}>
                        <img src={img9} alt="" className={styles.imgCar} />
                    </div>
                    <div className={styles.infoZone}>
                        <h2>Тисяча Нових BMW Мають Дефект Рульового Керування</h2>
                        <h5>InfoCar</h5>
                        <h6>Жовтень 11, 2024 • 3 min Read</h6>
                        <h3>
                            Ймовірно, Майже 1000 Автівок BMW 5-Series Ta 7-Series Відкликаються Через Дефект Шарніра
                            Рульового Валу, Що Може Призвести До Ускладнення Керування Та, Як Наслідок, Аварії.
                        </h3>
                        <button>Читати більше</button>
                    </div>
                </div>
                <div id={styles.postInfo}>
                    <div className={styles.imgZone}>
                        <img src={img10} alt="" className={styles.imgCar} />
                    </div>
                    <div className={styles.infoZone}>
                        <h2>Renault Показав Новий Електромобіль Для Міста Mobilize Duo</h2>
                        <h5>InfoCar</h5>
                        <h6>Жовтень 11, 2024 • 3 min Read</h6>
                        <h3>
                            Компанії Renault Показала Електромобіль Для Міста Під Назвою Mobilize Duo. Офіційний Дебют
                            Новинки Запланований На Паризькому Автосалоні. За Словами Інженерів, Авто Повинно
                            Запропонувати Комфорт Повнорозмірного Автомобіля Попри Малі Розміри.
                        </h3>
                        <button>Читати більше</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Blog;
