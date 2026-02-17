import React from 'react';
import BackButton from '../components/ui/BackButton';
import './SkillTree.css';

import { portfolioData } from '../data/content';

const SkillTree = () => {

    return (
        <div className="skill-tree-page">
            <BackButton />
            
            <h2 className="section-header">SKILL MASTERY</h2>
            
            <div className="skills-container-scroll">
                <div className="skill-category">
                    <h3 className="category-title">CORE TECH</h3>
                    <div className="skills-grid">
                        {portfolioData.skills.core.map((skill, idx) => (
                            <div className="skill-item" key={`core-${idx}`}>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-exp">{skill.exp}%</span>
                                </div>
                                <div className="exp-bar-frame">
                                    <div className="exp-bar-fill" style={{ width: `${skill.exp}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="category-title">WEB DEV</h3>
                    <div className="skills-grid">
                        {portfolioData.skills.web.map((skill, idx) => (
                            <div className="skill-item" key={`web-${idx}`}>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-exp">{skill.exp}%</span>
                                </div>
                                <div className="exp-bar-frame">
                                    <div className="exp-bar-fill" style={{ width: `${skill.exp}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skill-category">
                    <h3 className="category-title">TOOLS</h3>
                    <div className="skills-grid">
                        {portfolioData.skills.tools.map((skill, idx) => (
                            <div className="skill-item" key={`tools-${idx}`}>
                                <div className="skill-info">
                                    <span className="skill-name">{skill.name}</span>
                                    <span className="skill-exp">{skill.exp}%</span>
                                </div>
                                <div className="exp-bar-frame">
                                    <div className="exp-bar-fill" style={{ width: `${skill.exp}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillTree;
