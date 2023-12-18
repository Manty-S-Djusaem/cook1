import React from 'react';
import module from './Header.module.scss'

import logo from '../../assets/logo.jpg';
import white from '../../assets/white.png';
import vector from '../../assets/Vector.png';
import food from '../../assets/food.png';

function Header(props) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header>
            <nav>
                <img className={module.nav_item} src={logo} alt="Логотип"></img>
                <div className={module.navCategory}>
                    <div className={module.nav_cat} onClick={toggleMenu}>
                        User
                    </div>
                    <div>
                        <img className={module.nav_img} src={vector} alt="Вектор"></img>
                    </div>
                    {menuVisible && (
                        <div className={module.nav - cat - container}>
                            <div className={module.nav - cat}>Категория 1</div>
                            <div className={module.nav - cat}>Категория 2</div>
                            <div className={module.nav - cat}>Категория 3</div>
                        </div>
                    )}
                </div>
                <a className={module.nav_item} href='#'>О нас</a>
                <div className={module.nav_itemStart}>
                    <div className={module.itemStart}>Начать</div>
                </div>
            </nav>
        </header>
    );
}

export default Header;