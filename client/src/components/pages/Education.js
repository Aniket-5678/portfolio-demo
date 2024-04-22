import React from 'react'
import "../style/style.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdSchool } from "react-icons/md";
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  return (
    <div className='education-container' id='education'>
        <div className='education-heading'>
         <h2>Education details</h2>
        </div>
        <div>
        <VerticalTimeline>
         <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">BSC in computer science</h3>
    <h4 className="vertical-timeline-element-subtitle">S.I.C.E.S college Mumbai univercity</h4>
     <p>
        2021 - 2023
     </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdSchool/>}
  >
    <h3 className="vertical-timeline-element-title">Full stack Development   </h3>
    <h4 className="vertical-timeline-element-subtitle">Upgrade</h4>
     <p>
        2023 - 2024
     </p>
  </VerticalTimelineElement>
         </VerticalTimeline>
        </div>
    </div>
  )
}

export default Education