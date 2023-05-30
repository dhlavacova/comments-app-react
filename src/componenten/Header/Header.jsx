import React from 'react';
import {FaComment}from 'react-icons/fa';
import './Header.scss'
const Header = () => {
    return (
        <div>

            <h2 className="title"> <span><FaComment/></span>Teile deine Meinung zu diesem Artikel!</h2>
        </div>
    );
};

export default Header;