import React from 'react'
import bikefirst from '../images/bikefirst.png'

const HeaderBikeFirst = () => {
  return (
    <div className='bikefirst'>
        <img src={bikefirst} className='bike' alt=''></img>
        <div className='banner-text'>
            <h3>VELORETTI BUSINESS</h3>
            <h1>Bike lease plan for employees.</h1>
        </div>
    </div>
  )
}

export default HeaderBikeFirst