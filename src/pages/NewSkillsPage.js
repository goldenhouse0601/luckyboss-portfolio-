import React from 'react';
import './NewSkillsPage.css';
const NewSkillsPage = () => {
  const my_skill_description = [
    {
      info: "⚡ Building responsive website front end using ReactJS"
    },
    {
      info: "⚡Developing mobile applications using React JS , Node JS and Material UI"
    },
    {
      info: "⚡ Creating application backend in Node JS & Express JS"
    }
  ];
  const my_skills_data = [
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/392aac11-c493-4fd3-bdc9-ee52acef78af",
      skill_name: "React JS"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/786df4e0-2338-4658-8188-2968deac4ca2",
      skill_name: "JavaScript"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/60c8db7a-1654-4d99-8ed8-15840a5deb0c",
      skill_name: "Typescript"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/8b900862-922a-45bd-96e7-aa4ed6b74840",
      skill_name: "Node JS"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/51fd9e15-0521-4c59-ae6d-4716fe04cff1",
      skill_name: "Express JS"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/970c7956-a31e-4e18-8a20-fc6d152be13a",
      skill_name: "HTML5"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/cd3f1d42-1c8b-4e70-93d7-ec6040e70a8d",
      skill_name: "CSS3"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/983fef07-729f-4033-a761-1304e3ac091a",
      skill_name: "Tailwind"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/306fed65-1032-4d34-874d-8297ed3e63b9",
      skill_name: "Bootstrap"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/3e1827da-ae9e-40e0-853f-a6c1ee9eedf8",
      skill_name: "Material UI"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/559688f9-afff-4643-8dc9-f7a45d026a2a",
      skill_name: "MySQL"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/b3ac001d-a02f-4d70-9182-141891099956",
      skill_name: "Mongodb"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/9f7e2e69-6113-4e7a-9b15-9c7ed91aed36",
      skill_name: "Java"
    },
    {
      img_link: "https://github.com/goldenhouse0601/luckyboss-portfolio-/assets/171920354/123dd038-4490-46ab-beae-351928822bde",
      skill_name: "Git"
    }
  ];

  return (
    <>
      <section id="my_skill" className="dark">
        <div className="my_skills">
          <h2>
            My Skills <span>&</span> Abilities
          </h2>
        </div>
        <div className="section_container_skills_gif">
          <div className="skills_gif_container">
            {my_skill_description?.map((data, index) => (
              <div className="cards" key={index}>
                {data.info}
              </div>
            ))}
          </div>
        </div>
        <div className="contain_div">
          <div className="container_s">
            {my_skills_data?.map((e, index) => (
              <div
                className="skill_box"
                key={index}
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="content_img_container">
                  <img
                    src={e.img_link}
                    style={{ height: "3.5rem" }}
                    loading="lazy"
                  />
                </div>
                <h3>{e.skill_name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSkillsPage;
