import React from 'react'
import { Logo } from './logo'

const sections = ['home', 'about', 'work', 'contact','last']

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/40 backdrop-blur-md text-white z-50">
      <div className="container w-full   py-3 flex justify-between items-center">
        <Logo />
        <ul className="flex justify-between gap-3 md:space-x-16">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="md:text-lg text-xs font-semibold capitalize hover:text-blue-400  transform hover:scale-110 transition-transform duration-200"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex  justify-end">
          <img src="/jecrc.png" className='md:h-14 h-8  ' alt="jecrc logo" />
        </div>
        
      </div>
    </nav>
  )
}

