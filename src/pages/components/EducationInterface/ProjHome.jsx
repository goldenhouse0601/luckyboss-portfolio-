import React from 'react';
import Githubcomp from '../FooterInterface/Githubcomp';
import './ProjHome.css';

const ProjHome = () => {
  return (
    <>
      <div className="proj_containar_section">
        <div className="proj_left">
          <h3>
            Projects <span> & </span> Experiences
          </h3>
          <p>
            You can find all of my projects on my profile on Github. You can
            view my activities, contributions and code on these projects. Some
            of these are completed and some are in progress. You can also leave
            comments on the profile and start a discussion. I am always looking
            for new projects and Ideas. You can also reach out to me on any of
            the social media channels mentioned below.
          </p>
          <Githubcomp
            backgroundColor="#512da8"
            shadow="#482e87 0px 0px 9px"
            href="https://github.com/goldenhouse0601/luckyboss-portfolio"
          />
        </div>
        <div className="proj_right">
            <img src="https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/f012b514-d090-453b-b34d-267ea15cacfb" alt="Project Img" />
        </div>
      </div>
    </>
  );
};

export default ProjHome;
