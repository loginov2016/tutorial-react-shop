import React from 'react'
import { FaTrash } from 'react-icons/fa';

import './Order.css';

function Order(props) {
  const { title, price, img, onDelete, id} = props.item;
  return (
    <div className='order'>
        <img src={'./img/' + img} alt={title} className='order-img'/>
        <h4>{title}</h4>
        <p>{price}</p>
        <FaTrash className='delete-icons' onClick={() => onDelete(id)} />
    </div>
  )
}

export default Order;