import React from 'react'
import './Aboutsection.css'
import donimage from './Images/donieimg.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


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
    return(
        <div className='Skills-section container-fluid'>
        <ul className='list-unstyled skills-links'>
            <li className='text-decoration-none text-light active'>Skills</li>
            <li className='text-decoration-none text-light'>Expertise</li>
            <li className='text-decoration-none text-light'>Education</li>
        </ul>
        <div className='skills-description'>
            <ul className='list-unstyled skills-display'>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>UI/UX design</p>
                    <p className='text-light'>Designing web user interfaces</p>
                </li>
                <li style={{lineHeight:'5px'}}>
                    <p style={{color:' #F30606'}}>Website design and development</p>
                    <p className='text-light'>Design and develop we applications.</p>
                </li>
            </ul>
            </div>
            </div>
    )
}

export default function Aboutsection() {
  return (
    <div className='overall-about-container'>
        <div className='user-image-render'>
         <Userimage/>
        </div>
        <div className='about-content-render'>
            <Aboutcontent/>
        </div>
        <div className='Skills-section-render'>
            <Navigationlinks/>
        </div>
        </div>
  )
}
