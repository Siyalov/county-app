import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='header'>
      <div className="headerLeft">
        <div className="headerBurger">

        </div>
        <p className="headerCountry">
          <Link to={"/"} className="contentDisableLink">Country</Link>
        </p>
      </div>
      <div className="headerSearch">
        <div className="headerSearchIcon">

        </div>
        <input type="text" className="headerSearchInput" placeholder='Search by country name' />
      </div>
    </div>
    
  )
}
