import React from "react";
import '../styles/About.css'
import me from '../pictures/me_circle.jpg'
import resume from '../pictures/dannylin_resume2021.pdf'
import './Icons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function About() {

    const renderTooltipGit = (props) => (
        <Tooltip id="tooltip" {...props}>
            Github
        </Tooltip>
    );

    const renderTooltipLinkedIn = (props) => (
        <Tooltip id="tooltip" {...props}>
            LinkedIn
        </Tooltip>
    );

    const renderTooltipResume = (props) => (
        <Tooltip id="tooltip" {...props}>
            Resume
        </Tooltip>
    );

    const renderTooltipEMail = (props) => (
        <Tooltip id="tooltip" {...props}>
            Email
        </Tooltip>
    );

    return (
        <div className="aboutSection">
            <div className="aboutBody">
                <div className="introHeading">
                    <img className="me" src={me} alt="picture of me"></img>
                    <h1>About Me</h1>
                </div>
                <p>
                    Hi, I'm Danny Lin. I am a computer science student at UNC Chapel Hill. 
                    My hobbies are watching variety shows, listening to podcasts, watching tv-shows, and going to the gym.
                    I have experience programming in Java, Javascript, and Python.
                    I also have experience with working on programming projects including web development, software development, using APIs and databases.
                    Check out my projects!
                </p>

                <div className="contactRow">
                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipGit}
                        >
                            <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>

                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipLinkedIn}
                        >
                            <a href="https://www.linkedin.com/in/danny805/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>

                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipResume}
                        >
                            <a href={resume} target="_blank"><FontAwesomeIcon icon="file-alt" size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>

                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipEMail}
                        >
                            <FontAwesomeIcon icon="envelope" size="2x" className="contactIcon" onClick={(e)=>{e.preventDefault(); window.open('mailto:danny805387@gmail.com');}}/>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <a href="#skillsSection"><FontAwesomeIcon icon="angle-double-down" size="2x" className="downArrow"/></a>
        </div>
    );
}

export default About;