import React from 'react'
import "../styling/Menu.css"
import data from "../files/menuItems.json"
import MenuItem from "./menuitems"


function Menu() {

  const {appetizers, maincourses, desserts, drinks} = data;

  return (
    <div className='menu'>
      <h1>Appetizers</h1>
      <div className="appetizers wrapper">
        {
          appetizers.map((item) =>
          
          <MenuItem 
          title = {item.title}
          image = {item.image}
          description = {item.description}
          price = {item.price}
          />
          
          )
        
        }
      </div>

      <h1>Maincourse</h1>
      <div className="maincourses wrapper">
        {
          maincourses.map((item) =>
          
          <MenuItem 
          title = {item.title}
          image = {item.image}
          description = {item.description}
          price = {item.price}
          />
          
          )
        
        }
      </div>

      <h1>desserts</h1>
      <div className="deserts wrapper">
        {
          desserts.map((item) =>
          
          <MenuItem 
          title = {item.title}
          image = {item.image}
          description = {item.description}
          price = {item.price}
          />
          
          )
        
        }
      </div>

      <h1>drinks</h1>
      <div className="drinks wrapper">
        {
          drinks.map((item) =>
          
          <MenuItem 
          title = {item.title}
          image = {item.image}
          description = {item.description}
          price = {item.price}
          />
          
          )
        
        }
      </div>
    </div>
  )
}

export default Menu
