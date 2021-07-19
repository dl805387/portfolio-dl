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
            <h1 className="projectTitle">Projects</h1>

            <div className="project">
                <div id="carouselExampleIndicators1" class="carousel slide carouselDrama" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
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
                    <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div className="projDesc">
                    <h1 className="projectSubtitle">Encryptor</h1>
                    <ul>
                        <li>This program allows the user to encrypt and decrypt passwords/messages</li>
                        <li>Encryption is done using a combination of UTF-8 character encoding and caesar cipher</li>
                        <li>Pandas is used to read the encryption key csv file and UTF-8 character-byte mapping</li>
                        <li>GUI is built using the Tkinter library</li>
                    </ul>  
                </div>
            </div>

            <div className="project">
                <div id="carouselExampleIndicators4" class="carousel slide carouselEncryptor" data-ride="carousel">
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

                <div className="projDesc">
                    <h1 className="projectSubtitle">Encryptor</h1>
                    <ul>
                        <li>This program allows the user to encrypt and decrypt passwords/messages</li>
                        <li>Encryption is done using a combination of UTF-8 character encoding and caesar cipher</li>
                        <li>Pandas is used to read the encryption key csv file and UTF-8 character-byte mapping</li>
                        <li>GUI is built using the Tkinter library</li>
                    </ul>  
                </div>
            </div>

            <div className="project">
                <div id="carouselExampleIndicators2" class="carousel slide carousel2048" data-ride="carousel">
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

                <div className="projDesc">
                    <h1 className="projectSubtitle">Encryptor</h1>
                    <ul>
                        <li>This program allows the user to encrypt and decrypt passwords/messages</li>
                        <li>Encryption is done using a combination of UTF-8 character encoding and caesar cipher</li>
                        <li>Pandas is used to read the encryption key csv file and UTF-8 character-byte mapping</li>
                        <li>GUI is built using the Tkinter library</li>
                    </ul>  
                </div>
            </div>

            <div className="project">
                <div id="carouselExampleIndicators3" class="carousel slide carouselJournal" data-ride="carousel">
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

                <div className="projDesc">
                    <h1 className="projectSubtitle">Encryptor</h1>
                    <ul>
                        <li>This program allows the user to encrypt and decrypt passwords/messages</li>
                        <li>Encryption is done using a combination of UTF-8 character encoding and caesar cipher</li>
                        <li>Pandas is used to read the encryption key csv file and UTF-8 character-byte mapping</li>
                        <li>GUI is built using the Tkinter library</li>
                    </ul>  
                </div>
            </div>
        </div>
    );
}

export default Projects;