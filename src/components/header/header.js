import React from 'react'
import Logo from '../../logo.png'
import './header.css'

const Title = 'Ritagram'

function Header() {
  return (
    <header>
			<img alt="logo" className="logo" src={Logo} />
			<div className="verticalDecoration"></div>
			<p className="title">{Title}</p>
		</header>
  )
}

export default Header
