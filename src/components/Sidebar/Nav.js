import {
    faHome,
    faUser,
    faEnvelope,
    faBars,
    faScrewdriverWrench,
  } from '@fortawesome/free-solid-svg-icons'

import logo from '../../assets/img/logo.png'
 import React from 'react'



import {
    BrowserRouter as Router,
    NavLink
  } from "react-router-dom";

export default function Nav() {

    let Links = [
        {name: 'faHome', link: '/'},
        {name: 'Podcast', link: '/podcast'},
        {name: 'Partnership', link: '/partnership'},
        {name: 'Contact', link: '/contact'},
        {name: 'Store', link: '/store'},
    ];

    const [isOpen, setIsOpen] = React.useState(false);

    const renderNavLink = ({ name, link }) => (
		<a className="my-1 p-2 text-md font-medium text-gray-700 transition-all duration-4000 ease-in transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
         key={link}>
			<NavLink
				exact
				to={link}
				activeClassName="text-blue-500 dark:text-blue-400"
				className="text-gray-700 hover:text-pink-500 dark:text-gray-200"
			>
				{name}
			</NavLink>
		</a>
	);


  return (
    
    <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-4 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">
                        <img src={logo} className="h-16  w-28  mr-2" />
                    </a>
                 
                </div>
                
                <div className="flex md:hidden">
                    <button type="button" onClick={ () => setIsOpen(!isOpen) } 
                     className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                  {

                    isOpen ? (
                        <div class="space-y-2">
   <span class="block w-5 h-0.5 bg-gray-600"></span>
                          <span class="block w-8 h-0.5 bg-gray-600"></span>
                          <span class="block w-8 h-0.5 bg-gray-600"></span>
                         </div>

        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
</svg>
     )

                  }
            
                    
               
                    </button>
                </div>
            </div>

            <div className={`items-center md:flex ${ isOpen ? 'block' : 'hidden'}`}>
                <div className="flex  md:flex-row md:mx-6 ">
                {Links.map((Links) => renderNavLink(Links))}
                    
                </div>

                

            </div>
        </div>
    </nav>
  )
}