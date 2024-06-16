import React from 'react';
import { HashLink } from 'react-router-hash-link';
import 'font-awesome/css/font-awesome.min.css';
import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { BiConversation } from 'react-icons/bi';
import { TfiControlForward } from 'react-icons/tfi';
import { RxDashboard } from 'react-icons/rx';
import { MdLightMode} from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {

  const isDarkMode = 1;
  const rootData = [
    {
      nav_link: "/#home_page",
      navbar_name: "Home",
      another_page: false,
      nav__icon: "AiOutlineHome"
    },
    {
      nav_link: "/#about_myself",
      navbar_name: "About Myself",
      another_page: false,
      nav__icon: "TfiControlForward"
    },
    {
      nav_link: "/#my-work",
      navbar_name: "Projects & Experience",
      another_page: false,
      nav__icon: "RxDashboard"
    },
    {
      nav_link: "/tech/skill",
      navbar_name: "Skills & Abilities",
      another_page: true,
      nav__icon: "RiCodeSSlashLine"
    },
    // {
    //   nav_link: "/tech/education",
    //   navbar_name: "Education & Certifications",
    //   another_page: true,
    //   nav__icon: "AiOutlineSafetyCertificate"
    // },
    // {
    //   nav_link: "/contact-me",
    //   navbar_name: "Contact Me",
    //   another_page: true,
    //   nav__icon: "BiConversation"
    // }
  ];
  return (
    <>
      <div className={`nav-container ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="logo">
          <HashLink to="/#home_page" className="nav__logo">
              <img src="https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/ba74570f-d6cf-436a-b2ea-ddc330e3340e" alt="logo" />
          </HashLink>
        </div>
        <div
          className="links nav-bg nav-bg"
          style={{paddingRight: 50}}
        >
          <div className="MenuItems ">
            {rootData.map((data, index) => {
              const iconComponents = {
                AiOutlineHome: AiOutlineHome,
                TfiControlForward: TfiControlForward,
                RxDashboard: RxDashboard,
                RiCodeSSlashLine: RiCodeSSlashLine,
                AiOutlineSafetyCertificate: AiOutlineSafetyCertificate,
                BiConversation: BiConversation,
                MdLightMode: MdLightMode,
              };
              const IconComponent = iconComponents[data.nav__icon];

              return (
                <HashLink
                  className={'navbtn'}
                  key={index}
                  to={data.nav_link}
                  onClick={() => {
                    if (data.another_page === true)
                      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                  }}
                >
                  <span
                    id="navIcons"
                    style={{
                      alignItems: 'center',
                      paddingBottom: '1px',
                      width: '39px',
                      height: '39px',
                      display: index === 6 ? 'flex' : 'none',
                    }}
                  >
                  <IconComponent />
                  </span>
                  {data.navbar_name}
                </HashLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
