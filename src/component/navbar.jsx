import React from 'react'
import {Navbar,Container,Nav} from  'react-bootstrap'
import { Link } from "react-router-dom";
import  "../styles/navbar.css";



const navbar = () => {

const logo=
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="25.000000pt" height="25.000000pt" viewBox="0 0 600.000000 565.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,565.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2740 5397 c-707 -476 -1347 -817 -1812 -967 -84 -27 -165 -52 -179
-55 l-26 -5 13 -77 c19 -105 58 -443 89 -753 32 -324 56 -494 106 -745 132
-671 293 -1064 599 -1470 104 -138 249 -300 365 -407 177 -164 636 -531 862
-689 133 -93 245 -169 248 -169 4 0 116 76 248 170 458 321 961 760 1171 1020
183 228 365 547 456 800 90 250 173 579 229 910 38 224 45 272 81 635 29 294
71 633 88 728 9 46 9 47 -17 53 -446 98 -1258 518 -2083 1080 -92 63 -171 114
-175 113 -5 0 -123 -78 -263 -172z m532 -311 c510 -337 909 -562 1285 -725
144 -62 423 -161 457 -161 15 0 17 -5 12 -32 -16 -87 -47 -338 -71 -568 -49
-481 -75 -665 -136 -939 -94 -427 -218 -744 -397 -1016 -184 -281 -353 -459
-727 -766 -225 -185 -647 -496 -685 -506 -26 -6 -426 284 -690 501 -375 308
-534 474 -720 753 -153 230 -250 445 -335 739 -94 328 -149 634 -195 1090 -29
286 -72 643 -86 712 -5 27 -4 32 12 32 34 0 313 98 457 161 377 163 803 404
1292 731 138 92 253 167 257 167 5 1 126 -77 270 -173z"/>
</g>
</svg>


  return (
    <>
  
  <Navbar collapseOnSelect expand="lg" className='navvv' >
  <Container>
  <Navbar.Brand className='logo' href="/">{logo}</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto links">
    
    <Link  className='link' to="/">HOME</Link>
    <Link className='link' to="/journey"> THE JOURNEY</Link>
    <Link className='link' to="/team">TEAM</Link>
    <Link className='link' to="/store">STORE</Link>
      <Link className='link' to="/contact">CONTACT</Link>
    
      
      
     
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default navbar