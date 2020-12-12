import React from 'react';

import Logo from '../logo';
import Search from '../search';

import swImage from '../../assets/star-wars-logo.png';

const Navbar = () => {
    return (
        <div className='navbar__container'>    
            <Search/>
            <Logo logoImage={swImage}/>
        </div>
    )
}

export default Navbar;

