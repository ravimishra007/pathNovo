'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { IconContext } from 'react-icons'
import { FiChevronRight, FiMenu, FiX, FiArrowRight, FiUsers, FiZap, FiBarChart2, FiLayers, FiCode, FiPenTool, FiMessageSquare, FiGlobe, FiStar, FiChevronLeft, FiSmartphone, FiPieChart, FiCheckCircle, FiUpload, FiTool, FiTrendingUp, FiWifi, FiEdit } from 'react-icons/fi'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
}

const services = [
  { name: 'UI/UX Design', icon: <FiPenTool />, description: 'Create intuitive and visually appealing interfaces that enhance user experience.' },
  { name: 'Web Development', icon: <FiCode />, description: 'Build robust, scalable web applications using cutting-edge technologies.' },
  { name: 'Digital Marketing', icon: <FiBarChart2 />, description: 'Drive growth with data-driven marketing strategies and campaigns.' },
  { name: 'Product Design', icon: <FiLayers />, description: 'Develop innovative products that solve real-world problems and delight users.' },
  { name: 'Cloud Solutions', icon: <FiGlobe />, description: 'Leverage cloud technologies to improve scalability and reduce costs.' },
  { name: 'Consulting', icon: <FiUsers />, description: 'Expert advice to help you navigate the digital landscape and achieve your goals.' }
]

const process = [
  { name: 'Discovery', icon: <FiStar />, description: 'We start by understanding your business goals and challenges.' },
  { name: 'Strategy', icon: <FiBarChart2 />, description: 'Our team develops a tailored strategy to meet your objectives.' },
  { name: 'Implementation', icon: <FiCode />, description: 'We bring your vision to life with cutting-edge technology.' },
  { name: 'Optimization', icon: <FiZap />, description: 'Continuous improvement to maximize your digital performance.' },
]

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

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {children}
    </motion.div>
  )
}

export function PathnovoSolutionLandingComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const expertsRef = useRef<HTMLDivElement>(null)
  const blogRef = useRef<HTMLDivElement>(null)

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
    <IconContext.Provider value={{ className: "inline-block w-5 h-5" }}>
      <div className="min-h-screen bg-white text-[#16181e]">
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

        <main className="pt-16">
          <ScrollSection>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#e6eeff] to-white">
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
                      href="#"
                      className="bg-[#1955EE] text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-[#1644c7] transition-colors inline-flex items-center"
                    >
                      Connect Now <FiChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </ScrollSection>

          <ScrollSection>
            <section id="services" className="py-20 bg-[#f9fafb]">
              <div className="container mx-auto px-4">
                <motion.div
                  className="text-center mb-16"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16181e]">
                    Our <span className="text-[#1955EE]">Services</span>
                  </h2>
                  <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
                    Comprehensive solutions to elevate your digital presence and drive business growth.
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <AnimatedCard key={index}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[#1955EE] bg-opacity-10">
                        <span className="text-2xl text-[#1955EE]">{service.icon}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-[#16181e]">{service.name}</h3>
                      <p className="text-[#4a5568]">{service.description}</p>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </section>
          </ScrollSection>

          <ScrollSection>
            <section id="process" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <motion.div
                  className="text-center mb-16"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16181e]">
                    Our <span className="text-[#1955EE]">Process</span>
                  </h2>
                  <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
                    We follow a streamlined process to ensure the success of your digital transformation.
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-4 gap-8">
                  {process.map((step, index) => (
                    <AnimatedCard key={index}>
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto bg-[#1955EE] bg-opacity-10">
                        <span className="text-3xl text-[#1955EE]">{step.icon}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-[#16181e] text-center">{step.name}</h3>
                      <p className="text-[#4a5568] text-center">{step.description}</p>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </section>
          </ScrollSection>

          <ScrollSection>
            <section id="projects" className="py-20 bg-[#f9fafb]">
              <div className="container mx-auto px-4">
                <motion.div
                  className="text-center mb-16"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16181e]">
                    Featured <span className="text-[#1955EE]">Projects</span>
                  </h2>
                  <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
                    Discover how we've helped businesses transform their digital presence and achieve remarkable results.
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "E-commerce Platform Redesign",
                      description: "Revamped the UI/UX of a major e-commerce platform, resulting in a 40% increase in conversions.",
                      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                    },
                    {
                      title: "FinTech Mobile App",
                      description: "Developed a secure and user-friendly mobile banking app with advanced features for a leading fintech startup.",
                      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80"
                    },
                    {
                      title: "AI-Powered Analytics Dashboard",
                      description: "Created an intuitive analytics dashboard with AI-driven insights for a data-centric SaaS company.",
                      image:  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    }
                  ].map((project, index) => (
                    <AnimatedCard key={index}>
                      <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-[#16181e]">{project.title}</h3>
                        <p className="text-[#4a5568] mb-4">
                          {project.description}
                        </p>
                        <Link href="#" className="text-[#1955EE] hover:underline inline-flex items-center">
                          View Case Study <FiArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </section>
          </ScrollSection>

          <ScrollSection>
            <section id="blog" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <motion.div
                  className="text-center mb-16"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16181e]">
                    Latest from Our <span className="text-[#1955EE]">Blog</span>
                  </h2>
                  <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
                    Stay updated with the latest trends, insights, and best practices in technology and design.
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "The Future of AI in Web Development",
                      excerpt: "Explore how artificial intelligence is revolutionizing the way we build and interact with websites.",
                      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                      icon: <FiZap />
                    },
                    {
                      title: "Designing for Accessibility: Best Practices",
                      excerpt: "Learn how to create inclusive digital experiences that cater to users of all abilities.",
                      image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                      icon: <FiUsers />
                    },
                    {
                      title: "The Rise of Serverless Architecture",
                      excerpt: "Discover how serverless computing is changing the landscape of backend development.",
                      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
                      icon: <FiCode />
                    }
                  ].map((post, index) => (
                    <AnimatedCard key={index}>
                      <div className="relative">
                        <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="absolute top-4 left-4 bg-white rounded-full p-2">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1955EE] bg-opacity-10">
                            <span className="text-2xl text-[#1955EE]">{post.icon}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-[#16181e]">{post.title}</h3>
                        <p className="text-[#4a5568] mb-4">
                          {post.excerpt}
                        </p>
                        <Link href="#" className="text-[#1955EE] hover:underline inline-flex items-center">
                          Read More <FiArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </section>
          </ScrollSection>

          <ScrollSection>
            <section className="py-20 bg-[#1955EE]">
              <div className="container mx-auto px-4">
                <motion.div
                  className="max-w-3xl mx-auto text-center"
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerChildren}
                >
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Ready to Transform Your Digital Presence?
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-xl mb-8 text-white opacity-90">
                    Let's work together to create innovative solutions that elevate your business.
                  </motion.p>
                  <motion.div variants={fadeInUp}>
                    <Link
                      href="#"
                      className="bg-white text-[#1955EE] px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center"
                    >
                      Connect Now <FiChevronRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </section>
          </ScrollSection>
        </main>

        <footer className="bg-[#f9fafb] py-12 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/path%20vector-s8vIk5Qw4tj3Un2vjESvC6UGaNZlX1.svg" alt="Pathnovo Solution Logo" width={120} height={40} className="mx-auto mb-4" />
              <p className="text-[#4a5568] max-w-2xl mx-auto mb-4">
                Pathnovo Solution: Where cutting-edge technology meets visionary design. Transform your digital presence with our expert team.
              </p>
              <p className="text-[#4a5568]">
                123 Innovation Street, Tech City, TC 12345
              </p>
            </div>
          </div>
        </footer>
      </div>
    </IconContext.Provider>
  )
}