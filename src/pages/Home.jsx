import React from 'react';
import './Home.css';

const Home = () => (
    <section id="home" className="home-section">
        <div className="home-container">
            <div className="home-content">
                <div className="home-text">
                    <div className='test'>
                        <h1>Hi, I'm <span className="highlight">Karim Jebbari</span></h1>
                    </div>
                    <h2>Full Stack Web Developer</h2>

                    <div className="professional-badge">
                        <div className="badge-header">
                            <div className="badge-icon">🎓</div>
                            <div className="badge-title">
                                <h4>Certified Developer</h4>
                                <p>OFPPT Technicien Spécialisé</p>
                            </div>
                        </div>
                        <div className="badge-details">
                            <span>Web Full Stack Development</span>
                            <small> 2023 - 2025</small>
                        </div>
                    </div>

                    <p className="intro-text">
                        Certified Full Stack Developer specialized in creating modern web applications
                        using Laravel, React, and modern databases. Passionate about clean code
                        and user-friendly experiences.
                    </p>

                    <p className="german-text">
                        "Ich bin ein Full Stack Webentwickler, spezialisiert auf Backend- und Frontend-Entwicklung mit Erfahrung in Laravel, React und SQL."
                    </p>

                    <div className="home-buttons">
                        <a href="#projects" className="btn btn-primary">View My Projects</a>
                        <a href="#certificates" className="btn btn-secondary">See My Certificates</a>
                    </div>
                </div>

                <div className="home-image">
                    <img
                        src="/karim_picture3.jpg"
                        // alt="Karim Jebbari - Full Stack Developer"
                        className="profile-image" />
                </div>
            </div>
        </div>
    </section>
);

export default Home;