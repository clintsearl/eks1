import React from 'react'
import styled from 'styled-components'
import './About.css'
import eric from '../assets/temp-eric.png'
import anne from '../assets/temp-anne.png'

const Wrapper = styled.div`
    background-color:#66ccff;
    color:white;
    height:100%;
    padding:50px;
    justify-items: center;
`
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
grid-area: picture;
justify-content: center;
    width:250px;
    height:250px;
    padding:20px;
`
const Info = styled.p`
    grid-area:info;
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