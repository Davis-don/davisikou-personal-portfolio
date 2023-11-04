import React from 'react'
import './Getintouchsection.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaEnvelope,FaWhatsapp,FaPhoneAlt,FaLinkedin,FaYoutube,FaTiktok,FaGithubAlt,FaRegCopyright } from 'react-icons/fa'

function Contactdetails(){
    return(
        <div className='contact-details-container'id='getintouch'>
            <ul className='list-unstyled overall-contact-list'>
                <li>
                    <ul className='list-unstyled contact-info'>
                        <li><FaEnvelope className='contact-icon'/></li>
                        <li>davismugoikou@gmail.com</li>
                    </ul>
                </li>
                <li>
                <ul className='list-unstyled contact-info'>
                        <li><FaWhatsapp className='contact-icon'/></li>
                        <li>+254758420860</li>
                    </ul>
                </li>
                <li>
                <ul className='list-unstyled contact-info'>
                        <li><FaPhoneAlt className='contact-icon'/></li>
                        <li>+254758420860</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
function Bottomiconlinks(){
    return(
        <div className='bottom-icons-container'>
            <div> <a href='https://www.linkedin.com/in/davis-ikou-876544267/?originalSubdomain=ke'><FaLinkedin className='text-light'style={{fontSize:'30px'}}/></a></div>
            <div><a href='https://www.youtube.com/@winkywebbers'><FaYoutube className='text-light' style={{fontSize:'30px'}}/></a>></div>
            <div> <a href='https://www.tiktok.com/@Winky.Webbers?_t=8h5a3megmYP&_1'><FaTiktok className='text-light' style={{fontSize:'30px'}}/></a></div>
            <div> <a href='https://github.com/Davis-don'><FaGithubAlt className='text-light' style={{fontSize:'30px'}}/></a></div>
        </div>
    )
}
export default function Getintouchsection() {
  return (
    <div className='getintouch-overrall-container'>
       <h2 className='text-light' style={{textAlign:'center'}}>Get in Touch</h2>
       <Contactdetails/>
       <div className='bottom-links-render'>
        <Bottomiconlinks/>
       </div>
       <p style={{textAlign:'center'}}> <span className='text-light'><FaRegCopyright/></span><span className='copyright-txt'>opyright Davis Mugo Ikou 2023</span></p>
    </div>
  )
}
