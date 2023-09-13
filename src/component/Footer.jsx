import React, { useState } from 'react';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer class="footer-1 bg-mayo py-8 sm:py-12">
        <div class="container mx-auto px-4">
            <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 text-white">
                <h5 class="text-xl font-bold mb-6">Features</h5>
                <ul class="list-none footer-links">
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Cool stuff</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Random feature</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Team feature</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Stuff for developers</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Another one</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Last time</a>
                </li>
                </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 text-white">
                <h5 class="text-xl font-bold mb-6">Resources</h5>
                <ul class="list-none footer-links">
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent">Resource</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Resource name</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Another resource</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Final resource</a>
                </li>
                </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0 text-white">
                <h5 class="text-xl font-bold mb-6">About</h5>
                <ul class="list-none footer-links">
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Team</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Locations</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Privacy</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Terms</a>
                </li>
                </ul>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0 text-white">
                <h5 class="text-xl font-bold mb-6">Help</h5>
                <ul class="list-none footer-links">
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Support</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Help Center</a>
                </li>
                <li class="mb-2">
                    <a href="#" class="border-b border-solid border-transparent ">Contact Us</a>
                </li>
                </ul>
            </div>
            </div>

            <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t text-white ">
            <div class="sm:w-full px-4 md:w-1/6">
                <strong>FWR</strong>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 class="font-bold mb-2">Address</h6>
                <address class="not-italic mb-4 text-sm">
                123 6th St.<br/>
                Melbourne, FL 32904
                </address>
            </div>
            <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 class="font-bold mb-2">Free Resources</h6>
                <p class="mb-4 text-sm">Use our HTML blocks for <strong>FREE</strong>.<br/>
                <em>All are MIT License</em></p>
            </div>
            <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                <button class="px-4 py-2 bg-blue-500 hover:bg-blue-500 rounded text-white">Get Started</button>
            </div>
            </div>
        </div>
        </footer>
  );
};

export default Footer;
