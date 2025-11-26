import { FaCertificate } from "react-icons/fa";
import "./Certificates.css";

const Certificates = () => {
  const certificates = [
    {
      title: "Example Certificate",
      issuer: "Issuing Organization",
      date: "Month Year",
      description:
        "Brief description of what this certification covers and demonstrates.",
      credentialUrl: null,
      image: "",
    },
    // Add more certificates here following the same structure
  ];

  return (
    <div className="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="certificates-container">
        <div className="timeline-section">
          <h3>
            <FaCertificate /> Certifications & Awards
          </h3>
          <div className="timeline">
            {certificates.map((cert, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="card-header">
                    <div>
                      <h4>{cert.title}</h4>
                      <h5>{cert.issuer}</h5>
                      <p className="period">{cert.date}</p>
                    </div>
                    {cert.image && (
                      <div className="card-image-wrapper">
                        <img
                          src={cert.image}
                          alt={cert.issuer}
                          className="card-image"
                        />
                      </div>
                    )}
                  </div>
                  <p className="description">{cert.description}</p>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="credential-link"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
