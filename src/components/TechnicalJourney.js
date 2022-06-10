import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ComputerIcon from '@mui/icons-material/Computer';
import { DiDjango,DiHtml5,DiPython,DiJavascript,DiReact } from 'react-icons/di';
import Flip from 'react-reveal/Flip';

function TechnicalJourney() {
    return (
        <div className="mt-5">
            <div>
            <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
            <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
            <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>
            <div className="mt-5">
            <Flip top cascade>
                <h1>Technical Journey</h1>
            </Flip>
            </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<ComputerIcon />}
            >
                <h3 className="vertical-timeline-element-title">C PROGRAMMING LANGUAGE</h3>
                <p>
                    Studied here from Nursery to 10th class as a part of secondary schooling.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<ComputerIcon/>}
            >
                <h3 className="vertical-timeline-element-title">C++ PROGRAMMING LANGUAGE</h3>
                <p>
                    Studied higher secondary schooling class 11th and 12th from CBSE Affiliated School.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiPython />}
            >
                <h3 className="vertical-timeline-element-title">PYTHON</h3>
                <p>
                    Currently pursuing Bachelor of Technology degree in Computer Science field from Acropolis Institute of Technology and Research, Indore 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiHtml5 />}
            >
                <h3 className="vertical-timeline-element-title">HTML & CSS</h3>
                <p>
                    Currently pursuing Bachelor of Technology degree in Computer Science field from Acropolis Institute of Technology and Research, Indore 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiJavascript />}
            >
                <h3 className="vertical-timeline-element-title">JAVASCRIPT</h3>
                <p>
                    Currently pursuing Bachelor of Technology degree in Computer Science field from Acropolis Institute of Technology and Research, Indore 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiDjango />}
            >
                <h3 className="vertical-timeline-element-title">DJANGO</h3>
                <p>
                    Currently pursuing Bachelor of Technology degree in Computer Science field from Acropolis Institute of Technology and Research, Indore 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiDjango />}
            >
                <h3 className="vertical-timeline-element-title">DJANGO REST FRAMEWORK</h3>
                <p>
                    Currently pursuing Bachelor of Technology degree in Computer Science field from Acropolis Institute of Technology and Research, Indore 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiReact />}
            >
                <h3 className="vertical-timeline-element-title">REACT</h3>
                <p>
                    Currently pursuing Bachelor of Technology degree in Computer Science field from Acropolis Institute of Technology and Research, Indore 
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        </div>
    )
}

export default TechnicalJourney