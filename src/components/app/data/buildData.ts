export function buildData(items: any) {
  const organizedItems = new Map()

  const buildBaseJSON = (item: any) => ({
    item_id: item.item_id,
    city: item.city,
    quality: item.quality,
    sell_price_min: null,
    black_market_buy_price_max: item.buy_price_max,
    profit: null,
  })

  const organize = (item: any) => {
    if (organizedItems.has(item.item_id)) {
      let data = organizedItems.get(item.item_id)

      if (
        item.sell_price_min < data.sell_price_min ||
        data.sell_price_min === null
      ) {
        data.city = item.city
        data.sell_price_min = item.sell_price_min
        data.profit = data.black_market_buy_price_max - data.sell_price_min
        organizedItems.set(item.item_id, data)
      }
    } else {
      organizedItems.set(item.item_id, buildBaseJSON(item))
    }
  }
  items.forEach(organize)

  return organizedItems
}
