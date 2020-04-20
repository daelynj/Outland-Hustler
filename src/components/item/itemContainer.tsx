import React, { FunctionComponent } from 'react'
import Item from './item'
import './css/itemContainer.css'

// given the json, generate the items items[0].item_id

interface ItemContainerProps {
  items: any
}

const ItemContainer: FunctionComponent<ItemContainerProps> = ({ items }) => {
  const buildItems = () => {
    let array = Array.from(items.values()).flat()

    array.sort(function (a: any, b: any) {
      if (a.profit > b.profit) {
        return -1
      } else if (a.profit < b.profit) {
        return 1
      } else {
        return 0
      }
    })

    return array.map((item: any, index: any) => (
      <Item item={item} key={index} />
    ))
  }

  return (
    <>
      <div className="header">
        <span className="name">Name</span>
        <span className="quality">Quality</span>
        <span className="city">City</span>
        <span className="city_price">Price</span>
        <span className="city_time">Last updated</span>
        <span className="bm_price">BM price</span>
        <span className="bm_time">Last updated</span>
        <span className="profit">Profit</span>
      </div>
      <div className="items">{buildItems()}</div>
    </>
  )
}

export default ItemContainer
