import request from 'superagent'

const rootUrl = '/api/v1/weather'

export function getWeather (city) {
  console.log(city)
  return request.get(`${rootUrl}/${city}`)
    .then(res => {
      return res.body // check later
    })
}
