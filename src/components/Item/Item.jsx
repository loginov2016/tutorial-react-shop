import React from 'react';
import './Item.css';

function Item(props) {
  const { onAddToOrder } = props
  const {title, description, price, img} = props.item;
  return (
    <div className="item">
      <div className="item-img">
        <img src={'./img/' + img} alt={title} />
      </div>
      <div className="item-wrap">
        <h3>{title}</h3>
        <p>{description}</p>
        <b>{price}</b>
      </div>
      <div className='add-to-cart' onClick={() => onAddToOrder(props.item) }>+</div>
    </div>
  )
}

export default Item;