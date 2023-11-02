import "./navbar.css"
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="logo">
        <img src='../images/hootsuite.png' alt='Your Logo' />
    </div>
    <ul>
    <li><a href="/">Platform</a></li>
    <li><a href="/">Plans</a></li>
    <li><a href="/">Enterprises</a></li>
    <li><a href="/">Resource</a></li>
    <li><a href="/">Education</a></li>
</ul>
<div className="div-login">
<ul>
    <li><a href="/">Contact us</a></li>
    <li><a href="/">login</a></li>
</ul>
<button className="signup-button">Sign up</button>
</div>

</div>

  )
}

export default Navbar