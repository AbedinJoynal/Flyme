import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10 bg-white shadow md:flex md:items-center md:justify-between md:p-6 mt-20 bg-gray-200">
            <span className="text-base text-gray-500 sm:text-center dark:text-black font-semibold">
                © 2022{' '}
                <a href="https://flowbite.com" className="hover:underline">
                    Flyme
                </a>
                . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 text-base text-gray-500 sm:text-center dark:text-black font-semibold">
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 text-base text-gray-500 sm:text-center dark:text-black font-semibold">
                        Privacy Policy
                    </a>
                </li>
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 text-base text-gray-500 sm:text-center dark:text-black font-semibold">
                        Licensing
                    </a>
                </li>
                <li>
                    <a href="/contact" className="hover:underline text-base text-gray-500 sm:text-center dark:text-black font-semibold">
                        Contact
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
