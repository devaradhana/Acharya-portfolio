import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 hjhjghghg">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm ">
                            <div className="container-fluid">
                                <Link className="navbar-brand ms-1" to='/'>
                                    <img height={60}  src='./pngwing.com.png' />
                                </Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavDropdown"
                                    aria-controls="navbarNavDropdown"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item ms-2">
                                            <Link className="nav-link active" aria-current="page" to='/'>
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item ms-3">
                                            <Link className="nav-link" to='/about'>
                                                About
                                            </Link>
                                        </li>
                                        <li className="nav-item ms-3">
                                            <Link className="nav-link" to='/gallery'>
                                            Gallery
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <Link
                                                className="nav-link dropdown-toggle ms-3"
                                                to='/services'
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Services
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Naming Ceremony
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Vastu Shanti
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    New Office Pravesh
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Birthday Ceremony Puja
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Mundan Ceremony
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Janm Patrika Creation
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Astrology Consultations
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Thread Wearing Ceremony
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    SatyaNarayan Pooja
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    Griha Pravesh
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to='/'>
                                                    More...
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item ms-3">
                                            <Link className="nav-link" to='/contact'>
                                                Contact Us
                                            </Link>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
