export function buildData(items: any) {
  const organizedItems = new Map()

  const organize = (item: any) => {
    if (organizedItems.has(item.item_id)) {
      let data = getCurrentItem(item)
      if (isItemCheaper(item, data)) updatePrice(item, data)
    } else {
      // This implies that we are always making our API calls with the
      // Black Market first in the list - not ideal
      setNewJSON(item)
    }
  }

  const setNewJSON = (item: any) =>
    organizedItems.set(item.item_id, buildBaseJSON(item))

  const buildBaseJSON = (item: any) => ({
    item_id: item.item_id,
    city: item.city,
    quality: item.quality,
    sell_price_min: null,
    black_market_sell_price_min: item.sell_price_min,
    profit: null,
  })

  const updatePrice = (item: any, data: any) => {
    data.city = item.city
    data.sell_price_min = item.sell_price_min
    data.profit = data.black_market_sell_price_min - data.sell_price_min
    organizedItems.set(item.item_id, data)
  }

  const isItemCheaper = (item: any, data: any) =>
    item.sell_price_min < data.sell_price_min || data.sell_price_min === null

  const getCurrentItem = (item: any) => organizedItems.get(item.item_id)

  items.forEach(organize)

  return organizedItems
}
