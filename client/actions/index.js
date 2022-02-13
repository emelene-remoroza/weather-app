import { getWeather, getForecast } from '../apis/weatherClient'

export const SET_WEATHER = 'SET_WEATHER'
export const SET_FORECAST = 'SET_FORECAST'

export function setWeather (weather) {
  return {
    type: SET_WEATHER,
    weather
  }
}

export function setForecast (forecast) {
  return {
    type: SET_FORECAST,
    forecast
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

export function fetchCityForecast (city) {
  return dispatch => {
    return getForecast(city)
      .then(forecast => {
        dispatch(setForecast(forecast))
        return null
      })
  }
}
