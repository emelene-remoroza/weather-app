import request from 'superagent'

const rootUrl = '/api/v1/weather'

export function getWeather (city) {
  return request.get(`${rootUrl}/${city}`)
    .then(res => {
      return res.body
    })
}

export function getForecast (city) {
  return request.get(`${rootUrl}/${city}/forecast`)
    .then(res => {
      return res.body // sending forecast only
    })
}
