import React from 'react';
import module from './MainPage.module.scss'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import logo from '../../assets/logo.png';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import ellipse from '../../assets/ellipse.png';
import samsy from '../../assets/samsy.png';
import salat1 from '../../assets/salat1.png';
import salat2 from '../../assets/salat2.png';
import salat3 from '../../assets/salat3.png';
import salat4 from '../../assets/salat4.png';
import food from '../../assets/food.png';
import hat from '../../assets/hat.png';
import luk from '../../assets/luk.png';
import slaider from '../../assets/slaider.png';
import before from '../../assets/before.png';
import next from '../../assets/next.png';
import telegram from '../../assets/telegram.png';
import youtube from '../../assets/youtube.png';
import govno from '../../assets/govno.png';
import AboutUs from '../aboutUs/AboutUs.jsx'
import salider from '../../../src/assets/slaider.png'

function MainPage(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '../../../src/assets/slider3.jpg',
    '../../../src/assets/slider2.jpg',
    '../../../src/assets/slaider.png',
  ];

  const prevSlide = () => {
    const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(prev);
  };

  const nextSlide = () => {
    const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(next);
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <div className="App">
      <header>
        <nav>
          <img className={module.nav_item} src={logo}></img>
          <div className={module.navCategory}>
            <div className={module.nav_cat} onClick={toggleMenu}>
              Категории
            </div>
            {/* <div>
              <img className={module.nav_img} src={vector} alt="Вектор"></img>
            </div> */}
            {menuVisible && (
              <div className={module.navCatContainer}>
                <div className={module.navCat}>Категория 1</div>
                <div className={module.navCat}>Категория 2</div>
                <div className={module.navCat}>Категория 3</div>
                {/* Ещё категории */}
              </div>
            )}
          </div>
          <Link to={'/recipes'}>О нас</Link>
          {/* <a className={module.nav_item} href='#'>О нас</a> */}
          <div className={module.nav_itemStart}>
            <Link className={module.itemStart} to={'/signUp'}>Начать</Link>
            {/* <div className={module.itemStart}>Начать</div> */}
          </div>
        </nav>

        <div className={module.header_block1}>
          <div className={module.header_tittle}>
            Спроси у мамы !
          </div>
          <div className={module.header_text}>
            онлайн-курсы “спроси у мамы” это настоящие курсы кулинарии.
            Это сайт для тех, кто любит готовить или хочет научиться это делать легко и непринужденно.
          </div>
        </div>

        <img className={module.food} src={samsy}></img>

        <img className={module.salat1} src={salat1}></img>
        <img className={module.salat2} src={salat2}></img>
        <img className={module.salat4} src={salat4}></img>
        <img className={module.salat3} src={salat3}></img>


        <img className={module.ellip} src={ellipse}></img>

      </header>

      <div className={module.container1}>
        <div className={module.container1_block}>
          <div className={module.hatBack}></div>
          <img className={module.hat} src={hat}></img>
        </div>
        <div className={module.container1_block2}>
          <div className={module.block2_tittle}>Спроси у мамы</div>
          <div className={module.block2_text}>Готовьте вместе  с профессиональными шеф-поварами  не выходя из дома  в прямом эфире  или в записи</div>
        </div>
      </div>

      <div className={module.container2}>
        <div className={module.container2_block}>
          <div className={module.block2_tittle}>Это наша основная миссия</div>
          <div className={module.block2_text}>Предоставить нашим клиентам доступные
            и высококачественные знания, благодаря нашим курсам в дальнейшем каждый может открыть те же самые курсы</div>
        </div>
        <div className={module.container2_block2}>
          <div className={module.lukBack}></div>
          <img className={module.luk} src={luk}></img>
        </div>
      </div>

      <img className={module.salat} src={salat4}></img>

      <div className={module.box}>Наши 2 основные<br /> цели</div>

      <div className={module.container3}>
        <div className={module.container3_block}>
          <div className={module.users}>Число <br /> пользователей <br /> 100 000 +</div>
        </div>
        <div className={module.container3_block2}>
          <div className={module.cook}>новые<br /> пов. повара<br /> 4+</div>
        </div>
      </div>

      <div className={module.box}>Категория</div>
      <div className={module.box2}>Большое разнообразие кухни и рецептов !<br />
        Выбирайте и покупайте любой курс по кухне.
      </div>

      <div className={module.slaider_box}>
        <button onClick={nextSlide} className={module.slaiderBtnB}>
          <img src={before}></img>
        </button>
        <img src={slides[currentSlide]} alt="Current" />
        <button onClick={prevSlide} className={module.slaiderBtnN}>
          <img src={next}>
          </img>
        </button>
        <div className={module.slaider}>


        </div>
      </div>



    </div>


  );
}


export default MainPage;