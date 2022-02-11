import React from 'react'

import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'

function App () {
  return (
    <>
      <div className='app'>
        <h1>WEATHER!</h1>
        <Search />
        <Weather />
        <Forecast />
      </div>
    </>
  )
}

export default App
