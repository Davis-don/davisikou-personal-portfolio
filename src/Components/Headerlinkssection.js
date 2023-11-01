import React from 'react'
import './Headerlinksection.css'
import topimage from '../Images/8machine-_-GVAYgLlpeZ8-unsplash.jpg'
import { FaBars } from "react-icons/fa";


function Headerimg() {
  return (
    <div className='image-holder-container'>
   <img className='actual-image'src={topimage}/>
    </div>
  )
}
function Menuicon(){
    return(
        <div className='menu-icon-holder'>
            <FaBars className='actual-bars-icon'/>
        </div>
    )
}
function Headerintrotext(){
    return(
        <div className='header-text-holder'>
            <p className='skill-text'>Frontend web developer</p>
            <p className='introduction-text'>Hi,I'm <span className='user-name'>Davis</span><br/> Ikou from Kenya</p>
        </div>
        )
    }
export default function Headerlinkssection() {
  return (
    <div className='header-links-overall-container'>
    <div className='header-link-render'>
    <Headerimg/>
    </div>
    <div className='user-name-text-render'>
       <p><span className='name-first-letter'>D</span>avis.</p>
     </div>
     <div className='menu-icon-render'>
        <Menuicon/>
     </div>
     <div className='Header-intro-text-render'>
        <Headerintrotext/>
     </div>
        </div>
  )
}
