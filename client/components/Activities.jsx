import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchActivities } from '../actions'

export default function Activities (props) {
  const dispatch = useDispatch()
  const activities = useSelector(state => state.typeAct)
  console.log(activities)

  useEffect(() => {
    dispatch(fetchActivities(props.code))
  }, [])

  return (
    <p>Activity</p>
  )
}
