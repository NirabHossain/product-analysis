import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);
    return (
        <div>
            <div className='d-md-none menu-icon' onClick={()=>setDisplayMenu(!displayMenu)}>
                {displayMenu?<XIcon></XIcon>:<MenuIcon></MenuIcon>}
            </div>
            <nav className={`d-md-flex justify-content-center ${displayMenu?'':'d-none'}`}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="blogs">Blogs</CustomLink>
                <CustomLink to="about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;