import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import Flip from 'react-reveal/Flip';

function EducationJourney() {
    return (
        <div className="mt-5">
            <div>
            <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
            <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
            <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>
            <div className="mt-5">
            <Flip top cascade>
                <h1>Qualification Journey</h1>
            </Flip>
            </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2004 - 2017"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">SECONDARY SCHOOLING</h3>
                <h4 className="vertical-timeline-element-subtitle mt-2">St. Norbert School, Indore</h4>
                <p>
                    Studied here from Nursery to 10th class as a part of secondary schooling.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2017 - 2019"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">HIGHER SECONDARY SCHOOLING</h3>
                <h4 className="vertical-timeline-element-subtitle mt-2">St. Norbert School, Indore</h4>
                <p>
                    Studied higher secondary schooling class 11th and 12th from CBSE Affiliated School.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2019 - 2023"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Graduation</h3>
                <h4 className="vertical-timeline-element-subtitle mt-2">Acropolis Institute of Technology and Research, Indore</h4>
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

export default EducationJourney