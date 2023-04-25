import React from 'react'
import "../styling/hours.css"

function hours({day, open, close}) {


  return (
    <div className="hours">
        <div className="days h-style">
        <h2>{day}</h2>
        </div>
        <div className="opening h-style">
        <h2>{open}</h2>
        </div>
        <div className='dash h-style'>
          <h1>-</h1>
        </div>
        <div className="closing h-style">
        <h2>{close}</h2>
        </div>
    </div>
  )
}

export default hours
