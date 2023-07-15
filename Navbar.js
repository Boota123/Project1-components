import React from 'react'
import "./Navbar.css"
import { GiSpermWhale } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi'
import {PiSlidersHorizontalFill} from 'react-icons/pi'


const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
    
                {/* <h1 className='logo'>App Whele</h1> */}
        <ul className='nav-menu'>
            <li>
            <a>
            <GiSpermWhale/> App Whale
            </a>
            </li>     
            
        </ul>
        <div className='btn'>
          <button>Log In</button>
          </div>
          <div>
          <button className='signup'>Get Started </button>  &nbsp;<PiSlidersHorizontalFill/>
  
          </div>
         
          {/* &nbsp; */}
  



    </nav>
                <section className='hero-section'>
                <h1>Connect the best tools <br/> together to make your life easy</h1>
                <p>Bring the best experience across the internet to once place</p>
                <div className='box'>
                <span><BiSearch/></span>
                <input type='text' name='' placeholder='Search For Tools' href="/"></input>
                <button>Search</button>
                </div>
                {/* <button>Search</button> */}
                 
              </section>
            </>
  )
}

export default Navbar
