import React, { useEffect, useState } from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import RefreshButton from '../refresh/refreshButton'
import { PriceClient } from './api/priceClient'
import { buildData } from './data/buildData'
import { GameInfoClient } from './api/gameInfoClient'

const App: React.FC = () => {
  const [items, setItems] = useState(new Map())
  const [priceClient] = useState(new PriceClient())
  const [gameInfoClient] = useState(new GameInfoClient())

  const refreshPage = () => {
    window.location.reload(false)
  }

  useEffect(() => {
    let itemsArray = [
      'T4_ARMOR_PLATE_SET1',
      'T5_ARMOR_PLATE_SET1',
      'T6_ARMOR_PLATE_SET1',
      'T7_ARMOR_PLATE_SET1',
    ]
    let citiesArray = [
      'Black Market',
      'Bridgewatch',
      'Fort Sterling',
      'Caerleon',
      'Martlock',
    ]
    let qualitiesArray = [1, 2]
    let itemNames = new Map()
    let itemData: String[] = []

    priceClient
      ._getPriceData(itemsArray, citiesArray, qualitiesArray)
      .then((itemDataResponse) => {
        itemData = itemDataResponse

        itemsArray.forEach(function (item) {
          gameInfoClient
            ._getItemData(item)
            .then((nameDataResponse) => {
              itemNames.set(
                nameDataResponse.uniqueName,
                nameDataResponse.localizedNames['EN-US']
              )

              if (itemsArray[itemsArray.length - 1] === item)
                setItems(buildData(itemData, itemNames))
            })
            .catch((error) => {
              console.log(error)
            })
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }, [priceClient, gameInfoClient])

  return (
    <>
      <div className="refresh">
        <RefreshButton handleEvent={refreshPage} />
      </div>
      <div className="item_container">
        <ItemContainer items={items} />
      </div>
    </>
  )
}

export default App
