import React from 'react';
import module from './Recipes.module.scss'

import logo from '../../assets/Group 25.png';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';
import telegram from '../../assets/telegram.png';
import youtube from '../../assets/youtube.png';
import govno from '../../assets/govno.png';

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

    <div className={module.block}>
        <div className={module.block_item1}>Выберите рецепты</div>
        <div className={module.block_item2}>10 из 10</div>
    </div>

    <div className={module.container}>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    <div className={module.food_down}>
        <img src={food}></img>
    </div>
    </div>


    </div>


    );
}

export default App;

