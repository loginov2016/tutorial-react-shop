import React from 'react';
import './Item.css';

function Item(props) {
  const {title, description, price, img} = props.item;
  return (
    <div className="item">
      <img src={'./img/' + img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <b>{price}</b>
      <div className='add-to-cart'>+</div>
    </div>
  )
}

export default Item;