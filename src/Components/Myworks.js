import React from 'react'
import './Myworks.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../Images/project image 1.png'

export default function Myworks() {
  return (
    <div className='myworks-overall-container text-light'id='Work'>
        <h3 className='text-light container-fluid work-heading'>My Work</h3>
        <div className='work-holders'>
            <div className='work-1'>
              <div className='hover-content container-fluid'>
                <div className='hover-container-content'>
                <h2 style={{textAlign:'center',color:'white'}}>Winky Webbers platfom</h2>
                <p className='work-1-about'>This is a business platfom that markerts their web design and web development sevices.
                It is currently on progress not yet launched but you can view progress in github.</p>
                <div style={{margin:'auto',width:'max-content'}}>
                  <button  type='button'className='btn bg-dark text-light'>View on github</button>
                </div>
                </div>
              </div>
             <img src={image1} className='actual-work1-image'/>
            </div>
            {/* <div className='work-2'>
            <img src={image1} className='actual-work2-image'/>
            </div> */}
        </div>
        </div>
  )
}
