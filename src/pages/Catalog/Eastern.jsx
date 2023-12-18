import React from 'react';
import module from './Eastern.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import shop from '../../assets/shop.png';
import soup from '../../assets/soup.png';
import lamp from '../../assets/lamp.png';




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
                <div className={module.tittle}>Восточная кухня</div>
                <div className={module.info}>
                также именуемая западной или <br />
                континентальной, это обобщающий <br /> 
                термин для обозначения <br /> 
                разнообразных кухонь стран Европы, а<br /> 
                также подвергшихся европейскому <br />
                влиянию кухонь Северной Америки, <br />
                Австралазии, Океании и Латинской <br />
                Америки.
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
                <img className={module.soup} src={soup} alt="" />
            </div>

        </div>

        <div className={module.container_2}>
            <div className={module.block_3}>
                <div className={module.tittle_2}>Вы узнаете на курсе</div>
                <div className={module.info_2}>
                    <ul>
                        <li>множество интересных восточных рецептов и знания,<br /> 
                        как их правильно реализовы­вать;</li>
                        <li>советы, технологи­ческие тонкости, которые так <br />
                        важны в восточной кухне;</li>
                        <li>вдохнове­ние и уверен­ность в своих силах;</li>
                        <li>восхищение домашних, которых вы теперь сможете <br /> 
                        баловать изысканной восточной кухней;</li>
                        <li>сертификат о прохожде­нии курсов.</li>
                    </ul>
                </div>

                <div className={module.tittle_3}>Чего можно ожидать от нашего курса ?</div>
                <div className={module.info_2}>
                    <ul>
                        <li>при окончании курса, каждому выдается сертификат об <br />
                        успешной реализации в кулинарных способностях.</li>
                        <li>возможность работать и продвигать бизнес в сфере <br /> 
                        кулинарии.</li>
                        <li>также, улучшите свои кулинарные способности по разнообразным кухням !</li>
                    </ul>
                </div>
            </div>
            <div className={module.block_4}>
                <img className={module.lamp} src={lamp} alt="" />
            </div>
        </div>
    </div>


    );
}

export default App;