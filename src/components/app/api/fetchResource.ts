export const fetchResource = (url: any, path: any) => {
  url =
    'https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG,T4_BAG@1,T5_BAG,T5_BAG@1,T6_BAG,T6_BAG@1?locations=Black%20Market,Bridgewatch,Caerleon,Fort%20Sterling,%20Martlock,%20Lymhurst&qualities=1,2'
  let response: any = null

  return fetch(url)
    .then((responseObject) => {
      response = responseObject

      if (response.status < 200 || response.status >= 300)
        return response.text()

      return response.json()
    })
    .then((parsedResponse) => {
      if (response.status < 200 || response.status >= 300) throw parsedResponse

      return parsedResponse
    })
}
