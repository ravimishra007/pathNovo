'use client'

import { IconContext } from 'react-icons'
import { HeaderSection } from './header'
import { HeroSection } from './heroSection'
import { ServiceSection } from './serviceSection'
import { ProgressSection } from './progressSection'
import { ProjectSection } from './projectSection'
import { BlogSection } from './blogSection'
import { ConnectSection } from './connectSection'
import { Footer } from './footer'
import { TeamSection } from './teamSection'



export function PathnovoSolutionLandingComponent() { 

  return (
    <IconContext.Provider value={{ className: "inline-block w-5 h-5" }}>
      <div className="min-h-screen bg-white text-[#16181e]">

        {/* header */}

         <HeaderSection/>
         

       {/* main section */}
        <main className="pt-16">


         <HeroSection/>
         <ServiceSection/>
         <ProgressSection/>
         <ProjectSection/>
         <BlogSection/>
         <TeamSection/>

         <ConnectSection/>

        </main>

        <Footer/>

      </div>
    </IconContext.Provider>
  )
}