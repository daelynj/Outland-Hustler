import { fetchResource } from './fetchResource'

export class PriceClient {
  BASE_URL = 'https://www.albion-online-data.com/api/v2/stats/prices/'

  _getPriceData = (items: String[], cities: String[], qualities: number[]) =>
    fetchResource(this.buildURL(items, cities, qualities))

  buildURL = (items: String[], cities: String[], qualities: number[]) =>
    this.BASE_URL +
    items.toString() +
    '?locations=' +
    cities.toString() +
    '&qualities=' +
    qualities.toString()
}
