import { combineReducers } from 'redux'

import weather from './weather'
import forecast from './forecast'
import activities from './activities'
import loading from './loading'
import errMessage from './errMessage'

export default combineReducers({
  weather,
  forecast,
  activities,
  loading,
  errMessage
})
