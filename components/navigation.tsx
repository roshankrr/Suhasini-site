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
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="text-lg font-semibold capitalize hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform duration-200"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
        <Logo />
      </div>
    </nav>
  )
}

