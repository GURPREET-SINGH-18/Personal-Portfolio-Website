import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from '../../Particle'
import Typing from './Typing'
import Tilt from "react-parallax-tilt";
import AboutmeContainer from '../../components/aboutme/AboutMeContainer';
import Fade from 'react-reveal/Fade';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaFacebookF,FaGoogle } from "react-icons/fa";
import Certification from '../../components/certificate/Certification';
import Projects from '../../components/projects/Projects';
import Contactus from '../../components/contactus/Contactus';

export default function Home() {
    return (
        <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={8} className="home-header">
                            <h1 style={{ paddingBottom: 15, fontSize: '175px' }} className="heading">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> GURPREET SINGH</strong>
                            </h1>

                            <div className="typing-homeclass">
                                <Typing />
                            </div>
                            <div className='sociallink-home'>
                                <ul className="homeaboutsociallinks">
                                    <li className="socialicons">
                                        <a
                                            href="https://github.com/GURPREET-SINGH-18"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.twitter.com/#!/gurpreet_186/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <AiOutlineTwitter />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.linkedin.com/in/gurpreetsingh18601"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.instagram.com/gurpreet_singh_18/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour homesocialicons"
                                        >
                                            <AiFillInstagram />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.facebook.com/profile.php?id=100013495656880"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour homesocialicons"
                                        >
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="mailto:gurpreetsingh18601@gmail.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour homesocialicons"
                                        >
                                            <FaGoogle />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                                
                        </Col>
                        <Col md={4} style={{ paddingBottom: 20 }}>
                            <div className="img-home-main">
                            <Tilt>
                                <Fade cascade>
                                    <img src="./g2.png" alt="home pic" className="img-fluid" />
                                </Fade>
                            </Tilt>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <AboutmeContainer />
            <Certification/>
            <Projects/>
            <Contactus />
        </section>
    )
}
