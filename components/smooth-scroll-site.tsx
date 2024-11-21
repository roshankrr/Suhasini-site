"use client"

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Navigation } from './navigation'
import { HomeContent, AboutContent, WorkContent, ContactContent, FooterContent } from './section-content'

const sections = ['home', 'about', 'work', 'contact', 'last']

export default function SmoothScrollSite() {
  const mainRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])
  const [isMounted, setIsMounted] = useState(false)

  // Handle initial client-side mount
  useEffect(() => {
    setIsMounted(true)
    // Register GSAP plugin only on client side
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  // Setup GSAP animations after component is mounted
  useEffect(() => {
    if (!isMounted || !mainRef.current) return

    // Clear any existing ScrollTriggers to prevent duplicates
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    const ctx = gsap.context(() => {
      const panels = sectionsRef.current.filter(panel => panel !== null)

      panels.forEach((panel, i) => {
        if (!panel) return

        // Create scroll trigger for navigation highlighting
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          end: 'bottom top',
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
          onEnterBack: () => {
            const navButtons = document.querySelectorAll('nav button')
            navButtons.forEach((btn, index) => {
              if (index === i) {
                btn.classList.add('text-blue-400')
              } else {
                btn.classList.remove('text-blue-400')
              }
            })
          }
        })

        // Setup content animations
        const children = panel.children
        if (children.length > 0) {
          gsap.from(children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: panel,
              start: 'top center',
              end: 'bottom center',
              toggleActions: 'play none none reverse',
            },
          })
        }
      })

      // Animate navigation only after mount
      if (isMounted) {
        gsap.from('nav', {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        })
      }
    }, mainRef)

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMounted])

  // Don't render content until mounted
  if (!isMounted) {
    return null
  }

  return (
    <div className="relative">
      <Navigation />
      <div
        ref={mainRef}
        className="overflow-x-hidden"
      >
        {sections.map((section, index) => (
          <section
            key={section}
            id={section}
            ref={el => sectionsRef.current[index] = el}
            className="min-h-screen w-full flex bg-black items-center justify-center text-white"
          >
            {section === 'home' && <HomeContent />}
            {section === 'about' && <AboutContent />}
            {section === 'work' && <WorkContent />}
            {section === 'contact' && <ContactContent />}
            {section === 'last' && <FooterContent />}
          </section>
        ))}
      </div>
    </div>
  )
}