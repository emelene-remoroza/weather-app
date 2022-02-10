import React from 'react'
import { useSelector } from 'react-redux'

export default function Weather () {
  const weather = useSelector(state => state.weather)

  return (
    <>
      <div className='weather'>
        <h1>{weather.location.name}</h1>
        <p>{weather.location.localtime}</p>
        <h2>{weather.current.temp_c} °C</h2>
        <img src={weather.current.condition.icon} />
        <p>{weather.current.condition.text}</p>
        <p>Wind {weather.current.wind_kph} kph</p>
        <p>Wind {weather.current.wind_dir} dir</p>
        <p>{weather.current.humidity}</p>
      </div>
    </>
  )
}
