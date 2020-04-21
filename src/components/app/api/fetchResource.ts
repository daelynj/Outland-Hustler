export function fetchResource(url: any) {
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
