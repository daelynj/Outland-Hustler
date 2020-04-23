import React, { FunctionComponent } from 'react'
import './css/item.css'

interface ItemProps {
  item: any
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  const qualityToText = (quality: number) => {
    switch (quality) {
      case 1:
        return 'Normal'
      case 2:
        return 'Good'
      case 3:
        return 'Outstanding'
      case 4:
        return 'Excellent'
      case 5:
        return 'Masterpiece'
    }
  }

  const determineColor = (profit: number) => (profit > 0 ? 'green' : 'red')

  const determineSign = (profit: number) => (profit > 0 ? '+' + profit : profit)
  return (
    <div className="item">
      <span className="name">{item.friendly_name}</span>
      <span className="quality">{qualityToText(item.quality)}</span>
      <span className="city">{item.city}</span>
      <span className="city_price">{item.city_sell_price_min}</span>
      <span className="city_time">{item.city_time}</span>
      <span className="bm_price">{item.black_market_sell_price_min}</span>
      <span className="bm_time">{item.black_market_time}</span>
      <span className={determineColor(item.profit)}>
        <span className="profit">{determineSign(item.profit)}</span>
      </span>
    </div>
  )
}

export default Item
