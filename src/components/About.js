import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
const About = () => {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={5}>
                      {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}
                      <Slide left >
                      <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"  background="transparent"  speed="1"  style={{width: '100%', height: '90%'}}  loop  autoplay></lottie-player>
                      </Slide>
                    </Col>
                    <Col md={7}>
                    <Slide right >
                    <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
            </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
