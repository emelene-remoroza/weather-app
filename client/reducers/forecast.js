import { SET_FORECAST } from '../actions'

const initialState = {
  location: { name: '' },
  current: { condition: { text: '' } },
  forecast: {
    forecastday: [
      { date: '', day: { avgtemp_c: 0, condition: { text: '' } } },
      { date: '', day: { avgtemp_c: 0, condition: { text: '' } } },
      { date: '', day: { avgtemp_c: 0, condition: { text: '' } } }
    ]
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST:
      return action.forecast
    default:
      return state
  }
}

export default reducer
