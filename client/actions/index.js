import { getWeather } from '../apis/weatherClient'

export const SET_WEATHER = 'SET_WEATHER'

export function setWeather (weather) {
  return {
    type: SET_WEATHER,
    weather
  }
}


// fetch weather per City Name
export function fetchCityWeather (city) {
  return dispatch => {
    return getWeather(city)
      .then(weather => {
        dispatch(setWeather(weather))
        return null
      })
  }
}
