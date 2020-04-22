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
    let itemsArray = ['T4_BAG', 'T5_BAG']
    let citiesArray = ['Black Market', 'Bridgewatch']
    let qualitiesArray = [1, 2]

    priceClient
      ._getPriceData(itemsArray, citiesArray, qualitiesArray)
      .then((userData) => {
        setItems(buildData(userData))
      })
      .catch((error) => {
        console.log(error)
      })

    //userData.localizedNames['EN-US']
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
