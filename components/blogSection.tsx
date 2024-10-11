import React from 'react'
import {useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion,useInView } from 'framer-motion'
import { FiArrowRight, FiUsers, FiZap,FiCode,} from 'react-icons/fi'



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


export const BlogSection = () => {
  return (
    <>
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

    </>
  )
}
