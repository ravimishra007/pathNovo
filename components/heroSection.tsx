'use client'

import {useRef } from 'react'
import Link from 'next/link'
import { motion,useInView } from 'framer-motion'
import { FiChevronRight} from 'react-icons/fi'
import LeftAnimatedCircles from './HeroSectionAnimation/leftSide'
import RightAnimatedCircles from './HeroSectionAnimation/rightSide'

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
  }
const ScrollSection = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    )
  }
  
export const HeroSection = () => {
  return (
    <>
              <ScrollSection>
            <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e6eeff]
             to-white">
                 <RightAnimatedCircles/>
              <LeftAnimatedCircles/>
                <div className="container mx-auto px-4">
                <motion.div
                  className="max-w-4xl mx-auto text-center"
                  initial="initial"
                  animate="animate"
                  variants={staggerChildren}
                >
                  <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#16181e]">
                    Innovative Solutions for Your
                    <span className="text-[#1955EE]"> Digital Journey</span>
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#4a5568] mb-10">
                    Pathnovo Solution: Where cutting-edge technology meets visionary design to transform your digital presence.
                  </motion.p>
                  <motion.div variants={fadeInUp}>
                    <Link
                      href="https://wa.me/+917525046551"
                      target="_blank"
                      className="bg-[#1955EE] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1644c7] transition-colors inline-flex items-center active:scale-[0.97]"
                    >
                      Connect Now <FiChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </ScrollSection>
    </>
  )
}

