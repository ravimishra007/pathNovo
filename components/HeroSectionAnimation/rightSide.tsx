import React from 'react';


const RightAnimatedCircles = () => {
  const techStack = [
    { name: 'React', imgSrc: '/images/react.png' }, // Central image
    { name: 'Node.js', imgSrc: '/images/nodejs.png' },
    { name: 'JavaScript', imgSrc: '/images/js.png' },
    { name: 'MongoDB', imgSrc: '/images/mongodb.png' },
    { name: 'GraphQL', imgSrc: '/images/graphql.png' },
    { name: 'AWS', imgSrc: '/images/aws.png' },
    { name: 'Docker', imgSrc: '/images/docker.png' },
  ];

  return (
    <>   
    <div className='rightSideAnimation'>
     <div className="rightSideAnimation_solar-system">
      {/* Central non-rotating circle with React image */}
      <div className="rightSideAnimation_center-circle">
        <div className="rightSideAnimation_centerImg">
          <img src={techStack[0].imgSrc} alt={techStack[0].name} />
        </div>
      </div>

      {/* Second circle with 2 images, rotating right */}
      <div className="rightSideAnimation_circle rightSideAnimation_outer-circle">
        {techStack.slice(1, 3).map((tech, index) => (
          <div key={index} className="rightSideAnimation_tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>

      {/* Third circle with 3 images, rotating left */}
      <div className="rightSideAnimation_circle rightSideAnimation_middle-circle">
        {techStack.slice(3, 6).map((tech, index) => (
          <div key={index} className="rightSideAnimation_tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>

      {/* Fourth circle with 4 images, rotating right */}
      <div className="rightSideAnimation_circle rightSideAnimation_inner-circle">
        {techStack.slice(1, 5).map((tech, index) => (
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
