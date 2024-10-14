import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'




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
        className="bg-white  p-6   animatedCard rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {children}
      </motion.div>
    )
  }


  export const TeamSection = () => {
    return (
      <>
        <ScrollSection>
          <section id="team" className="py-20 bg-[#f9fafb] teamSection">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16 "
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16181e]">
                  Meet Our <span className="text-[#1955EE]">Team</span>
                </h2>
                <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
                  Our dedicated professionals work tirelessly to bring innovative solutions to life.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 ">
                {[
                  {
                    name: "ANKUR SHUKLA (Director)",
                    role: "With a B.Tech and M.Tech. from IIT BHU, a Top Rated freelancer on Upwork, excelling in strategy, tech, and marketing",
                    image: "/images/ankur.jpg",
                    socials: {
                      linkedin: "https://www.linkedin.com/in/ankur-shukla-developer/",
                      twitter: "#",
                      github: "#"
                    }
                  },
                  {
                    name: "AMIT JHA (Director)",
                    role: "B.Tech and M.Tech from IIT BHU, built two startups, and assisted 20+ clients in developing tech solutions.",
                    image: "/images/amit.jpg",
                    socials: {
                      linkedin: "https://www.linkedin.com/in/amit-kumarjha/",
                      twitter: "#",
                      github: "#"
                    }
                  },
                  {
                    name: "VIKAS SIGNH (Director)",
                    role: "B.Tech from IIT BHU, MS and MBA from LSU, with 20 years in IT and consulting at Cognizant E&Y, and PwC.",
                    image: "/images/vikas.jpg",
                    socials: {
                      linkedin: "#",
                      twitter: "#",
                      github: "#"
                    }
                  }
                ].map((member, index) => (
                  <AnimatedCard key={index}>
                    <div className=" relative teamSectionCard" >
                      <Image src={member.image} alt={member.name} width={400} height={200} className="w-full h-48 object-contain rounded-lg rounded-t-lg" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-2 text-[#16181e]">{member.name}</h3>
                      <p className="text-[#4a5568] mb-4">{member.role}</p>
                      <div className="flex space-x-4">
                        <Link href={member.socials.linkedin} target="_blank" className="text-[#1955EE] hover:text-[#1644c7]">
                          <FiLinkedin className="w-5 h-5" />
                        </Link>
                        <Link href={member.socials.twitter} target="_blank" className="text-[#1955EE] hover:text-[#1644c7]">
                          <FiTwitter className="w-5 h-5" />
                        </Link>
                        <Link href={member.socials.github} target="_blank" className="text-[#1955EE] hover:text-[#1644c7]">
                          <FiGithub className="w-5 h-5" />
                        </Link>
                      </div>
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

// export const TeamSection = () => {
//   return (
//     <>
//       <ScrollSection>
//             <section id="blog" className="py-20 bg-white">
//               <div className="container mx-auto px-4">
//                 <motion.div
//                   className="text-center mb-16"
//                   initial="initial"
//                   whileInView="animate"
//                   viewport={{ once: true }}
//                   variants={fadeInUp}
//                 >
//                   <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#16181e]">
//                     Meet Our<span className="text-[#1955EE]">Team</span>
//                   </h2>
//                   <p className="text-xl text-[#4a5568] max-w-2xl mx-auto">
//                   Our dedicated professionals work tirelessly to bring innovative solutions to life.
//                   </p>
//                 </motion.div>
//                 <div className="grid md:grid-cols-3 gap-8">
//                   {[
//                     {
//                       title: "ANKUR SHUKLA",
//                       excerpt: "With a B.Tech and M.Tech. from IIT BHU, a Top Rated freelancer on Upwork, excelling in strategy, tech, and marketing",
//                       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//                       icon: <FiZap />
//                     },
//                     {
//                       title: "AMIT JHA",
//                       excerpt: "B.Tech and M.Tech from IIT BHU, built two startups, and assisted 20+ clients in developing tech solutions.",
//                       image: "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
//                       icon: <FiUsers />
//                     },
//                     {
//                       title: "VIKAS SIGNH",
//                       excerpt: "B.Tech from IIT BHU, MS and MBA from LSU, with 20 years in IT and consulting at Cognizant E&Y, and PwC.",
//                       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
//                       icon: <FiCode />
//                     }
//                   ].map((post, index) => (
//                     <AnimatedCard key={index}>
//                       <div className="relative">
//                         <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
//                         <div className="absolute top-4 left-4 bg-white rounded-full p-2">
//                           <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1955EE] bg-opacity-10">
//                             <span className="text-2xl text-[#1955EE]">{post.icon}</span>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <h3 className="font-bold text-xl mb-2 text-[#16181e]">{post.title}</h3>
//                         <p className="text-[#4a5568] mb-4">
//                           {post.excerpt}
//                         </p>
//                         {/* <Link href="#" className="text-[#1955EE] hover:underline inline-flex items-center">
//                           Read More <FiArrowRight className="ml-2 w-4 h-4" />
//                         </Link> */}
//                       </div>
//                     </AnimatedCard>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </ScrollSection>
//     </>
//   )
// }
