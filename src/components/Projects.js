import React, { useState, useEffect } from "react";
import mykdrama_home from '../pictures/mykdrama_home.png'
import mykdrama_detail from '../pictures/mykdrama_detail.png'
import mykdrama_list from '../pictures/mykdrama_list.png'
import '../styles/Projects.css'

function Projects(props) {

    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={mykdrama_home} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={mykdrama_detail} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={mykdrama_list} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Projects;