import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section
      className="about_me dark"
      id="about_myself"
    >
      <div className="container_01">
        <div className="my_img">
          <img
            id="img"
            src="https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/9f4bc214-1993-49f8-bbe1-247f91edb2c6"
            alt="profile_image"
          />
        </div>
        <div className="my_info">
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            I am a Developer and Designer based in Pune, India 🌍. I have always
            been fascinated by Knowledge 🧠 and learning new things. Throughout
            my life, I have spoken, read and written in English fluently.
            Currently, I'm exploring Restful API's 👩🏾‍💻 as part of my skillset.
            When not working on projects or spending time with family or
            friends, you can usually find me watching YouTube videos 💻 or
            listening to music 🎧. As an experienced Web developer who is
            skilled in many areas of development 😎 (responsive design being
            one),I would love to work with businesses both small and large!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
