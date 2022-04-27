import React from 'react';
import { Link } from 'react-router-dom';
import flyme from '../image/flyme.png';
const Header = () => {
    return (
        <div className="relative">
            <header className="mx-auto flex bg-indigo-800 py-0.1">
                <img src={flyme} alt="" />
                <Link to="/">
                    <p className="text-white m-4 text-2xl cursor-pointer pr-60">
                        FlyMe
                    </p>
                </Link>
                <main classname=''>
                    <ul
                        className="flex justify-end 
                         "
                    >
                        <li
                            clasname="
                        "
                        >
                            <Link
                            classname=''
                            to="/">
                                <p className="text-white hover:underline underline-offset-8 text-2xl
                        cursor-pointer m-4">Home</p>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/offer">
                                <p  className="text-white hover:underline underline-offset-8 text-2xl
                        cursor-pointer m-4">Offer</p>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/about">
                                <p  className="text-white hover:underline underline-offset-8 text-2xl
                        cursor-pointer m-4">About</p>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/booking">
                                <p  className="text-white hover:underline underline-offset-8 text-2xl
                        cursor-pointer m-4">Booking</p>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/contact">
                                <p  className="text-white hover:underline underline-offset-8 text-2xl
                        cursor-pointer m-4">Contact</p>
                            </Link>
                        </li>
                        <li>
                            {' '}
                            <Link to="/login">
                                <p  className="text-white hover:underline underline-offset-8 text-2xl
                        cursor-pointer m-4">Login</p>
                            </Link>
                        </li>
                    </ul>
                </main>
            </header>
        </div>
    );
};

export default Header;
