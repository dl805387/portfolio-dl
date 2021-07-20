import React from "react";
import '../styles/Footer.css'
import './Icons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {

    return (
        <div className="footer">
            <div className="inner">
            <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="5x" className="iconWhite"/></a>
            <a href="https://www.linkedin.com/in/danny-lin-7a2094197/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="5x" className="iconWhite"/></a>
            <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon="file" size="5x" className="iconWhite file"/></a>
            <a href="https://github.com/dl805387" target="_blank"><FontAwesomeIcon icon="envelope" size="5x" className="iconWhite"/></a>
            </div>
        </div>
    );
}

export default Footer;