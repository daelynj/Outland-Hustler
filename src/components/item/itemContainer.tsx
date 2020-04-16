import React, { FunctionComponent } from 'react'
import Item from './item'
import './css/itemContainer.css'

// given the json, generate the items items[0].item_id

interface ItemContainerProps {
  items: any[]
}

const ItemContainer: FunctionComponent<ItemContainerProps> = ({ items }) => {
  const buildItems = () =>
    items.map((item, index) => <Item item={item} key={index} />)

  return <div className="items">{buildItems()}</div>
}

export default ItemContainer
