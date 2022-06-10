import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import axios from 'axios'
import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import { AiOutlineSend } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Contactus() {

    const [formData, setFormData] = useState(new FormData())

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!(formData.name && formData.email && formData.message)) {
            alert('Something went wrong!')
            return
        }

        alert(`Thanks ${formData.name}, I will shortly connect with you!`)
        axios.post('https://formspree.io/f/mnqwzopy', formData, {
            Accept: 'application/json',
        })
        setFormData({})
    }

    return (
        <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="certificate-description d-flex justify-content-start">
                            <Zoom left cascade>
                                <h1 className='aboutme-heading'>
                                    Contact me
                                </h1>
                            </Zoom>
                        </Col>
                        <Col md={12} id='contact' className='mt-3' >
                            <Row>
                                <Col md={4}>
                                    <div className='contacts-form' data-aos='fade-up'>
                                        <form>
                                            <div className='input-container d-flex flex-column'>
                                                <label htmlFor='username' className='label-class'>Full Name</label>
                                                <input
                                                    type='text'
                                                    className='form-input input-class'
                                                    id='username'
                                                    name='name'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Enter your name'
                                                    value={formData.name || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='input-container d-flex flex-column'>
                                                <label htmlFor='email' className='label-class'>Email address</label>
                                                <input
                                                    type='email'
                                                    className='form-input input-class'
                                                    name='email'
                                                    id='email'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Enter email'
                                                    value={formData.email || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='input-container d-flex flex-column'>
                                                <label htmlFor='userMessage' className='label-class'>Message</label>
                                                <textarea
                                                    className='form-message input-class'
                                                    id='userMessage'
                                                    name='message'
                                                    rows='3'
                                                    placeholder='Enter message'
                                                    value={formData.message || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='submit-btn'>
                                                <button
                                                    type='submit'
                                                    className='submitBtn'
                                                    onClick={handleSubmit}
                                                >
                                                    Submit
                                                    <AiOutlineSend
                                                        className='send-icon'
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className='contacts-details'>
                                        <a
                                            href={`mailto:gurpreetsingh18601@gmail.com`}
                                            className='personal-details'
                                        >
                                            <div className='detailsIcon'>
                                                <FiAtSign />
                                            </div>
                                            <p style={{ color: '#fbd9ad' }}>
                                                gurpreetsingh18601@gmail.com
                                            </p>
                                        </a>
                                        <a
                                            href={`tel:+917697248268`}
                                            className='personal-details'
                                        >
                                            <div className='detailsIcon'>
                                                <FiPhone />
                                            </div>
                                            <p style={{ color: '#fbd9ad' }}>
                                                +91 7697248268
                                            </p>
                                        </a>
                                        <a href="https://www.google.com/maps/place/Sant+Nagar,+Indore,+Madhya+Pradesh+452020/@22.674414,75.8729736,17z/data=!3m1!4b1!4m5!3m4!1s0x3962fcbe1ee8eb5d:0xa793cda2fbc7b9e!8m2!3d22.6732356!4d75.8744549"
                                        className='personal-details'
                                        >
                                        <div className='personal-details'>
                                            <div className='detailsIcon'>
                                                <HiOutlineLocationMarker />
                                            </div>
                                            <p style={{ color: '#fbd9ad' }}>
                                                Sant Nagar, Indore, Madhya Pradesh, India
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='contact-map'>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7813.188311130596!2d75.87095066530652!3d22.674036230409094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcbe1ee8eb5d%3A0xa793cda2fbc7b9e!2sSant%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452020%2C%20India!5e0!3m2!1sen!2snp!4v1649242893536!5m2!1sen!2snp"
                                            frameBorder='0'
                                            allowFullScreen=''
                                            aria-hidden='false'
                                            title='Contact Me'
                                            tabIndex='0'
                                            loading="lazy"
                                            className=''
                                        ></iframe>
                                        
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
