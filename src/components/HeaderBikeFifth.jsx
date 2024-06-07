import React from 'react'
import bikefifth from '../images/bikefifth.png'
import mark from '../images/markfifth.svg'

const HeaderBikeFifth = () => {
  return (
    <div className='bikefifth'>
        
        <div className='work-text'>
            <h1 className='workfirst'>How it works</h1>
            <div className='work-text-first'>
                <div className='workmark'>
                    <img src={mark} alt=''></img>
                    <h2 className='worksecond'>Register your company</h2>
                </div>
                <h3 className='workthird'>Fill in our registration form with your company details. After <br/> your registration, our leasing partner will do a credit check. You <br/> will hear whether your application has been approved within 24 <br/> hours.</h3>
            </div>
            <div className='work-text-second'>
                <div className='workmark'>
                    <img src={mark} alt=''></img>
                    <h2 className='worksecond'>Determine the requirements</h2>
                </div>
                <h3 className='workthird'>You get acces to the digital platform. Set the requirements for <br/> your employees and share the registration link.</h3>
            </div>
            <div className='work-text-third'>
                <div className='workmark'>
                    <img src={mark} alt=''></img>
                    <h2 className='worksecond'>Ride your bike!</h2>
                </div>
                <h3 className='workthird'>Let's go! Your employees can choose their bikes and they'll be <br/> delivered straight to their homes.</h3>
            </div>
            <div className='work-text-fourth'>
                <div className='workmark'>
                    <img src={mark} alt=''></img>
                    <h2 className='worksecond'>Administration</h2>
                </div>
                <h3 className='workthird'>Everything in one place. The digital platform gives you an easy <br/> overview of all the information for your payroll.</h3>
            </div>
        </div>
        <img src={bikefifth} className='work' alt=''></img>
    </div>
  )
}

export default HeaderBikeFifth