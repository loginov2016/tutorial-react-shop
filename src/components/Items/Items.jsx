import React from 'react'
import Item from '../Item/Item';

import './Items.css';

function Items(props) {
  const {goods, onAddToOrder} = props;

  return (
    <main>
        {goods.map( el => (
            <Item key={el.id} item={el} onAddToOrder={onAddToOrder}/>
        ) )}
    </main>
  )
}

export default Items