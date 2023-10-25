import React from 'react'
import './Header';

function Header() {
  return (
    <header className='header'>
        <div className='header__wrap'>
          <span className='header__logo'>House Staff</span>
          <ul className="header__nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
          </ul>
        </div>
        <div className='header__presentation'></div> 
    </header>
  )
}

export default Header;