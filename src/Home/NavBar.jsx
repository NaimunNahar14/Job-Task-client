import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    const navOptions = (
        <>
            <li>
                <Link to="/" onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="/addtask" onClick={closeMobileMenu}>
                    Added Task
                </Link>
            </li>
            <li>
                <Link to="/tasklist" onClick={closeMobileMenu}>
                    Task List
                </Link>
            </li>
        </>
    );

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            onClick={toggleMobileMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        <Link to="/" className="btn btn-ghost normal-case text-xl">
                            <h1>Task Genius</h1>
                        </Link>
                    </div>
                </div>
                <div className={`navbar-center lg:flex ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
