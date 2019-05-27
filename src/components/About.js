import React from 'react'
import styled from 'styled-components'
import './About.css'
import {Wrapper} from './MyStyled'
import eric from '../assets/temp-eric.png'
import anne from '../assets/temp-anne.png'



const Profile = styled.div`  
display:grid;
grid-template-columns: 2fr 1fr 1fr 1fr;
grid-template-rows:auto;
grid-template-areas: 'picture info1 info2 info3'
                    'picture info4 info5 info6';
    @media (max-width: 700px){
        grid-template-columns:1fr;
        grid-template-areas: 'picture'
            'info1'
            'info2'
            'info3'
            'info4'
            'info5'
            'info6';
          justify-content:center;
      } 
`
const Pic = styled.img`
justify-self: center;
grid-area: picture;
    width:250px;
    height:250px;
    padding:20px;
`
const ClickPic = styled.a`
      grid-area: picture;
`
// const info


function About() {
        return (
        <Wrapper id='about'>

            <h3 >About Us</h3>
            <Profile>
                <ClickPic href="/EricProfile"><Pic src={eric} alt='Photo of Eric'/></ClickPic>
                <p style={{gridArea: "info1" }}>I'm Cool</p>
                <p style={{gridArea: "info2" }}>I'm Cool</p>
                <p style={{gridArea: "info3" }}>I'm Cool</p>
                <p style={{gridArea: "info4" }}>I'm Cool</p>
                <p style={{gridArea: "info5" }}>I'm Cool</p>
                <p style={{gridArea: "info6" }}>I'm Cool</p>
                
            </Profile>
            <Profile>
                <ClickPic href="/AnneProfile"><Pic src={anne} alt='Photo of Anne'/></ClickPic>
                <p style={{gridArea: "info1" }}>I'm Cool</p>
                <p style={{gridArea: "info2" }}>I'm Cool</p>
                <p style={{gridArea: "info3" }}>I'm Cool</p>
                <p style={{gridArea: "info4" }}>I'm Cool</p>
                <p style={{gridArea: "info5" }}>I'm Cool</p>
                <p style={{gridArea: "info6" }}>I'm Cool</p>
            </Profile>

        </Wrapper>
    )
        }
export default About