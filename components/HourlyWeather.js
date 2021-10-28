import React from 'react'

export default function HourlyWeather({ hourlyWeather, timezone }) {
  return (
    <div className="hourly" >
      <div className="hourly__inner" >
        {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) => (
          <div className="hourly__box-wrapper">
            {/*  */}
          </div>
        ))}
      </div>
    </div>
  )
}
