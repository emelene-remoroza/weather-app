import { getActivities } from '../apis/actClient'

export const SET_ACT_PENDING = 'SET_ACT_PENDING'
export const SET_ACT_SUCCESS = 'SET_ACT_SUCCESS'
export const SET_ERROR = 'SET_ERROR'

export function setActivities (activities) {
  return {
    type: SET_ACT_SUCCESS,
    activities
  }
}

export function setActsPending () {
  return {
    type: SET_ACT_PENDING
  }
}

export function setError (errMessage) {
  return {
    type: SET_ERROR,
    errMessage
  }
}

// export function fetchActivities (code) {
//   console.log('dbActions ', code)
//   return (dispatch, getState) => {
//     dispatch(setActsPending())
//     return getActivities('indoor')
//       .then(activities => {
//         dispatch(setActivities(activities))
//         return null
//       })
//       .catch(err => {
//         dispatch(setError(err.message))
//       })
//   }
// }

export function fetchActivities (code) {
  return (dispatch, getState) => {
    dispatch(setActsPending())
    if (code < 1010) {
      return getActivities('outdoor')
        .then(activities => {
          dispatch(setActivities(activities))
          return null
        })
        .catch(err => {
          dispatch(setError(err.message))
        })
    } else if (code > 1010 && code < 1192) {
      return getActivities('indoor')
        .then(activities => {
          dispatch(setActivities(activities))
          return null
        })
        .catch(err => {
          dispatch(setError(err.message))
        })
    } else if (code > 1191 && code < 1283) {
      return getActivities('shelter')
        .then(activities => {
          dispatch(setActivities(activities))
          return null
        })
        .catch(err => {
          dispatch(setError(err.message))
        })
    } return null
  }
}
