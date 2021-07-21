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

    useEffect(() => {
        // error handling just in case document.queryselector is undefined
        if (!document.querySelector('.square-wrapper1') ||
            !document.querySelector('.square-wrapper2') ||
            !document.querySelector('.square-wrapper3') ||
            !document.querySelector('.square-wrapper4') ||
            !document.querySelector('.square-wrapper5') ||
            !document.querySelector('.square-wrapper6') ||
            !document.querySelector('.square-wrapper7')) {
            return;
        }
        const observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square1');

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
        observer1.observe(document.querySelector('.square-wrapper1'));

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square2');

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
        observer2.observe(document.querySelector('.square-wrapper2'));

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square3');

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
        observer3.observe(document.querySelector('.square-wrapper3'));

        const observer4 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square4');

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
        observer4.observe(document.querySelector('.square-wrapper4'));

        const observer5 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square5');

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
        observer5.observe(document.querySelector('.square-wrapper5'));

        const observer6 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square6');

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
        observer6.observe(document.querySelector('.square-wrapper6'));

        const observer7 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.square7');

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
        observer7.observe(document.querySelector('.square-wrapper7'));
    }, []);

    return (
        <div id="skillsSection">
            <p className="sectionHeading">Technical skills I have experience with:</p>

            <div className="skillsList">
                <div className="square-wrapper1">   
                    <Card className="square1 skillCard">
                        <Card.Img variant="top" src={js_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="skillName">JavaScript</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper2">   
                    <Card className="square2 skillCard">
                        <Card.Img variant="top" src={html_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">HTML</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper3">   
                    <Card className="square3 skillCard">
                        <Card.Img variant="top" src={css_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">CSS</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper4">   
                    <Card className="square4 skillCard">
                        <Card.Img variant="top" src={react_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">ReactJS</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper5">   
                    <Card className="square5 skillCard">
                        <Card.Img variant="top" src={java_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">Java</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper6">   
                    <Card className="square6 skillCard">
                        <Card.Img variant="top" src={python_icon} />
                        <ListGroup className="list-group-flush">
                            <ListGroupItem  className="skillName">Python</ListGroupItem>
                        </ListGroup>
                    </Card>
                </div>

                <div className="square-wrapper7">   
                    <Card className="square7 skillCard">
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