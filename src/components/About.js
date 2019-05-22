import React from 'react'
import styled from 'styled-components'
import eric from '../assets/temp-eric.png'
import anne from '../assets/temp-anne.png'

const Wrapper = styled.div`
    background-color:#66ccff;
    color:white;
    height:100%;
    padding-top:50px;
`
const Profile = styled.div`
    display:grid;

`
const Pic = styled.img`
    width:250px;
    height:250px;
`
function About() {
    return (
        <Wrapper id='about'>

            <h3 >About Us</h3>
            <Profile>
                <Pic src={eric} alt='Photo of Eric'/>
            </Profile>
            <Profile>
                <Pic src={anne} alt='Photo of Anne'/>
            </Profile>

        </Wrapper>
    )
}
export default About