import React from 'react'
import styled from 'styled-components'
import './About.css'
import {Wrapper} from './MyStyled'
import eric from '../assets/temp-eric.png'
import anne from '../assets/temp-anne.png'


const Profile = styled.div`  
display:grid;
grid-template-areas: 'picture info info info'
                    'picture info info info';
    @media (max-width: 700px){
            grid-template-areas: 'picture'
            'info'
            'info'
            'info'
            'info'
            'info';
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
const Info = styled.p`
    grid-area:info;
    justify-self: center;
    `
function About() {
        return (
        <Wrapper id='about'>

            <h3 >About Us</h3>
            <Profile>
                <Pic src={eric} alt='Photo of Eric'/>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
            </Profile>
            <Profile>
                <Pic src={anne} alt='Photo of Anne'/>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
                <p>I'm Cool</p>
            </Profile>

        </Wrapper>
    )
        }
export default About