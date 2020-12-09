import React from 'react'

import Logo from '../logo';
import Search from '../search';

import SWimage from '../../assets/star-wars-logo.png';

const Navbar = () => {
    return (
        <div className='navbar__container'>    
            <Search/>
            <Logo logoImage={SWimage}/>
        </div>
    )
}

export default Navbar
