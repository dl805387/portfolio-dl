import React from "react";
import '../styles/Projects.css'
import mykdrama_home from '../pictures/mykdrama_home.png'
import mykdrama_detail from '../pictures/mykdrama_detail.png'
import mykdrama_list from '../pictures/mykdrama_list.png'
import play_2048 from '../pictures/2048_play.png'
import gameover_2048 from '../pictures/2048_gameover.png'
import journal_login from '../pictures/journal_login.png'
import journal_workouts from '../pictures/journal_workouts.png'
import encryptor_encrypt from '../pictures/encryptor_encrypt.png'
import encryptor_decrypt from '../pictures/encryptor_decrypt.png'

function Projects() {

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
                        <img class="d-block w-100 ww" src={mykdrama_home} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 ww" src={mykdrama_detail} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 ww" src={mykdrama_list} alt="Third slide"></img>
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

            <p>hol up</p>

            <div id="carouselExampleIndicators2" class="carousel slide carousal2048" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators2" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={play_2048} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={gameover_2048} alt="Second slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <p>hol up again</p>

            <div id="carouselExampleIndicators3" class="carousel slide carousalJournal" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators3" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={journal_login} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={journal_workouts} alt="Second slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <p>hol up final</p>

            <div id="carouselExampleIndicators4" class="carousel slide carousalEncryptor" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators4" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={encryptor_encrypt} alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={encryptor_decrypt} alt="Second slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Projects;