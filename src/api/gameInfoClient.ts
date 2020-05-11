import { fetchResource } from './fetchResource'

export class GameInfoClient {
  BASE_URL = 'https://gameinfo.albiononline.com/api/gameinfo/'
  PROXY_URL = 'https://outland-hustler.herokuapp.com/'

  _getItemData = (item: string) => fetchResource(this.buildItemDataURL(item))

  _getItemPicture = (item: string) =>
    fetchResource(this.buildItemPictureURL(item))

  buildItemDataURL = (item: string) =>
    this.PROXY_URL + this.BASE_URL + 'items/' + item + '/data'

  buildItemPictureURL = (item: string) => this.PROXY_URL + this.BASE_URL + item
}
