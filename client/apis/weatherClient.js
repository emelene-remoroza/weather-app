import request from 'superagent'

const rootUrl = '/api/v1'

//Doublecheck names from Krissy's route

export function getWeather () {
  return request.get(rootUrl + '/weather')
    .then(res => {
      return res.body //check later
    })
}
