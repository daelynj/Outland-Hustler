import { buildDate } from './buildDate'

export function buildData(items: string[], itemNames: any) {
  const organizedItems = new Map()

  const organize = (incomingItem: any) => {
    if (organizedItems.has(incomingItem.item_id)) {
      let itemGroup = getCurrentItemGroup(incomingItem)

      if (incomingItem.city === 'Black Market') {
        attachNewJSON(itemGroup, incomingItem)
      } else {
        let existingItemEntry = itemGroup.filter(
          getItemByQuality(incomingItem.quality)
        )[0]

        if (existingItemEntry.profit === null) {
          updatePrice(incomingItem, itemGroup)
        } else if (isItemCheaper(incomingItem, existingItemEntry)) {
          updatePrice(incomingItem, itemGroup)
        }
      }
    } else {
      setNewJSON(incomingItem)
    }
  }

  const updatePrice = (item: any, itemGroup: any) => {
    let dataPoint = itemGroup.filter(getItemByQuality(item.quality))[0]

    dataPoint.city = item.city
    dataPoint.city_sell_price_min = item.sell_price_min
    dataPoint.city_time = buildDate(item.sell_price_min_date)

    if (dataPoint.city_sell_price_min === 0) {
      dataPoint.profit = 0
    } else {
      dataPoint.profit =
        dataPoint.black_market_sell_price_min - dataPoint.city_sell_price_min
    }

    let indexOfItemToChange = itemGroup.filter(
      getIndexOfItemByQuality(dataPoint.quality)
    )[0]

    itemGroup[indexOfItemToChange] = dataPoint

    organizedItems.set(item.item_id, itemGroup)
  }

  const isItemCheaper = (itemToCompare: any, existingItem: any) =>
    itemToCompare.sell_price_min < existingItem.city_sell_price_min ||
    existingItem.city_sell_price_min === null

  const getIndexOfItemByQuality = (quality: any) => (
    element: any,
    index: any
  ) => {
    if (quality === element.quality) {
      return index
    }
  }

  const getItemByQuality = (quality: any) => (element: any) => {
    if (quality === element.quality) {
      return element
    }
  }

  //   const getItemByQuality = (quality: any) => (element: any) =>
  //   quality === element.quality ? element : false

  const getCurrentItemGroup = (item: any) => organizedItems.get(item.item_id)

  const attachNewJSON = (data: any, item: any) => {
    data.push(buildBaseJSON(item))
    organizedItems.set(item.item_id, data)
  }

  const setNewJSON = (item: any) =>
    organizedItems.set(item.item_id, [buildBaseJSON(item)])

  const buildBaseJSON = (item: any) => ({
    item_id: item.item_id,
    friendly_name: buildFriendlyName(item),
    city: item.city,
    quality: item.quality,
    city_sell_price_min: null,
    city_time: null,
    black_market_sell_price_min: item.sell_price_min,
    black_market_time: buildDate(item.sell_price_min_date),
    profit: null,
  })

  const buildFriendlyName = (item: any) => {
    if (item.item_id.includes('@1')) {
      return itemNames.get(item.item_id.replace('@1', '')) + '@1'
    } else {
      return itemNames.get(item.item_id)
    }
  }

  items.forEach(organize)

  return organizedItems
}
