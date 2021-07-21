import React from "react";
import '../styles/Footer.css'
import './Icons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {

    return (
        <div className="footer">
            <div className="iconPlusLabel">
                <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" className="iconWhite"/></a>
                <a href="https://github.com/dl805387" target="_blank"><p>Github</p></a>
            </div>
            <div className="iconPlusLabel">
                <a href="https://www.linkedin.com/in/danny-lin-7a2094197/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="iconWhite"/></a>
                <a href="https://www.linkedin.com/in/danny-lin-7a2094197/" target="_blank"><p>LinkedIn</p></a>
            </div>
            <div className="iconPlusLabel">
                <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon="file" size="2x" className="iconWhite"/></a>
                <a href="https://github.com/dl805387" target="_blank"><p>Resume</p></a>
            </div>
            <div className="iconPlusLabel">
                <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon="envelope" size="2x" className="iconWhite"/></a>
                <a href="https://github.com/dl805387" target="_blank"><p>Email</p></a>
            </div>
        </div>
    );
}

export default Footer;