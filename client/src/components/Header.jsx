import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/createPost' >Create Post</Link>
                <Link to='/profile'>Profile</Link>
            </ul>
                </div>
    )
}

export default Header;