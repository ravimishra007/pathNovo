import React from "react";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};
const ScrollSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export const ConnectSection = () => {
  return (
    <>
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
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
              >
                Ready to Transform Your Digital Presence?
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl mb-8 text-white opacity-90"
              >
                Let's work together to create innovative solutions that elevate
                your business.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  href="https://wa.me/+917525046551"
                  target="_blank"
                  className="animated-buttonNew"
                  // className="bg-white  text-[#1955EE]  px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors inline-flex items-center"
                >
                  {/* Connect Now <FiChevronRight className="ml-2 w-5 h-5" /> */}

                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text">Connect Now</span>
                  <span className="circle"></span>
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollSection>
    </>
  );
};
