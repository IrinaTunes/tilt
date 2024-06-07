import React from 'react'

const HeaderQuestion = () => {
  return (
    <div className='questblok'>
        <h1 className='quest-name'>Any questions?</h1>
        
        <div className='questfirst'>
            <div className='questfirstone'>
                <h2 className='quest-nazv1'>What about the paperwork?</h2>
                <h2 className='quest-sp'>-</h2>
            </div>
            <p className='quest-pod'>The bicycle plan is set up so that there will be no administrative work on your part as the employer. You can use a free online platform <br/> that has been created by our leasing partner. This provides you with a simple overview of your business and your employees, allowing <br/> ou to arrange everything. It also simplifies all the paperwork. Everything is organised with just a few clicks.</p>
        </div>
        <div className='questsecond'>
            <h2 className='quest-nazv'>How does it work with an employee who retires early?</h2>
            <h2 className='quest-sp'>+</h2>
        </div>
        <div className='questthird'>
            <h2 className='quest-nazv'>What does a Veloretti Bike Plan cost for an employer?</h2>
            <h2 className='quest-sp'>+</h2>
        </div>
        <div className='questfourth'>
            <h2 className='quest-nazv'>How is the insurance & maintenance arranged when leasing a Veloretti bike?</h2>
            <h2 className='quest-sp'>+</h2>
        </div>
        <div className='questfifth'>
            <h2 className='quest-nazv'>What are the legal requirements for the Veloretti bicycle plan?</h2>
            <h2 className='quest-sp'>+</h2>
        </div>
    </div>
  )
}

export default HeaderQuestion