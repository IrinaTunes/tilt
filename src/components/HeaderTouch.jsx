import React from 'react'

const HeaderTouch = () => {
  return (
    <div className='touch'>
        <h1 className='touch-name'>Get in touch</h1>
        <p><input className='inputone' placeholder="First name"/></p>
        <p><input className='inputone' placeholder="Last name"/></p>
        <p><input className='inputone' placeholder="Email address"/></p>
        <p><input className='inputone' placeholder="Phone number"/></p>
        <p><input className='inputone' placeholder="Company name"/></p>
        <p className='inputtwo'><select><option>Company size</option></select></p>
        <p><input className='inputone' placeholder="Number of bikes"/></p>
        <p><input className='inputone' placeholder="How can we help"/></p>
        <button className='touchbut'>Send the request</button>
    </div>
  )
}

export default HeaderTouch