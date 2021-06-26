import React from 'react';
import { NavLink } from 'react-router-dom';



const Navbar = ()=>
{
    return (
    <>
       <header>
       <nav>
            <div className='logo'><h1>AllSafe</h1></div>
            <div className='links'>
                <NavLink to='/' className='anchor' exact activeClassName='working-page'>Home</NavLink>
                <NavLink to='/service' className='anchor' exact activeClassName='working-page'>Service</NavLink>
                <NavLink to='/about' className='anchor' exact activeClassName='working-page'>About</NavLink>
                <NavLink to='/contact' className='anchor' exact activeClassName='working-page'>Contact</NavLink>
            </div>
        </nav>
       </header>
    </>);
}



export default Navbar;