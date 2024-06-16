import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Githubcomp from './Githubcomp';
import './BottomNav.css';

const BottomNav = () => {
  const rootData = [
    {
      nav_link: "/#home_page",
      navbar_name: "Home",
      another_page: false,
    },
    {
      nav_link: "/#about_myself",
      navbar_name: "About Myself",
      another_page: false,
    },
    {
      nav_link: "/#my-work",
      navbar_name: "Projects & Experience",
      another_page: false,
    },
    {
      nav_link: "/tech/skill",
      navbar_name: "Skills & Abilities",
      another_page: true,
    },
    // {
    //   nav_link: "/tech/education",
    //   navbar_name: "Education & Certifications",
    //   another_page: true,
    // },
    // {
    //   nav_link: "/contact-me",
    //   navbar_name: "Contact Me",
    //   another_page: true,
    // }
  ];
  const personal_info_data= [
    {
      icon_class: "fa-solid fa-envelope",
      ic_color: "rgb(0, 131, 143)",
      data_value: "goldenhouse0601@gmail.com"
    },
    {
      icon_class: "fa-sharp fa-solid fa-location-dot",
      ic_color: "rgb(34, 119, 0)",
      data_value: "Sonora, Mexico - 83449"
    }
  ];

  return (
    <>
      <div className="bottom_nav_container dark">
        <div className="bottom_nav_section">
          <div className="bot_nav_left">
            <div className="bot_left_header">
              <HashLink
                to="/login"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <h3>LuckyBoss | Portfolio</h3>
              </HashLink>
            </div>
            <div className="bot_middle_info">
              <p className="basic_info">
                Need any help with your projects? contact me at the places
                mentioned below. I will try to get back to you as fast as I can.
              </p>
              <p className="f_info">Follow me for more such Projects.</p>
            </div>
            <div>
              <Githubcomp
                href="https://github.com/goldenhouse0601"
                shadow="#482e87 0px 0px 13px"
              />
            </div>
          </div>
          <div className="bot_nav_middle">
            <div className="bot_middle_header">
              <h3>Quick Links</h3>
            </div>
            <div className="bot_nav">
              {rootData.map((data, index) => {
                return (
                    <HashLink
                      key={index}
                      to={data.nav_link}
                      onClick={() => {

                        if (data.another_page === true)
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth',
                          });
                      }}
                    >
                      <i className="fa-solid fa-angles-right"></i>
                      <p> {data.navbar_name}</p>
                    </HashLink>
                );
              })}
            </div>
          </div>
          <div className="bot_nav_right">
            <div className="bot_right_header">
              <h3>Contact Info</h3>
            </div>
            <div className="bot_contact_info">
              <div className="bot_cdiv">
                {personal_info_data.map((e, i) => {
                  return (
                    <div className="contact_me_here" key={i}>
                      <i
                        className={e.icon_class}
                        style={{ color: e.ic_color }}
                      ></i>
                      <p>{e.data_value}</p>
                    </div>
                  );
                })}
              </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
