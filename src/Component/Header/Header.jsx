import React from 'react'
import { Link } from 'react-router-dom';
import { MdAccountCircle } from "react-icons/md";
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <p>To Do App</p> 
      <Link to="/login" className="header-link">
        <MdAccountCircle />
      </Link>
      <div></div>
      
    
    </div>
   
  )
}

export default Header