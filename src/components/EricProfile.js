import React from 'react'
import styled from 'styled-components'
import {P_Wrapper, P_Pic, P_Header, P_Content} from './MyStyled'
import eric from '../assets/temp-eric.png'

function EricProfile() {
    return(
        <P_Wrapper>
           
            <P_Pic src={eric} alt="Eric"/>
            <P_Header>Eric </P_Header>
            <P_Content>Hey this is all about me here
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione debitis at perspiciatis quos asperiores sed perferendis, enim, itaque id fugiat non, similique rerum. Nam suscipit quam quasi commodi quia!
            </P_Content>
        </P_Wrapper>
    )
}
export default EricProfile