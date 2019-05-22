import React from 'react'
import styled from 'styled-components'
import {ProfileWrapper} from './MyStyled'
import eric from '../assets/temp-eric.png'
const Pic = styled.img`
    width:250px;
height:250px;
padding:20px;
`

function EricProfile() {
    return(
        <ProfileWrapper>
           
            <Pic src={eric} alt="Eric"/>
            <h3 >Contact Us</h3>

        </ProfileWrapper>
    )
}
export default EricProfile