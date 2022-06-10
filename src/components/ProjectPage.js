import React from 'react'
import Particle from './Particle'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import c from '../images/c.png'
import ec from '../images/ecommerce.gif'
import ba from '../images/book-animation.gif'
import wa from '../images/weather-app-animation.gif'
import ci from '../images/onboarding.gif'
import ms from '../images/mobileshop.gif'
import covid from '../images/covid.gif'
import iplt from '../images/ipltv.gif'
import { FaPlay, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";
export default function ProjectPage() {
  return (
    <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content">
                    <div className="d-flex justify-content-center" width="100%" style={{backgroundColor: '#fbd9ad'}}>
                    <Zoom left cascade>
                        <h1 style={{color:'rgb(134 61 176)'}}>PROJECTS</h1>
                    </Zoom>
                    </div>
                    <div>
                    <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="mt-5">
                            <Row className='g-5'>
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid',fontSize: '1.05rem' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    G-Mart
                                                </h2>
                                                <img src={ec} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    Guru Library
                                                </h2>
                                                <img src={ba} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    Weather Gyan
                                                </h2>
                                                <img src={wa} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    CricInfo
                                                </h2>
                                                <img src={ci} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    Covid Website In React
                                                </h2>
                                                <img src={covid} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    Mobile Shop
                                                </h2>
                                                <img src={ms} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                                <Col md={4}>
                                    <Fade bottom>
                                        <div
                                            key={1}
                                            className='singleProjectPage'
                                            style={{ backgroundColor: 'rgb(142 70 186 / 31%)',
                                            border: '1px solid' }}
                                        >
                                            <div className='projectPageContent'>
                                                <h2
                                                    id={'first'}
                                                >
                                                    IPL Team Viewer
                                                </h2>
                                                <img src={iplt} alt={c} />
                                                <div className='project--showcaseBtn'>
                                                    <a
                                                        href={'www.google.com'}
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
                                                        href={'code'}
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
                                                This website is a e-commerce platform like amazon or flipkart where user can buy any product here I have tried to add every feature I could here seller can also sell product and can add product.
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
                </Container>
            </Container>
        </div>
                    </div>
                </Container>
            </Container>
    </section>
  )
}
