import React from 'react';
import BackButton from '../components/ui/BackButton';
import './SkillTree.css';

import { portfolioData } from '../data/content';

const SkillTree = () => {

    return (
        <div className="skill-tree-page">
            <BackButton />
            
            <h2 className="section-header">TECH STACK</h2>
            
            <div className="skills-container-scroll">
                <div className="skills-grid">
                    {portfolioData.skills.map((skill, idx) => (
                        <div className="skill-item-logo" key={`skill-${idx}`}>
                            <img src={skill.icon} alt={skill.name} className="skill-icon" />
                            <span className="skill-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillTree;
