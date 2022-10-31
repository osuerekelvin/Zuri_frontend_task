import React from 'react'
import './Component.css'
import Kelvin from './images/Kelvin.jpeg'
import Slack from './images/slack.svg'
import Zuri_logo from './images/Zuri.Internship_Logo.svg'
import ggg from './images/I4G.svg'
import Icon from './images/Icon.svg'

const Component = () => {
    return (
        <div className='parent_div'>
            <div>
                <img id='profile_picture' src={Kelvin} alt="" />
            </div>
                <h4 id='twitter'>BlackDiamond</h4>
                {/* <h4 id='slack'>kelvin112</h4> */}
          <div className='subdiv'>
          <div className='btn_div'>
                <a id='btn_twitter' href="https://twitter.com/bossmaster112"><h5>Twitter Link</h5></a>
            </div>
            <div className='btn_div'>
                <a id='btn_zuri' href="https://training.zuri.team/"><h5>Zuri Team</h5></a>
            </div>
            <div className='btn_div'>
                <a id='book' href="http://books.zuri.team"><h5>Zuri Books</h5></a>
            </div>
            <div className='btn_div'>
                <a id='book_python' href="https://books.zuri.team/python-for-beginners?ref_id=<kelvin112>"><h5>Python Books</h5></a>
            </div>
            <div className='btn_div'>
                <a id='pitch' href="https://background.zuri.team"><h5>Background Check for Coders</h5></a>
            </div>
            <div className='btn_div'>
                <a id='book_design' href="https://books.zuri.team/design-rules"><h5>Design Books</h5></a>
            </div>
          </div>
                <div className='icon_div'>
                    <div className='imgg'>
                    <img src={Slack} alt="" />
                    <a href="https://github.com/osuerekelvin"><img src={Icon} alt="" /></a>
                    </div>
                </div>
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

export default Component