import React from 'react'
import './Footer.css'
import Zuri_logo from './images/Zuri.Internship_Logo.svg'
import ggg from './images/I4G.svg'

const Footer = () => {
  return (
    <div>
         <footer>
           <div className='footer_div'>
           <img id='footer_logo' src={Zuri_logo} alt="" />
            <p id='footer_para'>HNG Internship 9 Frontend Task</p>
            <img id='footer_logo1' src={ggg} alt="" />
           </div>
          </footer>
    </div>
  )
}

export default Footer