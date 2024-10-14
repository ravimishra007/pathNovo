import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiZap, FiBarChart2, FiCode,FiStar,} from 'react-icons/fi'


const process = [
    { name: 'Discovery', icon: <FiStar />, description: 'We start by understanding your business goals and challenges.' },
    { name: 'Strategy', icon: <FiBarChart2 />, description: 'Our team develops a tailored strategy to meet your objectives.' },
    { name: 'Implementation', icon: <FiCode />, description: 'We bring your vision to life with cutting-edge technology.' },
    { name: 'Optimization', icon: <FiZap />, description: 'Continuous improvement to maximize your digital performance.' },
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



export const ProgressSection = () => {
  return (
    <>
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
                <div className="grid md:grid-cols-4 gap-8 ">
                  {process.map((step, index) => (
                    <AnimatedCard key={index}>
                      <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto bg-[#1955EE] bg-opacity-10">
                        <span className="text-3xl text-[#1955EE]">{step.icon}</span>
                      </div>
                      <h3 className="font-bold text-xl mb-2 text-[#16181e] text-center">{step.name}</h3>
                      <p className="text-[#4a5568]  !w-full m-auto h-auto   text-center">{step.description}</p>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </section>
          </ScrollSection>

    </>
  )
}
