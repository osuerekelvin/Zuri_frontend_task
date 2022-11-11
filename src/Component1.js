import React from 'react'
import './Component1.css'

const Component1 = () => {
  return (
    <div className='parentdiv1'>
        <div className='parentdiv2'>
            <h3>Contact Me</h3>
            <p>Hi there, contact me to ask about anything you have in mind.</p>
            <form action="">
            
             <div className='flex1'>
                <div className='yooo'> 
                  <h5 className='pp'>firstname</h5>
                  <input className='firstname' type="name"  placeholder='Enter your name'/>
                </div>
                <div className='yooo2'>
                  <h5 className='pp'>lastname</h5>
                  <input className='lastname' type="name"  placeholder='Enter your name'/>
                </div>
             </div>
               
                
                <h5 className='h55'>email</h5>
                <input className='email_input' type="text" placeholder='yourname@email.com' />
                <h5 className='h55'>message</h5>
                <input className='message_input' type="text" placeholder='Send me a messsage and i will reply as soon as possible...' /> <br />
                <input className='checker_box' type="checkbox" name="" id=""  /> <span className='span1'>You agree to providing your data to Kelvin who may contact you</span> <br />
                <button className='msg_btn'>Send message</button>
            </form>
        </div>
    </div>
  )
}

export default Component1