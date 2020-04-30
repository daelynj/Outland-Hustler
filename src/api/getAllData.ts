import { buildData } from '../components/app/data/buildData'
import { PriceClient } from './priceClient'
import { GameInfoClient } from './gameInfoClient'
import { trackPromise } from 'react-promise-tracker'

export const getAllData = (
  itemNames: any,
  setItemNames: any,
  setOrganizedItems: any,
  items: string[],
  qualities: number[],
  cities: string[]
) => {
  let priceClient = new PriceClient()
  let gameInfoClient = new GameInfoClient()
  let itemData: string[] = []

  const buildNameData = (nameDataResponse: any) => {
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
  }

  if (items.length > 0 && cities.length > 0 && qualities.length > 0) {
    trackPromise(
      priceClient
        ._getPriceData(items, ['Black Market'].concat(cities), qualities)
        .then((itemDataResponse) => {
          itemData = itemDataResponse

          items.forEach(function (item: any) {
            if (itemNames.has(item)) {
              setOrganizedItems(buildData(itemData, itemNames))
              return
            }
            trackPromise(
              gameInfoClient
                ._getItemData(item)
                .then((nameDataResponse) => {
                  buildNameData(nameDataResponse)
                })
                .then(() => {
                  setOrganizedItems(buildData(itemData, itemNames))
                })
                .catch((error) => {
                  console.log(error)
                })
            )
          })
        })
        .catch((error) => {
          console.log(error)
        })
    )
  }
}
