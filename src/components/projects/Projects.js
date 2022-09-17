import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import c from '../../images/c.png'
import ec from '../../images/ecommerce.gif'
import ba from '../../images/book-animation.gif'
import wa from '../../images/weather-app-animation.gif'
import ci from '../../images/onboarding.gif'
import { FaPlay, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
    return (
        <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="certificate-description d-flex justify-content-start">
                            <Zoom left cascade>
                                <h1 className='aboutme-heading'>
                                    Projects
                                </h1>
                            </Zoom>
                        </Col>
                        <Col md={12} className="mt-3">
                            <Row className='g-4'>
                                <Col md={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    G-Mart
                                                </h2>
                                                <img src={ec} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/G-mart-E-commerce-website'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/G-mart-E-commerce-website'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: 'rgb(147 71 192)',
                                                    fontWeight:600
                                                }}
                                            >
                                                This website is a e-commerce platform like amazon or flipKart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                Django, HTML, CSS, JS
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col md={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    Guru Library
                                                </h2>
                                                <img src={ba} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/Library-book-management-system'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/Library-book-management-system'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                This was my third project in Django. In this project I also performed all the CRUD operation with student information and book information. here we can also able to see which book is borrowed by which student and we can also update the status of borrowed book.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                Django, HTML, CSS, JS
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col md={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    Weather Gyan
                                                </h2>
                                                <img src={wa} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://gurpreet-singh-18.github.io/Weather_gyan_react/'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/Weather_gyan_react'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                This website is a Weather App. Which help to see current and weather forecast monthly and hourly across the globe. This website is build in React JS.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                ReactJS, HTML, CSS, JS
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col ms={3}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProject'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectContent'>
                                                <h2
                                                    id={'first'}
                                                    style={{ color: '#fbd9ad' }}
                                                >
                                                    CricInfo
                                                </h2>
                                                <img src={ci} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/IPL-Team-Viewer'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`hello`}
                                                    >
                                                        <FaPlay
                                                            id={`demo`}
                                                            className={'icon'}
                                                            aria-label='Demo'
                                                        />
                                                    </a>
                                                    <a
                                                        href={'https://github.com/GURPREET-SINGH-18/IPL-Team-Viewer'}
                                                        target='_blank'
                                                        rel='noreferrer'
                                                        className={'iconBtn'}
                                                        aria-labelledby={`code`}
                                                    >
                                                        <FaCode
                                                            id={`code`}
                                                            className={'icon'}
                                                            aria-label='Code'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <p
                                                className='project--desc'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                This was my second project in Django. In this project I have implemented media settings and used Django forms with user authentication by login and Sign up.
                                            </p>
                                            <div
                                                className='project--lang'
                                                style={{
                                                    background: '#fbd9ad',
                                                    color: '#b061df',
                                                    fontWeight:600
                                                }}
                                            >
                                                Django, HTML, CSS, JS
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="blog--viewAll">
                                <Link to="/projectspage">
                                    <button className='btn btn-primary'>
                                        View All
                                        <HiArrowRight className='viewArr'   />
                                    </button>
                                </Link>
                    </div>
                </Container>
            </Container>
        </div>
    )
}
