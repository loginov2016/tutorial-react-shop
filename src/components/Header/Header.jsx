import React, { useState } from 'react'
import cn from 'classnames';
import Order from '../Order/Order';
import { FaCartPlus } from "react-icons/fa";

import './Header';

const showOrders = (props) => {
  return (
    <>
      {props.orders.map( el => {
      return <Order onDelete={props.onDelete} key={el.id} item={el}/>
      })}
    </>
  )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  )
}

function Header(props) {
  const {orders} = props;
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className='header'>
        <div className='header__wrap'>
          <span className='header__logo'>House Staff</span>
          <ul className="header__nav">
            <li>Про нас</li>
            <li>Контакты</li>
            <li>Кабинет</li>
          </ul>
          <FaCartPlus className={cn('shop-cart-button', {'active': cartOpen})} onClick={ () => setCartOpen(!cartOpen) } />
          {cartOpen && (
            <div className="shop-cart">
              {orders.length > 0 ? showOrders(props) : showNothing()}
            </div>
          )}
        </div>
        <div className='header__presentation'></div> 
    </header>
  )
}

export default Header;