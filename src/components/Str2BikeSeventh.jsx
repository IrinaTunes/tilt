import React from 'react'
import verge from '../images/str2bike7first.svg'
import bright from '../images/str2bike7sec.svg'
import vogue from '../images/str2bike7third.svg'

const Str2BikeSeventh = () => {
  return (
    <div className='block7bike'>
        <h1>They talked about us</h1>
        <div className='block7bike-sec'>
            <div className='verge'>
            <h3>"One of the best e-bikes available at <br/> any price and far and away my <br/> favourite ride of the year."</h3>
                <img src={verge} alt='' className='block7bikeimg'></img>
            </div>
            <div className='bright'>
                <h3>“This second-generation Ace is a <br/> superhero amongst urban e- <br/> bikes… 9/10.”</h3>
                <img src={bright} alt='' className='block7bikeimg'></img>
            </div>
            <div className='vogue'>
                <h3>"The timeless, chic design and <br/> stunning craftsmanship make <br/> them the perfect way to get <br/> around the city."</h3>
                <img src={vogue} alt='' className='block7bikeimg'></img>
            </div>
        </div>

    </div>
  )
}

export default Str2BikeSeventh