import React from 'react';
import module from './SignIn.module.scss'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


import google from '../../assets/google.png';
import facebook from '../../assets/Subtract.png';
import apple from '../../assets/path4.png';
import twit from '../../assets/twit.png';



// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';




function SignIn(props) {
    return (
        <div className={module.container}>
            <div className={module.tittle}>Вход</div>
            <form>
                <div className={module.form_input}>
                    {/* <div className={module.input_tittle}>Ф.И.О</div>
                    <input type="text" name="login" placeholder="введите имя" /> */}

                    <div className={module.input_tittle}>E-mail</div>
                    <input type="text" name="login" placeholder="введите e-mail" />

                    <div className={module.input_tittle}>Пароль</div>
                    <input type="password" name="login" placeholder="введите пароль" />

                    {/* <div className={module.input_tittle}>Повторите пароль</div>
                    <input type="password" name="login" placeholder="введите пароль" /> */}
                </div>
            </form>

            <div className={module.regist}>
            <input className={module.regist_text} type="submit" name="submit" value="Войти"/>
                    <hr className={module.hr} />
            </div>
            <div className={module.sign_up}>
                <div className={module.block2_text}>Вход через социальные сети</div>
                <div className={module.icons}>
                    <img className={module.icon} src={apple}/>
                    <img className={module.icon} src={twit}/>
                    <img className={module.icon} src={facebook} />
                    <img className={module.icon} src={google} />
                </div>
                <hr className={module.hr} />
            </div>

            <div className={module.sign_in}>
                <div className={module.block2_text}>Еще нет аккаунта</div>
                <Link to={'/signUp'}><input className={module.signIn_text} type="submit" name="submit" value="Зарегистрироваться"/></Link>
            </div>

        </div>
    );
}

export default SignIn;