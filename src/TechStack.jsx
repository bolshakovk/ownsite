import React from 'react';
import { useState } from 'react';
import { Icon } from '@iconify/react';

function TechStack({ darkMode, themeToggle }) {
    const [backendContentVisible, setBackendContentVisible] = useState(false);
    const [frontendContentVisible, setFrontendContentVisible] = useState(false);
  
    const toggleBackendContent = () => {
      setBackendContentVisible(!backendContentVisible);
      // Скрыть контент Фронтенда при открытии контента Бэкенда
      if (frontendContentVisible) {
        setFrontendContentVisible(false);
      }
    };
  
    const toggleFrontendContent = () => {
      setFrontendContentVisible(!frontendContentVisible);
      // Скрыть контент Бэкенда при открытии контента Фронтенда
      if (backendContentVisible) {
        setBackendContentVisible(false);
      }
    };

    return (
        <div className='content'>
            <div className={`hero-stack ${darkMode ? 'dark-mode' : ''}`}>
                <div className="skill_container">
                    <div className="icon-skill-container">
                        <div className='toggle-backend-div'>
                            <h2 className='toggle-backend-h' onClick={toggleBackendContent} style={{ cursor: 'pointer' }}>Бэкенд</h2>
                        </div>
                        <div className='tech-stack-content-container'>
                            <div className={`skills-list ${backendContentVisible ? 'visible' : ''}`}>
                                <li className="skill">
                                    <span className="skill-name">Java</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">PostgreSql</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">Liquibase</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">JWT</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">Maven</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">Spring</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">RabbitMQ</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">Docker</span>
                                </li>
                            </div>
                            <div className={`backend-icon-grid ${backendContentVisible ? 'visible' : ''}`}>
                                <Icon icon="bxl:java" className="icon" />
                                <Icon icon="akar-icons:postgresql-fill" className="icon" />
                                <Icon icon="simple-icons:liquibase" className="icon" />
                                <Icon icon="logos:jwt-icon" className="icon" />
                                <Icon icon="simple-icons:apachemaven" className="icon" />
                                <Icon icon="simple-icons:spring" className="icon" />
                                <Icon icon="simple-icons:rabbitmq" className="icon" />
                                <Icon icon="devicon-plain:docker-wordmark" className="icon" />
                            </div>
                        </div>
                    </div>


                    <div className='toggle-backend-div'>
                            <h2 className='toggle-backend-h' onClick={toggleFrontendContent} style={{ cursor: 'pointer' }}>Фронтенд</h2>
                        </div>
                        <div className='tech-stack-content-container'>
                            <div className={`skills-list ${frontendContentVisible ? 'visible' : ''}`}>
                                <li className="skill">
                                    <span className="skill-name">Html</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">CSS</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">JS</span>
                                </li>
                                <li className="skill">
                                    <span className="skill-name">REACT</span>
                                </li>
                            </div>
                            <div className={`frontend-icon-grid ${frontendContentVisible ? 'visible' : ''}`}>
                                <Icon icon="akar-icons:html-fill"className="icon" />
                                <Icon icon="akar-icons:css-fill"className="icon" />
                                <Icon icon="fa6-brands:js"className="icon" />
                                <Icon icon="akar-icons:react-fill"className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default TechStack;