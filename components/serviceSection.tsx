
  import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {FiUsers,FiBarChart2, FiLayers, FiCode, FiPenTool, FiGlobe} from 'react-icons/fi'


const services = [
    { name: 'UI/UX Design', icon: <FiPenTool />, description: 'Create intuitive and visually appealing interfaces that enhance user experience.' },
    { name: 'Web Development', icon: <FiCode />, description: 'Build robust, scalable web applications using cutting-edge technologies.' },
    { name: 'Digital Marketing', icon: <FiBarChart2 />, description: 'Drive growth with data-driven marketing strategies and campaigns.' },
    { name: 'Product Design', icon: <FiLayers />, description: 'Develop innovative products that solve real-world problems and delight users.' },
    { name: 'Cloud Solutions', icon: <FiGlobe />, description: 'Leverage cloud technologies to improve scalability and reduce costs.' },
    { name: 'Consulting', icon: <FiUsers />, description: 'Expert advice to help you navigate the digital landscape and achieve your goals.' }
  ]

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
export const ServiceSection = () => {
  return (
    <>
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
                <div className="grid md:grid-cols-3 gap-8 ">
                  {services.map((service, index) => (
                    <AnimatedCard key={index}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 serviceSection bg-[#1955EE] bg-opacity-10">
                        <span className="text-2xl text-[#1955EE]">{service.icon}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 serviceSection1 text-[#16181e]">{service.name}</h3>
                      <p className="text-[#4a5568] serviceSection1">{service.description}</p>

                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </section>
          </ScrollSection>

    </>
  )
}
