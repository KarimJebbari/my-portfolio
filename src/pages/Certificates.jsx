import React, { useState } from 'react';
import certificatesData from '../data/certificatesData.json';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">My Certificates & Badges</h2>
        <p className="section-subtitle">
          Professional certifications from Cisco Networking Academy
        </p>
        
        <div className="certificates-grid">
          {certificatesData.map(certificate => (
            <div key={certificate.id} className="certificate-card">
              <div className="certificate-image">
                <img 
                  src={certificate.image} 
                  alt={certificate.title}
                  onClick={() => setSelectedCertificate(certificate)}
                />
                <div className="certificate-overlay">
                  <button 
                    className="view-btn"
                    onClick={() => setSelectedCertificate(certificate)}
                  >
                     View Details
                  </button>
                </div>
              </div>
              
              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <p className="issuer">{certificate.issuer}</p>
                <p className="date">Completed: {certificate.date}</p>
                
                <div className="certificate-links">
                  <a 
                    href={certificate.badgeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="badge-link"
                  >
                    🏅 View Badge
                  </a>
                  {/* <a 
                    href={certificate.verifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="verify-link"
                  >
                     Verify
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedCertificate && (
          <div className="certificate-modal">
            <div className="modal-content">
              <button 
                className="close-btn"
                onClick={() => setSelectedCertificate(null)}
              >
                ✕
              </button>
              
              <div className="modal-body">
                <div className="modal-image">
                  <img 
                    src={selectedCertificate.image} 
                    alt={selectedCertificate.title}
                  />
                </div>
                
                <div className="modal-details">
                  <h3>{selectedCertificate.title}</h3>
                  <p className="issuer">{selectedCertificate.issuer}</p>
                  <p className="date">Completed: {selectedCertificate.date}</p>
                  
                  <div className="skills-gained">
                    <h4>Skills Gained:</h4>
                    <div className="skills-list">
                      {selectedCertificate.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-links">
                    <a 
                      href={selectedCertificate.badgeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-badge-link"
                    >
                      🏅 View Digital Badge
                    </a>
                    {/* <a 
                      href={selectedCertificate.verifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-verify-link"
                    >
                      🔗 Verify Certificate
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;