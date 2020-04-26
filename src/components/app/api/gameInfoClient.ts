import { fetchResource } from './fetchResource'

export class GameInfoClient {
  BASE_URL = 'https://gameinfo.albiononline.com/api/gameinfo/'
  PROXY_URL = 'https://cors-anywhere.herokuapp.com/'

  _getItemData = (item: String) => fetchResource(this.buildItemDataURL(item))

  _getItemPicture = (item: String) =>
    fetchResource(this.buildItemPictureURL(item))

  buildItemDataURL = (item: String) =>
    this.PROXY_URL + this.BASE_URL + 'items/' + item + '/data'

  buildItemPictureURL = (item: String) => this.PROXY_URL + this.BASE_URL + item
}
