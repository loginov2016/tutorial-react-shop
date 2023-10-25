import React from 'react'
import Item from '../Item/Item';

function Items(props) {
  return (
    <main>
        {props.goods.map( el => (
            <Item key={el.id} item={el} />
        ) )}
    </main>
  )
}

export default Items