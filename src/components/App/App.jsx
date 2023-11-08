import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './App.css';
import '../Header/Header.css';
import '../Footer/Footer.css';
import Items from "../Items/Items";

function App() {
  // eslint-disable-next-line
  const [goods, setGoods] = useState([
    {
      id: 1,
      title: 'СТУЛ ДЕНВЕР МАГНЕТИКА 30/МК ЧЕРНЫЙ',
      img: 'chair-denver.png',
      description: 'Подходит в большинство современных интерьеров.',
      category: 'chairs',
      price: '3999'
    },
    {
      id: 2,
      title: 'СТОЛ ОБЕДЕННЫЙ ПАЙП С ЯЩИКОМ НА ХРОМ НОЖКАХ (86Х75Х57) ДУБ СОНОМА',
      img: 'table-dinner-with-box.png',
      description: 'Компактный стол, с выдвижным ящиком для столовых приборов или кухонных принадлежностей, подойдет даже для небольшой квартиры.',
      category: 'tables',
      price: '5382'
    },
    {
      id: 3,
      title: 'Стул Орлеан Хром Бежевый',
      img: 'chair-orlean.jpeg',
      description: 'Прослужит Вам долгие годы, не требуя особого ухода.',
      category: 'chairs',
      price: '2390'
    },
    {
      id: 4,
      title: 'ДИВАН ПРЯМОЙ СИНАРА БЕЖЕВЫЙ ЛАГУНА 130',
      img: 'sofa-laguna.jpeg',
      description: 'Ткань рогожка имеет натуральный, дышащий состав, материал практичен в использовании и уходе, обладает высокой устойчивостью к истиранию. ',
      category: 'sofa',
      price: '15189'
    },
    {
      id: 5,
      title: 'КРОВАТЬ САЛЬМА 140Х200 СМ БЕЛЫЙ ГЛЯНЕЦ ДУБ АНКОР СВЕТЛЫЙ 148.2',
      img: 'bed-salma.jpeg',
      description: 'Стильный и современный дизайн.Основание - планки 120 мм. Изголовье изготовлено из МДФ с характерным графическим узором.',
      category: 'beds',
      price: '10867'
    },
    
  ]);

  const [orders, setOrders] = useState([]);

  function onAddToOrder(itemProduct) {
    //const newArr = orders.filter( (el) => el.id !== itemProduct.id );
    let isInArray = false;
    orders.forEach( el => {
      if(el.id === itemProduct.id) {
        isInArray = true;
      }
    })

    if(!isInArray) {
      setOrders([...orders, itemProduct]);
    }
  }

  function onDeleteOrder(id) {
    console.log(id);
  }

  useEffect(() => console.log(orders), [orders]);

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={onDeleteOrder} />
      <Items goods = {goods} onAddToOrder={onAddToOrder} />
      <Footer />
    </div>
  );
}

export default App;
