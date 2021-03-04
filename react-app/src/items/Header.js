import React from 'react'
import logo from './img/header-logo.png'
import header_bg from './img/header-bg.png'

export default function Header () {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-logo'>
                    <img src={logo}></img>
                </div>
                <div className='header-title'>
                    <h1>Leonid Belov</h1>
                </div>
                <div className='header-menu'>
                    <ul className='header-menu-ul'>
                        <li className='header-menu-ul-li'>
                            <a href='#'>Опыт работы</a>
                        </li>
                        <span> | </span>
                        <li className='header-menu-ul-li'>
                            <a href='#'>Образование</a>
                        </li>
                        <span> | </span>
                        <li className='header-menu-ul-li'>
                            <a href='#'>Умения</a>
                        </li>
                        <span> | </span>
                        <li className='header-menu-ul-li'>
                            <a href='#'>Сертификаты</a>
                        </li>
                        <span> | </span>
                        <li className='header-menu-ul-li'>
                            <a href='#'>Работы</a>
                        </li>
                        <span> | </span>
                        <li className='header-menu-ul-li'>
                            <a href='#'>Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}