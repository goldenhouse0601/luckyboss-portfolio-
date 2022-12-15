import React from "react";
import "./Certificates.css";
import my_certificates_data from "../assets/Certificates_data";
function Certificates() {
  return (
    <>
      <div className="my_certificates_container">
        <div className="certificates_header_container">
          <h2>Certifications</h2>
          <div className="certificates_data_container">
            {my_certificates_data.map((data, index) => {
              return (
                <div className="cert_data_container" key={index}>
                  <div className="cert_collection">
                    <img src={data.cert_provider_img_link} alt="certificates" />
                  </div>
                  <div className="overlay_section">
                    <h3>{data.cert_title_name}</h3>
                    <h4>{data.cert_time_stamp}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;

// proj rest api
// {
//     index: 1,
//     cert_name: "",
//     cert_code_link: "",
//     cert_live_link: "",
//   },
