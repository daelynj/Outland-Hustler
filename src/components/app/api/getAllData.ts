import { buildData } from '../data/buildData'
import { PriceClient } from './priceClient'
import { GameInfoClient } from './gameInfoClient'

export const getAllData = (
  setOrganizedItems: any,
  setLoading: any,
  items: string[],
  qualities: number[],
  cities: string[]
) => {
  let priceClient = new PriceClient()
  let gameInfoClient = new GameInfoClient()
  let itemNames = new Map()
  let itemData: string[] = []

  if (items.length > 0 && cities.length > 0 && qualities.length > 0) {
    setLoading(true)

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
              setLoading(false)
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
}
