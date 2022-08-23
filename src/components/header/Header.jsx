 import React, {useEffect, useState} from 'react'
import { Transition } from '@tailwindui/react'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faXmark,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
export const Header = () => {
    const [isOpen, setIsOpen] = useState(true)


    const HeaderItem = ({ Icon, title }) =>{
        return(
          <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest transition" >{title}</p>
          </div>
        )
      }
    //   function Header(){
    //     return(
    //       <header className="flex flex-col justify-between p-5 sm:flex-row">
    //         <div className="flex justify-between max-w-2xl">
    //           <HeaderItem Icon={  faHome} title="HOME"/>
    //           <HeaderItem Icon={faUser} title="TRENDING"/>
    //           <HeaderItem Icon={faEnvelope} title="VERIFIED"/>
    //           <HeaderItem Icon={faBars} title="COLLECTION"/>
            
    //         </div>
    //       </header>
    //     )}

  return (
    <div className='w-full absolute left-0  top-0 z-30 bg-[#181818]' >
        <div className='flex justify-between items-center content-center'>
            <Link className="flex flex-col py-2 px-0" to="/">
                <img    className=' mt-2 w-12 h-12 m-0 p-0' src={logo} alt="Logo" />
            </Link>
            <div className='flex justify-center items-center content-center'>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                </div>
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-center text-white text-2xl font-bold'>
{
    isOpen ? (
<FontAwesomeIcon icon={faXmark} color="#4d4d4e" />
      
     )
    : (
    <div id='menu' className=' md:hidden flex justify-center text-center items-center content-center'>
    <FontAwesomeIcon icon={faBars} color="#4d4d4e" />
    </div>

    )
}

</button>

                </div>
                
              <Transition  show={isOpen}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
                                
                <div className="flex cont flex-row bg-green-300 h-12  w-full z-20 min-h-fit  md:flex-row md:mx-6 ">
        <nav className=' w-full mx-3 flex justify-around items-center'>
                <NavLink className='text-2xl ' exact="true" activeclassname="active" to="/">
                {/* <HeaderItem Icon={  faHome} title="HOME"/> */}
                    <FontAwesomeIcon className=' about-link hover:animate-bounce icons' icon={faHome} color="#333" />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="skills-link"
                    to="/skills"
                >
                    <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                </nav>

                {/* <div className="flex justify-between max-w-2xl">
              <HeaderItem Icon={  faHome} title="HOME"/>
              <HeaderItem Icon={faUser} title="TRENDING"/>
              <HeaderItem Icon={faEnvelope} title="VERIFIED"/>
              <HeaderItem Icon={faBars} title="COLLECTION"/>
            </div> */}
                
                    
                </div>
                </Transition>

    </div>

  )
}
