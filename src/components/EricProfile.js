import React from 'react'
import styled from 'styled-components'
import {P_Wrapper, P_Pic, P_Header, Pcontent, Background} from './MyStyled'
import eric from '../assets/temp-ericW.png'

function EricProfile() {
    return(
        <Background>
        <P_Wrapper>
           
            <P_Pic src={eric} alt="Eric"/>
            <P_Header>Eric </P_Header>
            <Pcontent>Hey this is all about me here
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione debitis at perspiciatis quos asperiores sed perferendis, enim, itaque id fugiat non, similique rerum. Nam suscipit quam quasi commodi quia!
            </Pcontent>
        </P_Wrapper>
        </Background>
    )
}
export default EricProfile