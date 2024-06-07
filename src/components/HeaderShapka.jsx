import logo from '../images/Vector.svg'
import acc from '../images/acc.svg'
import cart from '../images/cart.svg'
import lang from '../images/lang.svg'
import React from 'react'

const HeaderShapka = () => {
  return (
    <div className='header' >
         <div className='header-name'>
        <img src={logo} alt='' srcSet=''></img>
        <select><option>ELECTRIC</option></select>
        <select><option>CITY</option></select>
        <select><option>KIDS</option></select>
        <option>ACCESSORIES</option>
        <option>STORES</option>
        <select><option>LEASING</option></select>
      </div>
      <div className='header-right'>
        <select><option>EN</option></select>
        <img src={lang} alt=''></img>
        <img src={cart} alt=''></img>
        <img src={acc} alt=''></img>
      </div>
    

    </div>
  )
}

export default HeaderShapka