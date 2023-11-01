import React from 'react'
import './Services.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { IconName } from "react-icons/fa";

export default function Services() {
  return (
    <div className='overall-services-container'>
        <h3 className='text-light container-fluid'>My Services</h3>
        <div className='service-holders'>
            <div className='service-1'>
              <div className='webdev-icon'>
              </div>
              <div className='webdev-text'>
              <h2 style={{textAlign:'center'}} className='text-light'>Web Development</h2>
              <p className='text-light container-fluid'>I develop personal portfolio websites, business portfolios and collaborate with other developers
              for large web based projects.</p>
              </div>
              
            </div>
            <div className='service-2'>
            <div className='ui-ux-icon'></div>
            <div className='uiux-text'>
              <h2 style={{textAlign:'center'}} className='text-light'>UI/UX Design</h2>
              <p className='text-light container-fluid'>I Design interactive and user friendly user interfaces which convey the intended message to your visitors</p>
              </div>
            </div>
        </div>
        </div>
  )
}
