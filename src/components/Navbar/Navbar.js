import React from 'react'
import './navbar.scss'
import {Link} from 'react-router-dom'
import maleA from '../../assets/male_avatar.svg'
import {Notifications, Settings} from '@material-ui/icons';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="Navbar">
        <div className="Navbar_menu container">
          <div className="Navbar_left">
            <h1 className="Navbar_logo">Admin Panel</h1>
          </div>
          <div className="Navbar_right">
            <ul className="Navbar_listItem">
              <li className="Navbar_list">
                <Notifications className='Navbar_listIcon' />
                <span className="Navbar_listDetail">2</span>
              </li>
              <li className="Navbar_list">
                <Settings className='Navbar_listIcon' />
              </li>
            </ul>
            <img src={maleA} alt="" className='Navbar_image' />
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Navbar