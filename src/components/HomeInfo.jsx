import React from 'react'
import { Link } from 'react-router-dom';

const GlowButton = ({ text, link, color }) => (

  <Link to={link} className={`glow-button ${color}`}>
    {text}
  </Link>


);


const HomeInfo = ({ currentStage }) => {
  const renderContent = (stage) => {
    if (stage === 1) {
      return (
        <div>
          <p className='typing text-baby-blue caret-baby-blue text-center justify-center flex sm:text-xs text-base'>hello, i am </p>
          <h1 className="glow-text text-center justify-center flex">shareen</h1>
          <p className='typing text-baby-blue caret-baby-blue sm:text-xs text-base '>
            a creative technologist
          </p>
          <br />
          <p className='typing text-baby-blue caret-baby-blue sm:text-xs text-center text-base '>
            and developer
          </p>
        </div>
      );
    } else if (stage === 2) {
      return (
        <div>
          <p className='typing text-baby-blue sm:text-s '>
            i am a multipassionate creative developer,<br />
            illustrator and 3D artist
          </p>
          <br />

          <GlowButton
            text='learn more'
            link='/about'
            color='blue'
          />
        </div>
      );
    } else if (stage === 3) {
      return (
        <div>
          {/* add a 3d image looking thing here */}
          <p className='typing text-baby-blue sm:text-s '>
            developed skills over the years <br />
            and put them to use <br />
            look through them here
          </p>
          <br />

          <GlowButton
            text='projects'
            link='/projects'
            color='blue' // Optional: Set color
          />
        </div>
      );
    } else if (stage === 4) {
      return (
        <div>
          {/* add a 3d image looking thing here */}
          <p className='typing text-baby-blue sm:text-s '>
            need help with a project?
          </p>
          <br />

          <GlowButton
            text='contact me'
            link='/contact'
            color='blue' // Optional: Set color
          />
        </div>
      );
    }

  };
  return (
    <>
      {currentStage === 1 && <div className="stage-1">{renderContent(1)}</div>}
      {currentStage === 2 && <div className="stage-2">{renderContent(2)}</div>}
      {currentStage === 3 && <div className="stage-3">{renderContent(3)}</div>}
      {currentStage === 4 && <div className="stage-4">{renderContent(4)}</div>}
    </>
  );
};

export default HomeInfo;
