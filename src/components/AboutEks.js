import React from 'react'
import {P_Wrapper, P_Pic, P_Header, P_Content, Background} from './MyStyled'
import Logo from '../assets/Logo.svg'



function AboutEks() {
    return(
        <Background>
        <P_Wrapper >
           <P_Pic src={Logo} alt="E Knowledge Solutions"
        //    style={{width: "30%", height: "100%"}}
           />
            <P_Header> About Us</P_Header>
            <P_Content>
               <p> We have over 50 years of combined experience providing education, training, and courseware development. We have developed and delivered education, training, and materials for instructor-led classroom courses (synchronous), computer and web-based courses (asynchronous), blended courses, and structured on-the-job training. We create individual courses/classes, education and training series/multi-day courses, full semester courses, and all other training structures. 
               </p>    
            <h4>What types of courseware development have we created?</h4>
            <ul>
                <li>Software</li>
                <li>Training videos</li>
                <li>Credit union</li>
                <li>Legal/law firm</li>
                <li>Aircraft maintenance, planning, scheduling</li>
                <li>General education undergraduate and graduate college courses</li>
                <li>Night vision goggle use and function</li>
                <li>Fitness and nutrition </li>
                <li>Performance improvement </li>
                <li>Environmental, sensory, acceleration, altitude physiology</li>
                <li>Leadership </li>
                <li>Fatigue and fatigue countermeasures</li>
            </ul>
            <h4>Our customers include: </h4>
            <ul>
                <li>Military (active duty, guard/reserve, civilian, contractor) maintenance, aircrew, security forces, planners, schedulers, special operations forces, medical personnel (doctors, nurses, PA, technicians)</li>
                <li>Lawyers, paralegals, legal secretaries</li>
                <li>Credit union employees</li>
                <li>White House staff</li>
            </ul>
            
            
            <h4>What are we currently doing?</h4>
            <p>
                We plan, organize, and manage initial and recurring training programs for technical repair center leaders, planners, schedulers, and technicians.   
                We do this by conducting training and performance gap analyses identifying training shortfalls for those repairing, manufacturing, and modifying aircraft landing gear, power systems, hydraulics, composites, and gas turbine engines.   
                We then create training videos, classroom, computer-based, and structured on-the-job training courses for aircraft depot maintenance production controllers, sheet metal technicians, non-destructive inspectors, and heavy machining technicians. We create new courseware and reference material for new software systems. We update maintenance courses.
                We do this by coordinating with subject matter experts and Air Force training specialists creating a synergistic team to ensure completeness and applicability of training materials. 
               </p>  
                <h4>Future</h4>
                <p>
                Our goal is to continue to provide world-class education, training, and training development services by winning and professionally managing government and private sector contracts. 
                </p>
            </P_Content>
        </P_Wrapper>
        </Background>
    )
}
export default AboutEks