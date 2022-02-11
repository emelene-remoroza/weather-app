import { getWeather, getForecast } from '../apis/weatherClient'
import { getActivities } from '../apis/actClient'

export const SET_WEATHER = 'SET_WEATHER'
export const SET_FORECAST = 'SET_FORECAST'
export const SET_ACT = 'SET_ACT'

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

export function setActivities (typeAct) {
  return {
    type: SET_ACT,
    typeAct
  }
}

export function fetchActivities (code) {
  if (code <= 1009) {
    return dispatch => {
      return getActivities('outdoor')
        .then(activities => {
          dispatch(setActivities(activities))
          return null
        })
    }
  } else if (code > 1010 && code < 1192) {
    return dispatch => {
      return getActivities('indoor')
        .then(activities => {
          dispatch(setActivities(activities))
          return null
        })
    }
  } else if (code >= 1192 && code < 1283) {
    return dispatch => {
      return getActivities('shelter')
        .then(activities => {
          dispatch(setActivities(activities))
          return null
        })
    }
  } else return null
}
