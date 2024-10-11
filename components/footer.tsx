import React from 'react'
import Image from 'next/image'


export const Footer = () => {
  return (
    <>
            <footer className="bg-[#f9fafb] py-12 border-t border-gray-200 font-outfit">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/path%20vector-s8vIk5Qw4tj3Un2vjESvC6UGaNZlX1.svg" alt="Pathnovo Solution Logo" width={120} height={40} className="mx-auto mb-4" />
              <p className="text-[#4a5568] max-w-2xl mx-auto mb-4 text-lg">
                 A team of IITians building cutting-edge scalable technology at affordable rates.
              </p>
              <p className="text-[#4a5568] text-lg">
              Address:139,HAL Old AIrport Road Kodilhalli Bangalore,India 560008
              </p>
            </div>
          </div>
        </footer>

    </>
  )
}
