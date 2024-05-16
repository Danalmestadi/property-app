import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed bg-slate-50 border-b border-slate-200 w-full z-20 top-0 left-0 transition-all duration-300">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-2xl font-semibold whitespace-nowrap text-black">EstateEase</span>
                    <span className="text-2xl font-bold whitespace-nowrap text-black">.</span>
                </a>

                <button
                    className="md:hidden block text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                   <svg className="h-8 w-8 text-slate-900"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
</svg>

                  
                </button>

                <ul className={`md:flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ${isOpen ? 'block' : 'hidden'}`}>
                    <li>
                        <a
                            href="/property"
                            className="block py-2 px-3 font-semibold text-black rounded md:bg-transparent md:hover:text-gray-300"
                            aria-current="page"
                        >
                            Properties
                        </a>
                    </li>
                    <li>
                        <a
                            href="/addproperty"
                            className="block py-2 px-3 font-semibold text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300"
                        >
                            New Property
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
