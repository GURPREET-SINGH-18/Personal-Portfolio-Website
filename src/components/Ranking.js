import React from 'react'
import {FaHackerrank} from "react-icons/fa"
import {SiLeetcode,SiHackerearth,SiCodechef} from "react-icons/si"
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

export default function Ranking() {
    return (
        <div className="mt-4">
            <Zoom left cascade>
            <h1>See my rank</h1>
            </Zoom>
            <Container className="mt-5">
                <Row className="g-5">
                    <Col md={3}>
                        <a
                            href="https://www.hackerrank.com/Gurpreet_Singh__"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                    <Zoom cascade>
                            <FaHackerrank />
                    </Zoom>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a
                            href="https://leetcode.com/gurpreet_singh_18/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                            <SiLeetcode />
                            </Zoom>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a
                            href="https://www.hackerearth.com/@gurpreetsingh18601"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                            <SiHackerearth />
                            </Zoom>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a
                            href="https://www.codechef.com/users/singh_gurpreet"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                            <SiCodechef />
                            </Zoom>
                        </a>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
