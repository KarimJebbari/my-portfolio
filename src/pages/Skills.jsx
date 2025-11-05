import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap,
  FaPhp, FaNodeJs, FaPython,
  FaGitAlt, FaFigma, FaRocket,
  FaMicrosoft, FaAws, FaDocker
} from 'react-icons/fa';
import {
  SiLaravel, SiMysql, SiMongodb,
  SiFirebase, SiHeroku, SiNetlify
} from 'react-icons/si';
import skillsData from '../data/skillsData.json';
import './Skills.css';

const Skills = () => {
  const renderSkillIcon = (skill) => {
    const iconProps = {
      className: "skill-icon",
      style: { color: skill.color }
    };

    switch(skill.icon) {
      case 'FaHtml5': return <FaHtml5 {...iconProps} />;
      case 'FaCss3Alt': return <FaCss3Alt {...iconProps} />;
      case 'FaJs': return <FaJs {...iconProps} />;
      case 'FaReact': return <FaReact {...iconProps} />;
      case 'FaBootstrap': return <FaBootstrap {...iconProps} />;
      
      case 'SiLaravel': return <SiLaravel {...iconProps} />;
      case 'FaPhp': return <FaPhp {...iconProps} />;
      case 'FaNodeJs': return <FaNodeJs {...iconProps} />;
      case 'FaPython': return <FaPython {...iconProps} />;
      
      case 'SiMysql': return <SiMysql {...iconProps} />;
      case 'SiMongodb': return <SiMongodb {...iconProps} />;
      
      case 'FaAws': return <FaAws {...iconProps} />;
      case 'FaDocker': return <FaDocker {...iconProps} />;
      case 'SiFirebase': return <SiFirebase {...iconProps} />;
      case 'SiHeroku': return <SiHeroku {...iconProps} />;
      case 'SiNetlify': return <SiNetlify {...iconProps} />;

      case 'FaGitAlt': return <FaGitAlt {...iconProps} />;
      case 'FaMicrosoft': return <FaMicrosoft {...iconProps} />;
      case 'FaFigma': return <FaFigma {...iconProps} />;
      case 'FaRocket': return <FaRocket {...iconProps} />;
      
      default: return <div className="skill-icon">⚡</div>;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
        
        <div className="skills-container">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      {renderSkillIcon(skill)}
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;