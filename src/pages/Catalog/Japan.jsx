import React from 'react';
import module from './Japan.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import shop from '../../assets/shop.png';
import ramen from '../../assets/ramen.png';
import teapot from '../../assets/teapot.png';




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
                <div className={module.tittle}>Японская Кухня</div>
                <div className={module.info}>
                национальная кухня японцев.<br />
                Отличается предпочтением<br /> 
                натуральных, минимально<br /> 
                обработанных продуктов, широким <br />
                применением морепродуктов,<br />
                сезонностью, характерными блюдами,<br /> 
                специфическими правилами <br />
                оформления блюд, сервировкой,<br /> 
                застольным этикетом.
                </div>
                <div className={module.bfm}>
                    <div className={module.button}>купить</div>
                    <div className={module.price}>3000 сом за месяц</div>
                </div>

                <div class={module.korzina}>
                    <span class={module.buttonText}>Добавлено в корзину</span>
                    <img class={module.buttonIcon} src={shop} alt=""/>
                </div>

                <div className={module.schedule}>
            утренннее время : 10:00 до 11:00<br />
            вечернее время : 18:00 до 19:00
        </div>
            </div>
            <div className={module.block_2}>
                <img className={module.ramen} src={ramen} alt="" />
            </div>

        </div>

        <div className={module.container_2}>
            <div className={module.block_3}>
                <div className={module.tittle_2}>Вы узнаете на курсе</div>
                <div className={module.info_2}>
                    <ul>
                        <li>краткую историю и особенности японской кухни;</li>
                        <li>традиции японской кулинарии и этикет;</li>
                        <li>отличия качественного риса, его разновидности и способы варки;</li>
                        <li>состав и навыки техники исполнения суши и роллов;</li>
                        <li>оригинальные виды рыб, моллюсков и морепродуктов;</li>
                        <li>правила нарезки рыбы и использования поварских инструментов;</li>
                        <li>способы приготовления и разновидности лапши, соусов и сухих продуктов;</li>
                        <li>работу с японским кухонным инвентарем;</li>
                        <li>основы оформления и украшения блюд японской кухни.</li>
                    </ul>
                </div>

                <div className={module.tittle_3}>Чего можно ожидать от нашего курса ?</div>
                <div className={module.info_2}>
                    <ul>
                        <li>при окончании курса, каждому выдается сертификат об <br />
                        успешной реализации в кулинарных способностях.</li>
                        <li>возможность работать и продвигать бизнес в сфере кулинарии.</li>
                        <li>также, улучшите свои кулинарные способности по разнообразным кухням !</li>
                    </ul>
                </div>
            </div>
            <div className={module.block_4}>
                <img className={module.teapot} src={teapot} alt="" />
            </div>
        </div>
    </div>


    );
}

export default App;