import { buildDate } from './buildDate'

export function buildData(items: any, itemNames: any) {
  const organizedItems = new Map()

  const organize = (item: any) => {
    if (organizedItems.has(item.item_id)) {
      let data = getCurrentItem(item)

      if (item.city === 'Black Market') {
        attachNewJSON(data, item)
      } else if (isItemCheaper(item, data)) updatePrice(item, data)
    } else {
      setNewJSON(item)
    }
  }

  const updatePrice = (item: any, data: any) => {
    let dataPoint = data[item.quality - 1]

    dataPoint.city = item.city
    dataPoint.city_sell_price_min = item.sell_price_min
    dataPoint.city_time = buildDate(item.sell_price_min_date)

    if (dataPoint.city_sell_price_min === 0) {
      dataPoint.profit = 0
    } else {
      dataPoint.profit =
        dataPoint.black_market_sell_price_min - dataPoint.city_sell_price_min
    }

    data[item.quality - 1] = dataPoint

    organizedItems.set(item.item_id, data)
  }

  const isItemCheaper = (item: any, data: any) => {
    if (item.quality === data[item.quality - 1].quality) {
      let currentItem = data[item.quality - 1]

      return (
        item.sell_price_min < currentItem.city_sell_price_min ||
        currentItem.city_sell_price_min === null
      )
    }
    return true
  }

  const getCurrentItem = (item: any) => organizedItems.get(item.item_id)

  const attachNewJSON = (data: any, item: any) => {
    data.push(buildBaseJSON(item))
    organizedItems.set(item.item_id, data)
  }

  const setNewJSON = (item: any) =>
    organizedItems.set(item.item_id, [buildBaseJSON(item)])

  const buildBaseJSON = (item: any) => ({
    item_id: item.item_id,
    friendly_name: itemNames.get(item.item_id),
    city: item.city,
    quality: item.quality,
    city_sell_price_min: null,
    city_time: null,
    black_market_sell_price_min: item.sell_price_min,
    black_market_time: buildDate(item.sell_price_min_date),
    profit: null,
  })

  items.forEach(organize)

  return organizedItems
}
