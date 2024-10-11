

const LeftAnimatedCircles = () => {
  const techStack = [
    { name: 'React', imgSrc: '' }, // Central image

    { name: 'Node.js', imgSrc: '/images/img001.svg' },
    { name: 'JavaScript', imgSrc: '/images/img002.svg' },
    { name: 'MongoDB', imgSrc: '/images/img003.jpg' },
    { name: 'GraphQL', imgSrc: '/images/img004.jpg' },

    { name: 'AWS', imgSrc: '/images/img005.svg' },
    { name: 'Docker', imgSrc: '/images/img007.png' },
    { name: 'html', imgSrc: '/images/img008.png' },
    { name: 'css', imgSrc: '/images/img009.png' },

    { name: 'css', imgSrc: '/images/img0010.svg' },
  ];

  return (
    <div className="solar-system">
      {/* Central non-rotating circle with React image */}
      <div className="center-circle">
        <div className="centerImg">
          {/* <img src={techStack[0].imgSrc} alt={techStack[0].name} /> */}
        </div>
      </div>

      {/* Second circle with 4 images, rotating right */}
      <div className="circle outer-circle">
        {techStack.slice(1, 5).map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>

      {/* Third circle with 3 images, rotating left */}
      <div className="circle middle-circle">
        {/* {techStack.slice(5, 8).map((tech, index) => (
          <div key={index} className="">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))} */}
      </div>

      {/* Fourth circle with 4 images, rotating right */}
      <div className="circle inner-circle">
        {techStack.slice(5, 9).map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftAnimatedCircles;
