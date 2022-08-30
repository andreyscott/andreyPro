import React from 'react'
import logo from '../../assets/img/logo.png'
import andrey from '../../assets/img/andrey.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

 const Sidebar = () => {
  return (
    <>
            
         

    <div id='sidebar' className=' hidden md:block nav-bar w-16 bg-dark h-full absolute top-0  min-h-max'>
   
    <Link className="block py-2 px-0" to="/">
          <img    className=' mt-2 m-0 p-0' src={logo} alt="Logo" />
          <img className="justify-center text-center  items-center absolute left-1 top-14  w-14 pb-8 " src={andrey} alt="slobodan" />
        </Link>
        <nav className=' flex flex-col text-center absolute h-52 top-1/2  -mt-28 w-full'>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
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
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/sudip-banerjee-300b691bb/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/metal-oopa"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/users/metal_oopa"
              target="_blank"
              rel="noreferrer"
            >
              {/* <img src={codechefLogo} width="24" alt="Codechef" /> */}
            </a>
          </li>
        </ul>
      </div>

    </>
  )
}

export default Sidebar;