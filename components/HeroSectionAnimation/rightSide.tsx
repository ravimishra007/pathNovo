import React from 'react';


const RightAnimatedCircles = () => {
  const techStack = [
    { name: 'React', imgSrc: '' }, // Central image

    { name: 'Node.js', imgSrc: '/images/img0013.svg' },
    { name: 'JavaScript', imgSrc: '/images/img0012.png' },
    { name: 'MongoDB', imgSrc: '/images/img0011.png' },
    { name: 'GraphQL', imgSrc: '/images/img0010.svg' },

    { name: 'AWS', imgSrc: '/images/img005.svg' },
    { name: 'Docker', imgSrc: '/images/img007.png' },
    { name: 'html', imgSrc: '/images/img008.png' },
    { name: 'css', imgSrc: '/images/img009.png' },

    { name: 'css', imgSrc: '/images/img0010.svg' },
  ];

  return (
    <>   
    <div className='rightSideAnimation'>
     <div className="rightSideAnimation_solar-system">
      {/* Central non-rotating circle with React image */}
      <div className="rightSideAnimation_center-circle">
        <div className="rightSideAnimation_centerImg">
          {/* <img src={techStack[0].imgSrc} alt={techStack[0].name} /> */}
        </div>
      </div>

      {/* Second circle with 2 images, rotating right */}
      <div className="rightSideAnimation_circle rightSideAnimation_outer-circle">
        {techStack.slice(1, 5).map((tech, index) => (
          <div key={index} className="rightSideAnimation_tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>

      {/* Third circle with 3 images, rotating left */}
      <div className="rightSideAnimation_circle rightSideAnimation_middle-circle">
        {/* {techStack.slice(3, 6).map((tech, index) => (
          <div key={index} className="rightSideAnimation_tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))} */}
      </div>

      {/* Fourth circle with 4 images, rotating right */}
      <div className="rightSideAnimation_circle rightSideAnimation_inner-circle">
        {techStack.slice(5, 9).map((tech, index) => (
          <div key={index} className="rightSideAnimation_tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </>

  );
};

export default RightAnimatedCircles;
