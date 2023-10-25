import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './App.css';
import '../Header/Header.css';
import '../Footer/Footer.css';
import Items from "../Items/Items";

function App() {
  const state = { goods: [
    {
      id: 1,
      title: 'СТУЛ ДЕНВЕР МАГНЕТИКА 30/МК ЧЕРНЫЙ',
      img: 'chair-denver.png',
      description: 'Подходит в большинство современных интерьеров, начиная с классического оформления кухни и гостиной, заканчивая ультрасовременными офисами и салонами красоты в стиле лофт и хай-тек.',
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
      title: 'СТУЛ КРИСТАЛЛ БЕЖЕВЫЙ 002',
      img: 'chair-cristal.jpeg',
      description: 'Станет идеальным вариантом для кухни или гостиной.',
      category: 'chairs',
      price: '3033'
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
    
  ] };

  return (
    <div className="wrapper">
      <Header />
      <Items goods = {state.goods}/>
      <Footer />
    </div>
  );
}

export default App;
