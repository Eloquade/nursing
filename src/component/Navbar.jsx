import React, { useState } from 'react';
import logo from './static/AMC LOGO.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4 bg-navbarcolor ">
        <div className="flex items-center justify-between mb-4 md:mb-0">
            <img src={logo}  alt='logo' className='h-auto max-h-24 mx-auto'></img>
            <a className="text-grey-darkest hover:text-black text-xl font-bold" href="#">
                Ace Medical Center
            </a>
        </div>

        <form className="mb-4 w-full md:mb-0 md:w-1/4">
            <label className="hidden" htmlFor="search-form">Search</label>
            <input className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full" placeholder="Search" type="text"/>
            <button className="hidden">Submit</button>
        </form>
        
        <nav>
            <ul className="list-reset md:flex md:items-center">
            <li className="md:ml-4 text-xl">
                <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold" href="#">
                Home
                </a>
            </li>
            <li className="md:ml-4 text-xl">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold" href="#">
                About
                </a>
            </li>
            <li className="md:ml-4 text-xl">
                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0 font-bold" href="#">
                Contact
                </a>
            </li>
            </ul>
        </nav>
    </header>
  );
};

export default Navbar;