import React from 'react';
import module from './Footer.module.scss'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import aboutUs from '../../pages/aboutUs/AboutUs';
// import { useContext } from 'react';

import white from '../../assets/white.png';
import logo from '../../assets/logo.png';
import youtube from '../../assets/youtube.png'
import telegram from '../../assets/telegram.png'
import govno from '../../assets/govno.png'

function Footer(props) {
    return (
        <footer>
      <div className={module.footer_container}>
        <div className={module.footer_block1}>
          <img src={white}></img>
          <div className={module.footer_info}>онлайн-курсы “спроси у мамы” это настоящие курсы кулинарии. Это сайт для тех
          , кто любит готовить или хочет научиться это делать легко и непринужденно.</div>
          <div className={module.footer_more}>Подробнее</div>
          <div className={module.footer_info2}>Ⓒ Спроси у мамы, 2023 </div>
        </div>
        <div className={module.footer_block2}>
          <ul>
            {/* <li className={module.ul1}><Link to='/shop-template/abousus'>О нас</Link></li> */}
            {/* <li className={module.ul1}><Link>Справка и поддержка</Link></li> */}
            <li className={module.ul1}><a href='#'>Условия использования</a></li>
            <li className={module.ul1}><a href='#'>Настройки файлов cookie</a></li>
            <li className={module.ul1}><a href='#'>Карта сайта</a></li>
          </ul>
        </div>
        <div className={module.footer_block3}>
          <ul>
            <Link to={'/japan'}><li className={module.ul2}>Контакты</li></Link>
            <Link to={'/eastern'}><li className={module.ul2}>Скидки</li></Link>
            <li className={module.ul2}>Условия использования</li>
          </ul>
          <div className={module.icons}>
            <div className={module.icon_block}><img className={module.icon1} src={telegram}></img></div>
            <div className={module.icon_block}><img className={module.icon2} src={youtube}></img></div>
            <div className={module.icon_block}><img className={module.icon3} src={govno}></img></div>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;