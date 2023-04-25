import React from 'react'
import "../styling/menuitems.css"

function menuitems({image, title, description, price}) {
  return (
    <div className='menuitems'>
        
        <div className="pic ">
            <img src={image} alt="" />
        </div>

        <div className="title-desc">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>

        <div className="price">
            ${price}
        </div>

    </div>
  )
}
export default menuitems