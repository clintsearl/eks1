import React from 'react'
import styled from 'styled-components'
import {P_Wrapper, P_Pic, P_Header, Pcontent, Background} from './MyStyled'
import anne from '../assets/temp-anneW.png'

function AnneProfile() {
    return(
        <Background>
        <P_Wrapper >
           <P_Pic src={anne} alt="Anne"/>
            <P_Header>Anne </P_Header>
            <Pcontent>Anne Maxwell has over 20 years of training and development experience across a wide array of professions. Able to take on the toughest of material and learn it thoroughly, she loves to learn and is able to gain the trust of her subject matter experts through sincere curiosity and thirst for knowledge.
               
            </Pcontent>
        </P_Wrapper>
        </Background>
    )
}
export default AnneProfile