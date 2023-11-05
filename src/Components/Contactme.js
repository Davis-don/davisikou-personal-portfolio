import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Contactme.css"
import { FaEnvelope,FaWhatsapp,FaPhoneAlt,FaLinkedin,FaYoutube,FaTiktok,FaGithubAlt,FaRegCopyright } from 'react-icons/fa'


function Formcomponent() {
  return (
    <div className='form-component-holder'>
          <form>
            <input placeholder='Enter your name' type="text"className='form-control'/>
            <input placeholder='Enter your Email' type="email" className='form-control'/>
            <textarea style={{height:'100px',backgroundColor:'#5C5656'}} placeholder='your text message...' className='form-control'/>
            <button style={{backgroundColor:'#F52261'}} type='button'className='text-light btn'>Submit</button>
          </form>
    </div>
  )
}
function Contactbigscreendetails(){
  return(
      <div className='contact-bigscreen-details-container'id='getintouch'>
          <ul className='list-unstyled overall-bigscreen-contact-list'>
              <li>
                  <ul className='list-unstyled big-screen-contact-info'>
                      <li><FaEnvelope className='big-screen-contact-icon'/></li>
                      <li className='text-light' style={{fontSize:'large'}}>davismugoikou@gmail.com</li>
                  </ul>
              </li>
              <li>
              <ul className='list-unstyled big-screen-contact-info'>
                      <li><FaWhatsapp className='big-screen-contact-icon'/></li>
                      <li className='text-light'style={{fontSize:'large'}}>+254758420860</li>
                  </ul>
              </li>
              <li>
              <ul className='list-unstyled big-screen-contact-info'>
                      <li><FaPhoneAlt className='big-screen-contact-icon'/></li>
                      <li className='text-light'style={{fontSize:'large'}}>+254758420860</li>
                  </ul>
              </li>
          </ul>
      </div>
  )
}
function Bigscreenbottomiconlinks(){
  return(
      <div className='big-screen-bottom-icons-container'>
          <div> <a href='https://www.linkedin.com/in/davis-ikou-876544267/?originalSubdomain=ke'><FaLinkedin className='text-light'style={{fontSize:'40px'}}/></a></div>
          <div><a href='https://www.youtube.com/@winkywebbers'><FaYoutube className='text-light' style={{fontSize:'40px'}}/></a></div>
          <div> <a href='https://www.tiktok.com/@Winky.Webbers?_t=8h5a3megmYP&_1'><FaTiktok className='text-light' style={{fontSize:'40px'}}/></a></div>
          <div> <a href='https://github.com/Davis-don'><FaGithubAlt className='text-light' style={{fontSize:'40px'}}/></a></div>
      </div>
  )
}
export default function Contactme() {
  return (
    <div className='overall-contact-section container-fluid'id='Contact'>
        <h2 className='text-light small-screen-heading' style={{textAlign:'center'}}>Contact me</h2>
       <div className='form-render'>
        <Formcomponent/>
       </div>
       <div className='overall-contact-sub-containers'>
        <div className='left-side-contact-div'>
        <h2 className='text-light ' style={{textAlign:'center'}}>Contact me</h2>
         <Contactbigscreendetails/>
         <div className='bottom-contact-section-links'>
          <Bigscreenbottomiconlinks/>
         </div>
        </div>
        <div className='right-side-contact-div'>
          <Formcomponent/>
        </div>
       </div>
    </div>
  )
}
