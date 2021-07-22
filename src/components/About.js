import React from "react";
import '../styles/About.css'
import me from '../pictures/me.png'
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
                <p>"Temporary gentlemen" is a colloquial term referring to male officers of the British Army who held temporary
                    (or war-duration) commissions, particularly when such men came from outside the traditional officer class. 
                    Historically the officers of the British Army were drawn from the gentry and upper middle classes. The First 
                    World War required a rapid expansion of the officer corps and more than 200,000 additional officers were 
                </p>

                <div className="contactRow">
                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipGit}
                        >
                            <a href="https://github.com/dl805387/myKdrama" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>

                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipLinkedIn}
                        >
                            <a href="https://www.linkedin.com/in/danny-lin-7a2094197/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>

                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipResume}
                        >
                            <a href="https://github.com/dl805387/myKdrama" target="_blank"><FontAwesomeIcon icon="file-alt" size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>

                    <div className="overlayContainer">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltipEMail}
                        >
                            <a href="https://github.com/dl805387/myKdrama" target="_blank"><FontAwesomeIcon icon="envelope" size="2x" className="contactIcon"/></a>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <a href="#skillsSection"><FontAwesomeIcon icon="angle-double-down" size="2x" className="downArrow"/></a>
        </div>
    );
}

export default About;