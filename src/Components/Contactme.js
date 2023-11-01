import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./Contactme.css"

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

export default function Contactme() {
  return (
    <div className='overall-contact-section container-fluid'>
        <h2 className='text-light' style={{textAlign:'center'}}>Contact me</h2>
       <div className='form-render'>
        <Formcomponent/>
       </div>
    </div>
  )
}
