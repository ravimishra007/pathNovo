'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import {  FiMenu, FiX} from 'react-icons/fi'




  

export const HeaderSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMenuOpen(false)
      }
    

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/path%20vector-s8vIk5Qw4tj3Un2vjESvC6UGaNZlX1.svg" alt="Pathnovo Solution Logo" width={120} height={40} />
            </Link>
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Services', id: 'services' },
                { name: 'Process', id: 'process' },
                { name: 'Projects', id: 'projects' },
                { name: 'Blog', id: 'blog' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#16181e] hover:text-[#1955EE] transition-colors font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#16181e]">
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <motion.div
            className="h-1 bg-[#1955EE]"
            style={{ scaleX, transformOrigin: "0%" }}
          />
        </header>


        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white py-4 px-4 shadow-md fixed top-16 left-0 right-0 z-40"
          >
            {[
              { name: 'Services', id: 'services' },
              { name: 'Process', id: 'process' },
              { name: 'Projects', id: 'projects' },
              { name: 'Blog', id: 'blog' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-[#16181e] hover:text-[#1955EE] transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
    </>
  )
}
