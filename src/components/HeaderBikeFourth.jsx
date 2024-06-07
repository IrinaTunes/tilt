import React from 'react'
import bikefourth from '../images/bikefourth.png'

const HeaderBikeFourth = () => {
  return (
    <div className='bikefourth'>
        <img src={bikefourth} className='free' alt=''></img>
        <div className='free-text'>
            <h1 className='freefirst'>Free of charge for employers</h1>
            <p className='freesecond'>The bike plan is totally independent of the WKR and is free for you as <br/> an employer. The employee pays the lease costs and you, as the <br/> employer, decide whether you want to contribute to the costs.</p>
            <h3 className='freethird'>Cost Example</h3>
        </div>
    </div>
  )
}

export default HeaderBikeFourth