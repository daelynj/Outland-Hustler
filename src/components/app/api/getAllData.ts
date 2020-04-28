import { buildData } from '../data/buildData'
import { PriceClient } from './priceClient'
import { GameInfoClient } from './gameInfoClient'

export const getAllData = (
  itemNames: any,
  setItemNames: any,
  setOrganizedItems: any,
  setLoading: any,
  items: string[],
  qualities: number[],
  cities: string[]
) => {
  let priceClient = new PriceClient()
  let gameInfoClient = new GameInfoClient()
  let itemData: string[] = []

  if (items.length > 0 && cities.length > 0 && qualities.length > 0) {
    setLoading(true)

    priceClient
      ._getPriceData(items, ['Black Market'].concat(cities), qualities)
      .then((itemDataResponse) => {
        itemData = itemDataResponse

        items.forEach(function (item: any) {
          if (itemNames.has(item)) {
            setOrganizedItems(buildData(itemData, itemNames))
            return
          }

          gameInfoClient
            ._getItemData(item)
            .then((nameDataResponse) => {
              setItemNames(
                itemNames.set(
                  nameDataResponse.uniqueName,
                  nameDataResponse.localizedNames['EN-US']
                )
              )

              setItemNames(
                itemNames.set(
                  nameDataResponse.uniqueName + '@1',
                  nameDataResponse.localizedNames['EN-US'] + '@1'
                )
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
      .then(() => {
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
