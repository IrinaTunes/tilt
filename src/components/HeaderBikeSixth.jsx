import React from 'react'
import bikesixth1 from '../images/bikesixth1.png'
import colorone from '../images/color11.svg'
import colortwo from '../images/color12.svg'
import colorthree from '../images/color 13.svg'
import colorfour1 from '../images/color 14.svg'
import colorfour2 from '../images/color 24.svg'
import bikesixth2 from '../images/bikesixth2.png'

const HeaderBikeSixth = () => {
  return (
    <div className='bikesixth'>
        <div className='blokone'>
            <div className='blokone-name'>
                <div className='blokone-name-fs'>
                    <h1 className='blokone-name-first'>Electric Ace</h1>
                    <p className='blokone-name-second'>Two</p>
                </div>
                <h2 className='blokone-name-third'>€69,07 NET/MONTH</h2>
            </div>
            <div className='blokone-bike'>
                <button className='butone'>&lt;</button>
                <img src={bikesixth1} alt=''></img>
                <button className='butsec'>&gt;</button>
            </div>
            <div className='blokone-color'>
                <img src={colorone} alt=''></img>
                <img src={colortwo} alt=''></img>
                <img src={colorthree} alt=''></img>
                <img src={colorfour1} alt=''></img>
            </div>
        </div>
        <div className='bloktwo'>
            <div className='bloktwo-name'>
                <h1 className='bloktwo-name-first'>Electric Ivy</h1>
                <p className='bloktwo-name-second'>Two</p>
                <h2 className='bloktwo-name-third'>€69,07 NET/MONTH</h2>
            </div>
            <div className='bloktwo-bike'>
                <button className='butone'>&lt;</button>
                <img src={bikesixth2} alt=''></img>
                <button className='butsec'>&gt;</button>
            </div>
            <div className='bloktwo-color'>
                <img src={colorone} alt=''></img>
                <img src={colortwo} alt=''></img>
                <img src={colorthree} alt=''></img>
                <img src={colorfour2} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default HeaderBikeSixth