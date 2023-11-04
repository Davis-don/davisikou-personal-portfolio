import React from 'react'
import './Myworks.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from '../Images/daniel-korpai-bOKIptPzdPk-unsplash.jpg'

export default function Myworks() {
  return (
    <div className='myworks-overall-container text-light'id='Work'>
        <h3 className='text-light container-fluid'>My Work</h3>
        <div className='work-holders'>
            <div className='work-1'>
             <img src={image1} className='actual-work1-image'/>
            </div>
            <div className='work-2'>
            <img src={image1} className='actual-work2-image'/>
            </div>
        </div>
        </div>
  )
}
