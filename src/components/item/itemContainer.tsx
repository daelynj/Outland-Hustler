import React from 'react'
import Item from './item'
import './css/itemContainer.css'

const ItemContainer: React.FC = () => (
  <div className="items">
    <Item />
    <Item />
    <Item />
  </div>
)

export default ItemContainer
