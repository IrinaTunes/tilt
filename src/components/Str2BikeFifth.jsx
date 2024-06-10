import React from 'react'
import bike5str2 from '../images/str2bike5.png'

const Str2BikeFifth = () => {
  return (
    <div className='block5bike'>
        <img src={bike5str2} alt='' className='bike5str2img'></img>
        <div className='block5biketext'>
            <h1>Discover your <br/> local Veloretti <br/> partner store</h1>
            <p>Our partner stores across the Netherlands <br/> are there for you. Whether you're looking to <br/> pick up a newly ordered bike, need a fix, or <br/> want to take a test ride on our Ivy or Ace Two, <br/> your ideal biking experience is closer than <br/> you think.</p>
            <button className='block5bikebut'>Find a partner store near you</button>
        </div>

    </div>
  )
}

export default Str2BikeFifth