import React from 'react'
import { useState } from "react";
import './Headerlinksection.css'
import topimage from '../Images/8machine-_-GVAYgLlpeZ8-unsplash.jpg'
import userimg from '../Images/donieimg.jpg'
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import Aboutsection from '../Aboutsection';
import Services from './Services';
import Myworks from './Myworks';
import Contactme from './Contactme';
import Getintouchsection from './Getintouchsection';


function Headerimg() {
  return (
    <div className='image-holder-container'>
   <img className='actual-image'src={topimage}/>
    </div>
  )
}
{
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
    function Sidebar() {
      const [Isided,Setsided]=useState(true);
      const clsesidebar=(stat)=>{
        Setsided(Isided=>!Isided)
      }
      return (
        Isided && <div className='overall-sidebar-container'>
          <div className='close-window-icon'onClick={()=>clsesidebar(true)}>
            <FaRegWindowClose className='text-light actual-icon'/>
          </div>
         <div className='my-user-img'>
          <img className='actual-user-img rounded-circle'src={userimg}/>
         </div>
         <p className='text-light'style={{fontSize:'x-large',textAlign:'center',marginTop:'20px;'}}>Menu</p>
         <ul className='list-unstyled sidebar-nav-links container-fluid'>
          <li className='active-sidebar'><a className='text-decoration-none text-dark' href='#'>Home</a></li>
          <li onClick={()=>clsesidebar(true)}><a className='text-decoration-none'href='Aboutsection#About'>About me</a></li>
          <li onClick={()=>clsesidebar(true)}><a className='text-decoration-none'href='Services#Services'>Services</a></li>
          <li onClick={()=>clsesidebar(true)}><a className='text-decoration-none'href='Myworks#Work'>My works</a></li>
          <li onClick={()=>clsesidebar(true)}><a className='text-decoration-none'href='Contactme#Contact'>Contact me</a></li>
          <li onClick={()=>clsesidebar(true)}><a className='text-decoration-none'href='Getintouchsection#getintouch'>Get in touch</a></li>
         </ul>
        </div>
      )
    }
    
    function Navigationlinks(){  {/*only viisible on desktop screens*/}
      return(
        <div className='overall-desktop-nav-container'>
         <ul className='list-unstyled  container-fluid'>
          <li className='home-active'><a className='text-decoration-none text-dark' href='#'>Home</a></li>
          <li ><a className='text-decoration-none'href='Aboutsection#About'>About me</a></li>
          <li ><a className='text-decoration-none'href='Services#Services'>Services</a></li>
          <li ><a className='text-decoration-none'href='Myworks#Work'>My works</a></li>
          <li ><a className='text-decoration-none'href='Contactme#Contact'>Contact me</a></li>
          <li ><a className='text-decoration-none'href='Getintouchsection#getintouch'>Get in touch</a></li>
         </ul>
        </div>
      )
    }
export default function Headerlinkssection() {
 const [Ismount,Setmount]=useState(false)
 function Expansedebar(){
  Setmount(Ismount=>!Ismount);
 }
  return (
    <div className='header-links-overall-container'>
    <div className='header-link-render'>
    <Headerimg/>
    </div>
    <div className='user-name-text-render'>
       <p><span className='name-first-letter'>D</span>avis.</p>
     </div>
     <div className='navigation-desktop-screen'>   {/* navigation for desktop screens */}
     <Navigationlinks/>
    </div>
     <div className='menu-icon-render'onClick={Expansedebar}>
     <div className='opacity-comtroller'></div>
        <Menuicon/>
     </div>
     <div className='Header-intro-text-render'>
        <Headerintrotext/>
     </div>
     <div className='sidebar-render'style={{
          width: Ismount ? '80vw' : '0px',
          transition: Ismount ? '2s' : '0s'}}>
      {
         Ismount && <Sidebar className='actual-side-bar'/>
      }
        </div>
        </div>
        
  )
}

