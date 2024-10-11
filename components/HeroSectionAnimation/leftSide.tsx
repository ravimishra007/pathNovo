

const LeftAnimatedCircles = () => {
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
    <div className="solar-system">
      {/* Central non-rotating circle with React image */}
      <div className="center-circle">
        <div className="centerImg">
          <img src={techStack[0].imgSrc} alt={techStack[0].name} />
        </div>
      </div>

      {/* Second circle with 2 images, rotating right */}
      <div className="circle outer-circle">
        {techStack.slice(1, 3).map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>

      {/* Third circle with 3 images, rotating left */}
      <div className="circle middle-circle">
        {techStack.slice(3, 6).map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>

      {/* Fourth circle with 4 images, rotating right */}
      <div className="circle inner-circle">
        {techStack.slice(1, 5).map((tech, index) => (
          <div key={index} className="tech-icon-container">
            <img src={tech.imgSrc} alt={tech.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftAnimatedCircles;
