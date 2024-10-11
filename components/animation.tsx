import React from 'react'
import LeftAnimatedCircles from './HeroSectionAnimation/leftSide'
import RightAnimatedCircles from './HeroSectionAnimation/rightSide'

export const Animation = () => {
  return (
    <>
    <div className="app-container">
      <div className="left-section" id='left-section'>
        <LeftAnimatedCircles />
      </div>
      <div className="right-section" id='right-section'>
        <RightAnimatedCircles />
      </div>
    </div>
    </>
  )
}
