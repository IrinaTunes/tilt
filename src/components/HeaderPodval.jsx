import React from 'react'
import ontop from '../images/ontop.svg'
import facebook from '../images/facebook1.svg'
import instagram from '../images/instagram2.svg'
import youtube from '../images/youtube3.svg'
import insoc from '../images/in4.svg'
import tiktok from '../images/tiktok5.svg'

const HeaderPodval = () => {
  return (
    <div className='podval'>
        <div className='podvalfirst'>
            <div className='podval-explorer'>
                <h2 className='podvalfirst-zag'>Explorer</h2>
                <button className='podvalfirst-but'>Electric bikes</button>
                <button className='podvalfirst-but'>City bikes</button>
                <button className='podvalfirst-but'>Kids' bikes</button>
                <button className='podvalfirst-but'>Accessories</button>
                <button className='podvalfirst-but'>Outlet</button>
                <button className='podvalfirst-but'>Business</button>
                <button className='podvalfirst-but'>Insurance Electric</button>
                <button className='podvalfirst-but'>Size guide</button>
            </div>
            <div className='podval-about'>
                <h2 className='podvalfirst-zag'>About</h2>
                <button className='podvalfirst-but'>About us</button>
                <button className='podvalfirst-but'>Journal</button>
                <button className='podvalfirst-but'>Reviews</button>
                <button className='podvalfirst-but'>Press</button>
                <button className='podvalfirst-but'>Jobs</button>
            </div>
            <div className='podval-help'>
                <h2 className='podvalfirst-zag'>Help</h2>
                <button className='podvalfirst-but'>Contact</button>
                <button className='podvalfirst-but'>FAQ</button>
                <button className='podvalfirst-but'>Delivery</button>
                <button className='podvalfirst-but'>Assembly & manuals</button>
                <button className='podvalfirst-but'>Payment options</button>
                <button className='podvalfirst-but'>Privacy policy</button>
                <button className='podvalfirst-but'>Terms & conditions</button>
            </div>

        </div>
        <div className='podvalsecond'>
            <div className='podvalsecond-text1'>
                <div className='podvalsecond-text'>
                    <h2 className='podvalfirst-zag1'>Join the ride.</h2>
                    <p className='podvalsecond-nezag'>Sign up for our newsletter.</p>
                </div>
                <img src={ontop} className='ontopbut' alt=''></img>
            </div>
            <div className='podvalsecond-input'>
                <div className='podvalsecond-input1'>
                    <p><input className='inputpodval' placeholder="Enter your email address here"/></p>
                    <button className='inputpodval-but'>Subscribe</button>
                </div>
                <div className='inputpodval-checkbox'>
                    <p><input className='inputpodval-check' type='checkbox'/></p>
                    <p className='checktext'>By signing up, I agree to the privacy policy of Veloretti.</p>
                </div>
            </div>
            <div className='podvalsecond-soc'>
                <img src={facebook} alt=''></img>
                <img src={instagram} alt=''></img>
                <img src={youtube} alt=''></img>
                <img src={insoc} alt=''></img>
                <img src={tiktok} alt=''></img>
            </div>
            
        </div>

    </div>
  )
}

export default HeaderPodval