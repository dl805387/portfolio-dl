import React, { useEffect } from "react";
import '../styles/Skills.css';
import Card from 'react-bootstrap/Card'
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import js_icon from "../pictures/js_icon.png"
import html_icon from "../pictures/html_icon.png"
import css_icon from "../pictures/css_icon.png"
import react_icon from "../pictures/react_icon.png"
import java_icon from "../pictures/java_icon.png"
import python_icon from "../pictures/python_icon.png"
import mysql_icon from "../pictures/mysql_icon.png"

function Skills() {

    // if element comes into view, then a class will be added for animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const square = entry.target.querySelector('.square');

            if (!square.classList) {
                return;
            }
      
            if (entry.isIntersecting) {
                square.classList.add('square-animation');
                return;
            }

            square.classList.remove('square-animation');
        });
    });

    useEffect(() => {
        const boxElList = document.querySelectorAll('.square-wrapper');
        // if document.queryselector is not undefined, then the observer will listen to each element
        if (!boxElList) {
            return;
        } else {
            boxElList.forEach((el) => {
                observer.observe(el);
            });
        }
    }, []);

    return (
        <div id="skillsSection">
            <p className="sectionHeading">Technical skills I have experience with:</p>

            <div className="skillsList">
                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={js_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="skillName">JavaScript</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={html_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">HTML</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={css_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">CSS</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={react_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">ReactJS</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={java_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">Java</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={python_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">Python</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper">   
                    <Card className="square skillCard">
                        <Card.Img variant="top" src={mysql_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">MySQL</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Skills;