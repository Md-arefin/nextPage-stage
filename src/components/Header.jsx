import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='bg-gray-200 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <div className='relative flex items-center justify-between'>

                {/* Logo section  */}
                
                <Link to="/" className='inline-flex items-center gap-1'>
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className='font-bold text-xl tracking-wide text-gray'>nextPage</span>
                </Link>

                {/* nav items section */}

                <ul className='items-center hidden space-x-8 lg:flex font-bold '>

                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'text-blue-500' : "default")}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/books"
                            className={({ isActive }) => (isActive ? 'text-blue-500' : "default")}
                        >
                            Books
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'text-blue-600' : "default")}
                        >
                            About
                        </NavLink>
                    </li>

                </ul>

                {/* Mobile navbar */}

                <div className="lg:hidden">

                    {/* Dropdown Open Button */}

                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>

                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className=' p-5 bg-white border rounded shadow-sm'>

                                {/*  Logo & Button section */}

                                <div className='flex items-centers justify-between mb-4'>

                                    <div >
                                        <Link to="/" className='inline-flex items-center gap-1'>
                                            <BoltIcon className="h-6 w-6 text-blue-500" />
                                            <span className='font-bold text-2xl tracking-wide text-gray'>Next Page</span>
                                        </Link>
                                    </div>

                                    {/* Dropdown menu close button  */}

                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/books'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Books
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/about'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                About Us
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;