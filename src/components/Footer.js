import React from "react";
import '../styles/Footer.css'
import './Icons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import resume from '../pictures/dannylin_resume2021.pdf'

function Footer() {

    return (
        <div className="footer">
            <div className="iconPlusLabel">
                <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" className="iconWhite"/></a>
                <a href="https://github.com/dl805387" target="_blank"><p>Github</p></a>
            </div>
            <div className="iconPlusLabel">
                <a href="https://www.linkedin.com/in/danny805/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="iconWhite"/></a>
                <a href="https://www.linkedin.com/in/danny805/" target="_blank"><p>LinkedIn</p></a>
            </div>
            <div className="iconPlusLabel">
                <a href={resume} target="_blank"><FontAwesomeIcon icon="file-alt" size="2x" className="iconWhite"/></a>
                <a href={resume} target="_blank"><p>Resume</p></a>
            </div>
            <div className="iconPlusLabel" onClick={(e)=>{e.preventDefault(); window.open('mailto:danny805387@gmail.com');}}>
                <FontAwesomeIcon icon="envelope" size="2x" className="iconWhite"/>
                <p>Email</p>
            </div>
        </div>
    );
}

export default Footer;