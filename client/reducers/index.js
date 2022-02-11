import { combineReducers } from 'redux'

import weather from './weather'
import forecast from './forecast'
import activities from './activities'

export default combineReducers({
  weather,
  forecast,
  activities

})
