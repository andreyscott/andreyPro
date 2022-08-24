 import React, {useEffect, useState} from 'react'
import { Transition } from '@tailwindui/react'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
  } from '@heroicons/react/outline';
  import { faHome, faXmark, faBars} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'
import HeaderItem from "../headerItems/HeaderItems";
export const Header = () => {
    const [isOpen, setIsOpen] = useState(true)


   
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
                <div className="flex cont flex-row  nav-bar-row  h-12  w-full z-20 min-h-fit  md:flex-row md:mx-6 ">
        <nav className=' w-full mx-3 flex justify-around  max-w-2xl items-center'>
        <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
          <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
          <HeaderItem title="SEARCH" Icon={SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
                </nav>                   
                </div>
                </Transition>

    </div>

  )
}
