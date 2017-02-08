import React from 'react';
import { Link } from 'react-router';
import '../css/Header.css';

const MenuItem = ({active, children, to}) => (
    <Link to={to} className="menu-item">
            {children}
    </Link>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
                LEGO-Danawa
            </div>
            <div className="menu">
                <MenuItem to={'/'}>홈</MenuItem>
                <MenuItem to={'/about'}>소개</MenuItem>
            </div>
        </div>
    );
};

export default Header;
