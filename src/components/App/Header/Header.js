import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className='header'>
        <div className="logo">
          <img src={require('../../images/logo.svg')} />
        </div>
        <h1>好奇猫工作室</h1>
      </div>
    )
  }
}

export default Header;
