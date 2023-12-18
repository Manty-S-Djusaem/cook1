import React from 'react';
import module from './Korean.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';
import rice from '../../assets/rice.png';
import shop from '../../assets/shop.png';
import chopsticks2 from '../../assets/chopsticks2.png';




function App() {
    return (
    <div className="App">
        <header>
            <nav>
                <img className={module.nav_item} src={logo}></img>
                <div className={module.navCategory}>
                    <div className={module.nav_cat}>категория</div>
                    <div><img className={module.nav_img} src={vector}></img></div>
            </div>
            <a className={module.nav_item} href='#'>О нас</a>
                <div className={module.nav_itemStart}>
                    <div className={module.itemStart}>Начать</div>
                </div>
            </nav>
        </header>

        <div className={module.container_1}>
            <div className={module.block_1}>
                <div className={module.tittle}>Корейская кухня</div>
                <div className={module.info}>
                    совокупность корейских национальных
                    <br /> блюд. Основные блюда — рис, лапша,
                    <br /> супы, закуски, токпокки
                </div>
                <div className={module.bfm}>
                    <div className={module.button}>купить</div>
                    <div className={module.price}>3000 сом за месяц</div>
                </div>

                <div class={module.korzina}>
                    <span class={module.buttonText}>Добавлено в корзину</span>
                    <img class={module.buttonIcon} src={shop} alt="Иконка"/>
                </div>

                <div className={module.schedule}>
            утренннее время : 10:00 до 11:00<br />
            вечернее время : 18:00 до 19:00
        </div>
            </div>
            <div className={module.block_2}>
                <img className={module.rice} src={rice} alt="" />
            </div>

        </div>

        <div className={module.container_2}>
            <div className={module.block_3}>
                <div className={module.tittle_2}>Что входит в курс ?</div>
                <div className={module.info_2}>
                    <ul>
                        <li>Курс состоит из 30 ак. часов теоретических занятий и 100 практических часов. Теоретические занятия познакомят :
                        <li>Вас с историей и многовековыми традициями Кореи.</li>
                        <li>Вас посвятят в секреты сочетания ингредиентов, подачи и сервировки.</li>
                        <li>Вы узнаете рецептуры основных блюд и научитесь создавать свои оригинальные   рецепты.</li>
                        <li>Весь учебный процесс проходит под руководством высококвалифицированных <br />
                    преподавателей –   поваров-кулинаров. Практическим занятиям уделяется большая часть обучения.</li>
                        <li>Ведь информация усваивается гораздо лучше, если наблюдать и участвовать в процессе непосредственно.</li>
                        <li>Именно на этом этапе Вы научитесь готовить кулинарные шедевры любой сложности.</li>
                        <li>Получить отличную подготовку и стать поваром корейской кухни достаточно просто!</li>
                        <li>Приходите в наш учебный центр и за короткий срок получите перспективную и <br />  востребованную профессию.</li>
                        <li>К нам постоянно обращаются работодатели нашего города за подготовленными кадрами.</li>
                        <li>Поэтому трудоустройство возможно сразу же по окончании курса.</li></li>
                    </ul>
                </div>

                <div className={module.tittle_3}>Чего можно ожидать от нашего курса ?</div>
                <div className={module.info_2}>
                    <ul>
                        <li>при окончании курса, каждому выдается сертификат об успешной реализации в кулинарных способностях.</li>
                        <li>возможность работать и продвигать бизнес в сфере кулинарии.</li>
                        <li>также, улучшите свои кулинарные способности по разнообразным кухням !</li>
                    </ul>
                </div>
            </div>
            <div className={module.block_4}>
                <img className={module.chopsticks} src={chopsticks2} alt="" />
            </div>
        </div>
    </div>


    );
}

export default App;