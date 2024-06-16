import React, { useContext, useState } from 'react';
import ProjHome from './components/EducationInterface/ProjHome';
import { ServiceContext } from '../ServiceContext';
import { HashLink } from 'react-router-hash-link';
import './ProjectExPage.css';

const ProjectExPage = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const utilData = [
    {
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },
    {
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },{
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },{
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },{
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },{
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },{
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },{
      project_name: "Dental-Clinic Web-Application",
      project_image: "https://github.com/ganraj21/ganraj21/assets/89139437/9b6adc31-444e-46d9-a5c0-4e5b3d07c508",
      proj_code_like: "https://github.com/ganraj21/Dental_Clinic",
      proj_live_link: "https://omdentalclinic.vercel.app/"
    },
  ];

  const visibleCards = utilData.slice(0, 5);
  
  return (
    <div>
      <div
        className="work_page dark"
        id="my-work"
      >
        <div className="proj_component">
          <ProjHome />
        </div>
        <div className="project_work_page">
          {visibleCards?.map((e, index) => (
            <div
              className="section"
              key={index}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <div className="pcontainer">
                <img src={e.project_image} alt="project Images" />
                <div className="proj_header">
                  <h3>{e.project_name}</h3>
                </div>
                <div className="proj_btns">
                  <a
                    href={e.proj_code_like}
                    target={e.proj_code_like !== '#' ? '_blank' : ''}
                    rel="noreferrer"
                  >
                    <button className="proj_code">Project Code</button>
                  </a>
                  <a
                    href={e.proj_live_link}
                    target={e.proj_live_link !== '#' ? '_blank' : ''}
                    rel="noreferrer"
                  >
                    <button className="proj_live">Live Project</button>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {showAllCards && (
            <>
              {utilData.slice(6).map((e, index) => (
                <div
                  className="section"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div
                    className="pcontainer dark"
                  >
                    <img src={e.project_image} alt="project Images" />
                    <div className="proj_header">
                      <h3>{e.project_name}</h3>
                    </div>
                    <div className="proj_btns">
                      <a href={e.proj_code_like}>
                        <button className="proj_code">Project Code</button>
                      </a>
                      <a href={e.proj_live_link}>
                        <button className="proj_live">Live Project</button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <div
                style={{
                  width: '350px',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <HashLink
                  onClick={() => setShowAllCards(false)}
                  to={'/#my-work'}
                  data-aos="fade-down"
                  data-aos-duration="2000"
                  className="view__btn"
                >
                  Okey,I got it
                </HashLink>
              </div>
            </>
          )}

          {!showAllCards && (
            <div
              style={{
                width: '350px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => setShowAllCards(true)}
                data-aos="fade-down"
                data-aos-duration="2000"
                className="view__btn"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectExPage;
