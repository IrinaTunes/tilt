import React from 'react'
import bikethird from '../images/bikethird.png'

const HeaderBikeThird = () => {
  return (
    <div className='bikethird'>
        <img src={bikethird} className='serv' alt=''></img>
        <div className='serv-text'>
            <h1 className='servfirst'>Service, <br/> maintenance and <br/> insurance</h1>
            <p className='servsecond'>The lease includes an all-in service package. <br/> Throughout the entire 36 months, you are <br/> fully insured against damage, theft and <br/> maintenance. In addition, you always have <br/> access to roadside assistance.</p>
        </div>
    </div>
  )
}

export default HeaderBikeThird