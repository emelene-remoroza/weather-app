import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCityWeather } from '../actions'

function App () {
  const weather = useSelector(state => state.weather)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCityWeather())
  }, [])

  return (
    <>
      <div className='app'>
        <h1>WEATHER!</h1>
        <ul>
          {fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
