import React from "react";
import '../styles/About.css'
import me from '../pictures/me.png'

function About() {

    return (
        <div className="about">
            <img className="me" src={me} alt="picture of me"></img>
            <p>"Temporary gentlemen" is a colloquial term referring to male officers of the British Army who held temporary
                (or war-duration) commissions, particularly when such men came from outside the traditional officer class. 
                Historically the officers of the British Army were drawn from the gentry and upper middle classes. The First 
                World War required a rapid expansion of the officer corps and more than 200,000 additional officers were 
            </p>
        </div>
    );
}

export default About;