import React, { useState } from 'react';
import flyme from '../image/flyme.png';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <nav
            className="fixed bg-gradient-to-r from-blue-900
        w-full border-white px-2 sm:px-4 py-5"
        >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src={flyme} className="mr-3 h-6 sm:h-9" alt="Flyme" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Fly{''}
                    </span>
                    <span className="self-center text-2xl whitespace-nowrap dark:text-white">
                        Me
                    </span>
                </a>
                <button
                    onClick={() => setIsNavOpen((prev) => !prev)}
                    data-collapse-toggle="mobile-menu"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-blue-400"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                        <div
                            className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                            onClick={() => setIsNavOpen(false)}
                        ></div>
                        <ul
                            className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between
                    
                        min-h-[250px]"
                        >
                            <li
                                className="
                             my-8 uppercase hover:text-white"
                            >
                                <a href="/">Home</a>
                            </li>
                            <li className="hover:text-white my-8 uppercase">
                                <a href="/offer">Offer</a>
                            </li>
                            <li
                                className=" my-8 uppercase
                            hover:text-white
                            "
                            >
                                <a href="/about">About</a>
                            </li>
                            <li
                                className=" my-8 uppercase
                            hover:text-white
                            "
                            >
                                <a href="/booking">Booking</a>
                            </li>
                            <li
                                className=" my-8 uppercase
                            hover:text-white
                            "
                            >
                                <a href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="mobile-menu"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <a
                                href="/"
                                className="block py-2 pr-4 pl-3 text-white bg-white text-xl rounded md:bg-transparent md:text-white md:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/offer"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-xl dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Offer
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-xl dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/booking"
                                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 text-xl dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Booking
                            </a>
                        </li>
                        <li>
                            <a
                                href="/login"
                                className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 text-xl md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
