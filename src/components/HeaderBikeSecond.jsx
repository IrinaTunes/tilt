import React from 'react'
import bikesecond from '../images/bikesecond.png'

const HeaderBikeSecond = () => {
  return (
    <div className='bikesecond'>
        <img src={bikesecond} className='plans' alt=''></img>
        <div className='plans-text'>
            <h1 className='plansfirst'>Bike plans for employees.</h1>
            <p className='planssecond'>Veloretti Electrics benefit both the environment and the health of <br/> your employees. Oh, and they look good too. Cost-free for the <br/> employer and outside of the WKR.</p>
            <h3 className='plansthird'>Discover more</h3>
        </div>
    </div>
  )
}

export default HeaderBikeSecond