import React, { useEffect, useState } from 'react'
import './css/app.css'
import ItemContainer from '../item/itemContainer'
import RefreshButton from '../refresh/refreshButton'
import ChoiceContainer from '../choice/choiceContainer'
import { PriceClient } from './api/priceClient'
import { buildData } from './data/buildData'
import { GameInfoClient } from './api/gameInfoClient'

const App: React.FC = () => {
  const [priceClient] = useState(new PriceClient())
  const [gameInfoClient] = useState(new GameInfoClient())
  const [organizedItems, setOrganizedItems] = useState(new Map())
  const [items, setItems] = useState([])
  const [cities, setCities] = useState([])
  const [qualities, setQualities] = useState([])

  const refreshPage = () => {
    window.location.reload(false)
  }

  useEffect(() => {
    let itemNames = new Map()
    let itemData: String[] = []
    console.log(items)
    console.log(cities)
    console.log(qualities)
    if (items.length > 0 && cities.length > 0 && qualities.length > 0) {
      priceClient
        ._getPriceData(items, ['Black Market'].concat(cities), qualities)
        .then((itemDataResponse) => {
          itemData = itemDataResponse

          items.forEach(function (item: any) {
            gameInfoClient
              ._getItemData(item)
              .then((nameDataResponse) => {
                itemNames.set(
                  nameDataResponse.uniqueName,
                  nameDataResponse.localizedNames['EN-US']
                )
              })
              .then(() => {
                setOrganizedItems(buildData(itemData, itemNames))
              })
              .catch((error) => {
                console.log(error)
              })
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [priceClient, gameInfoClient, items, qualities, cities])

  const completeEntriesExist = () =>
    items.length > 0 && cities.length > 0 && qualities.length > 0

  return (
    <>
      <div className="refresh">
        <RefreshButton handleEvent={refreshPage} />
      </div>
      <div className="choice_container">
        <ChoiceContainer
          setItems={setItems}
          setQualities={setQualities}
          setCities={setCities}
        />
      </div>
      <div className="item_container">
        {completeEntriesExist() && <ItemContainer items={organizedItems} />}
      </div>
    </>
  )
}

export default App
