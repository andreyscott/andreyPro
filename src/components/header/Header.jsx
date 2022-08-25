 import React, {useState} from 'react'
import { Transition } from '@tailwindui/react'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CollectionIcon, HomeIcon, UserIcon, MailIcon} from '@heroicons/react/outline';
  import { faHome, faXmark, faBars} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom'
import HeaderItem from "../headerItems/HeaderItems";



export const Header = () => {
    const [isOpen, setIsOpen] = useState(true)


  return (
    <div className='w-full absolute left-0  top-0 z-30 bg-[#181818]' >
        <div className='flex justify-between px-1 items-center content-center'>
            <Link className="flex flex-col py-2 px-0" to="/">
                <img    className=' mt-2 w-12 h-12 m-0 p-0' src={logo} alt="Logo" />
            </Link>
            <div className='flex justify-center items-center content-center'>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                </div>
            <button onClick={() => setIsOpen(!isOpen)} 
            className='flex items-center justify-center text-white text-2xl pr-1 font-bold'>
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
                <div className="flex cont flex-row  nav-bar-row h-fit  w-full z-20 min-h-fit  md:flex-row md:mx-6 ">
        <nav className='w-full mx-3 flex justify-around  items-center'>
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="ABOUT" Icon={UserIcon} />
          <HeaderItem title="PORTFOLIO" Icon={CollectionIcon} />
          <HeaderItem title="CONTACT" Icon={MailIcon} />
                </nav>                   
                </div>
                </Transition>

    </div>

  )
}
