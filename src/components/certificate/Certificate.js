import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import python from '../../images/python1.jpg'
import html from '../../images/html.png'
import html1 from '../../images/HTML1.jpg'
import css from '../../images/CSS.jpg'
import js from '../../images/Javascript.jpg'
import c from '../../images/c.png'
import c1 from '../../images/c++.png'
import python2 from '../../images/python2.png'
import Fade from 'react-reveal/Fade';


export default function Certificate() {
  return (
    <div className="mt-5">
      <Container>
        {/* <Bounce left cascade> */}
          <Fade left cascade duration={1000} distance="20px">
          <Row className='g-5'>
          <Col md={4}>
            <img src={python2} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={c} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={c1} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={python} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={js} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={html} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={css} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
          <Col md={4}>
            <img src={html1} alt="" style={{width:'100%',height:'100%'}} />
          </Col>
        </Row>
          {/* </Bounce> */}
          </Fade>
      </Container>
    </div>
  )
}
