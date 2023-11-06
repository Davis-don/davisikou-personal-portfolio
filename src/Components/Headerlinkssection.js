import React from 'react'
import { useState } from "react";
import './Headerlinksection.css'
import topimage from '../Images/8machine-_-GVAYgLlpeZ8-unsplash.jpg'
import userimg from '../Images/donieimg.jpg'
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
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
         <BrowserRouter>
         <ul className='list-unstyled sidebar-nav-links container-fluid'>
          <li className='active-sidebar'><a className='text-decoration-none text-dark' href='#'>Home</a></li>
          <Link  to ="#About"onClick={()=>clsesidebar(true)}className='text-decoration-none'><li className='text-light link-item'>About me</li></Link>
           <Link to="#Services"onClick={()=>clsesidebar(true)}className='text-decoration-none'><li  className='text-light link-item'>Services</li></Link>
           <Link to="#Work"onClick={()=>clsesidebar(true)}className='text-decoration-none'><li  className='text-light link-item'>My work</li></Link>
          <Link to="#Contact"onClick={()=>clsesidebar(true)}className='text-decoration-none' ><li  className='text-light link-item'>Contact me</li></Link>
          <Link to="#Getintouch"onClick={()=>clsesidebar(true)}className='text-decoration-none'><li  className='text-light link-item'>Get in touch</li></Link>
         </ul>
         </BrowserRouter>
        </div>
      )
    }
    
    function Navigationlinks(){  {/*only viisible on desktop screens*/}
      return(
        <div className='overall-desktop-nav-container'>
         <BrowserRouter>
         <ul className='list-unstyled container-fluid'>
          <li className='home-active'><a className='text-decoration-none text-dark' href='#'>Home</a></li>
          <li><Link to ="#About"className='text-decoration-none'>About me</Link></li>
          <li> <Link to="#Services"className='text-decoration-none'>Services</Link></li>
          <li> <Link to="#Work"className='text-decoration-none'>My work</Link></li>
          <li><Link to="#Contact"className='text-decoration-none' >Contact me</Link></li>
          <li><Link to="#Getintouch"className='text-decoration-none'>Get in touch</Link></li>
         </ul>
         </BrowserRouter>
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