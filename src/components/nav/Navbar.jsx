import React from 'react';
import './Navbar.scss'; // Import CSS styles for Navbar component

const Navbar = () => {
    return (
        <div className="navBar">
            <div className="navContainer">
                <a className="logo" href='./'>Booking Website</a>
                <div className="navItems">
                    {/* Register Button */}
                    <button className="navButton">Register</button>
                    {/* Login Button */}
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

//Navbar component hiển thị một thanh điều hướng đơn giản với logo, các nút đăng ký và đăng nhập.