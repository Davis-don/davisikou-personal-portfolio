import React, { useState } from 'react'
import './Aboutsection.css'
import donimage from './Images/donieimg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaUserGraduate} from "react-icons/fa"


function Userimage() {
  return (
    <div className='user-image-container'>
   <img className='actual-don-image rounded-circle'src={donimage}/>
    </div>
  )
}

function Aboutcontent() {
  return (
    <div className='About-content-section'>
        <h2 style={{color:'white',textAlign:'center'}}>About me</h2>
        <p className='text-light container-fluid'>My name is Davis Mugo Ikou.I am currently a student at Muran'ga University of Technology persuing
        bachelors degree in Mathematics and Computer Science. </p>
        <p className='text-light container-fluid'>Apart from that I do part-time freelancing jobs on UI/UX design and frontrnd web development.I am always open to working on large
            projects requiring collaboreations.
        </p>
    </div>
  )
}
function Navigationlinks(){
  const [Isskill,Setskill]=useState(true);
  const [IsExpertise,SetExpertise]=useState();
  const [Iseducation,Seteducation]=useState()

  const Handleclicks=(status)=>{
    if(status=='skillactive'){
      SetExpertise(IsExpertise=>false);
      Seteducation(Iseducation=>false);
      Setskill(Isskill=>true);
    var skill=true;
    var Expertise=false;
    var Education=false;
    }
    else if(status=='Expertiseactive'){
      Setskill(Isskill=>false)
      SetExpertise(IsExpertise=>true)
      Seteducation(Iseducation=>false)
    }
    else if(status=='Educationactive'){
      Setskill(Isskill=>false)
      SetExpertise(IsExpertise=>false)
      Seteducation(Iseducation=>true)
    }
   }
    return(
        <div className='Skills-section container-fluid'>
        <ul className='list-unstyled skills-links'>
            <li  style={{
          borderBottom: Isskill ? '1px solid red' : '',
        }} className='text-decoration-none text-light' onClick={()=>Handleclicks('skillactive')}>Skills</li>
            <li    style={{
          borderBottom: IsExpertise ? '1px solid red' : '',
        }} className='text-decoration-none text-light' onClick={()=>Handleclicks('Expertiseactive')}>Expertise</li>
            <li    style={{
          borderBottom: Iseducation ? '1px solid red' : '',
        }} className='text-decoration-none text-light'onClick={()=>Handleclicks('Educationactive')}>Education</li>
        </ul>
        {
        Isskill && 
        <div className='skills-description'>
            <ul className='list-unstyled skills-display'>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>UI/UX design</p>
                    <p className='text-light'>Designing web user interfaces</p>
                </li>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>Website design and development</p>
                    <p className='text-light'>Design and develop web applications.</p>
                </li>
            </ul>
            </div>
               }
               {
                IsExpertise && 
            <div className='Expertise-desription'>
            <ul className='list-unstyled skills-display'>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>HTML/CSS</p>
                    <p className='text-light'>To display and style web content</p>
                </li>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>Bootstrap 5</p>
                    <p className='text-light'>For responsive webpage designs</p>
                </li>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>Javascript</p>
                    <p className='text-light'style={{lineHeight:'20px'}}>With its liblaries such as react for scripting</p>
                </li>
            </ul>
            </div>
                }
                { 
                Iseducation && 
            <div className='Education description'>
              <p className='text-danger'><FaUserGraduate className='text-light' /> Undergraduate</p>
              <p className='text-light'>Student at Muranga University of Technology pursueing Bachelor of Science in Mathematics and Computer science.</p>
            </div>
            }
            </div>
    )
}   
         function Davisimg(){
          return(
            <div className='overall-Davis-image-container'>

            </div>
          )
         }
         function Aboutinformation(){
          return(
            <div className='overall-aboutinformation-container'>
              
            </div>
          )
         }
export default function Aboutsection() {
  return (
    <div className='overall-about-container'id='About'>
        <div className='user-image-render'>
         <Userimage/>
        </div>
        <div className='about-content-render'>
            <Aboutcontent/>
        </div>
        <div className='Skills-section-render'>
            <Navigationlinks/>
        </div>
        <div className='overall-about-desktop-container'> {/* desktop screens section*/}
        <div className='about-subsections-overall'>
              <div className='left-about-section'>
               <div className='Davis-image-holder'>
                <div className='image-opacity-controller'></div>
              <img src={donimage}/>
               </div>
              </div>
              <div className='right-about-section'>
              <h2 style={{color:'white',textAlign:'center'}}>About me</h2>
              <div className='about-text-container'>
              <p className='text-light container-fluid'>My name is Davis Mugo Ikou.I am currently a student at Muran'ga University of Technology persuing
        bachelors degree in Mathematics and Computer Science. </p>
        <p className='text-light container-fluid'>Apart from that I do part-time freelancing jobs on UI/UX design and frontrnd web development.I am always open to working on large
            projects requiring collaboreations.
        </p>
        <Navigationlinks/>
        </div>
              </div>
              </div>
              
        </div>
        </div>
  )
}

