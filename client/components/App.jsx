import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search } from 'superagent'

import { fetchCityWeather } from '../actions'

import Search from './Search'
import Weather from './Weather'

function App () {
  return (
    <>
      <div className='app'>
        <h1>WEATHER!</h1>
        <Search />
        <Weather />
      </div>
    </>
  )
}

export default App
