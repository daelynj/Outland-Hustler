import React, { FunctionComponent } from 'react'
import './css/item.css'

interface ItemProps {
  item: any
}

const Item: FunctionComponent<ItemProps> = ({ item }) => (
  <div className="item">
    <span className="name">{item.item_id}</span>
    <span className="city">
      {item.city + ' price: ' + item.city_sell_price_min}
    </span>
    <span>date placeholder</span>
    <span className="bm_price">
      {'Black Market price: ' + item.black_market_sell_price_min}
    </span>
    <span className="bm_date">date placeholder</span>
    <span className="profit">{'profit: ' + item.profit}</span>
  </div>
)

export default Item
