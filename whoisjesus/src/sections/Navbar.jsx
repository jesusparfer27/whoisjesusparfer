import { useState } from 'react'
import React from 'react'
import MenuSvg from '/public/assets/menu.svg'
import CloseSvg from '/public/assets/close.svg'
import { navLinks } from '../constants/index.js'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => {
    return (
      <ul className='nav-ul'>
        {navLinks.map(({id, href, name}) => (
          <li key={id} className='nav-li'>
            <a href={href} className='nav-li_a' onClick={() => {}}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen) 
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-between items-center py-5 mx-auto c-space'>
        <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
        Jesús
        </a>
        <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden' aria-label="Toggle Menu">
          <img src={ isOpen ? CloseSvg : MenuSvg } alt="toggle" className='w-6 h-6' />
        </button>
        <nav className='sm:flex hidden'>
          <NavItems />
        </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'} `}>
      <nav className='p-5'>
        <NavItems />  
      </nav>
      </div>
    </header>
  )
}

export default Navbar