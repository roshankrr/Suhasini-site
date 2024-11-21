"use client"

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navigation } from './navigation'
import { HomeContent, AboutContent, WorkContent, ContactContent, FooterContent } from './section-content'

gsap.registerPlugin(ScrollTrigger)

const sections = ['home', 'about', 'work', 'contact','last']

export default function SmoothScrollSite() {
  const mainRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(sectionsRef.current)
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel as HTMLElement,
          start: 'top top',
          end: 'bottom top',
          pin: false,
          pinSpacing: false,
          onEnter: () => {
            const navButtons = document.querySelectorAll('nav button')
            navButtons.forEach((btn, index) => {
              if (index === i) {
                btn.classList.add('text-blue-400')
              } else {
                btn.classList.remove('text-blue-400')
              }
            })
          },
        })

        // Animate section content
        gsap.from(panel.children as HTMLElement[], {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: panel as HTMLElement,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
          },
        })
      })

      // Animate navigation bar
      gsap.from('nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <Navigation />
      <div ref={mainRef} className="overflow-x-hidden">
        {sections.map((section, index) => (
          <section
            key={section}
            id={section}
            ref={(el) => (sectionsRef.current[index] = el as HTMLDivElement)}
            className="min-h-screen w-full flex items-center justify-center text-white"
            style={{ backgroundColor: 'black' }}
          >
            {section === 'home' && <HomeContent />}
            {section === 'about' && <AboutContent />}
            {section === 'work' && <WorkContent />}
            {section === 'contact' && <ContactContent />}
            {section === 'last' && <FooterContent />}
          </section>
        ))}
      </div>
    </>
  )
}

