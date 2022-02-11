import { SET_ACT } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACT:
      return action.typeAct
    default:
      return state
  }
}

export default reducer
