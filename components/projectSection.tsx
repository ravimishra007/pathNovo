import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion,  useInView } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'



const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
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

  const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white  p-6  animatedCard rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {children}
      </motion.div>
    )
  }



export const ProjectSection = () => {
  return (
    <>
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
                    Discover how we&apos;ve helped businesses transform their digital presence and achieve remarkable results.
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

    </>
  )
}
