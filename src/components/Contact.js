import React from 'react'
import styled from 'styled-components'
import {Wrapper, Pcontent, LogoRed} from './MyStyled'


function Contact() {
    return(
        <Wrapper id='contact'>
           <h3 style={{color: LogoRed}}>Contact Us</h3>
            <Pcontent>Phone:</Pcontent>
            <Pcontent>Address:</Pcontent>
            <Pcontent>Email:</Pcontent>
            

        </Wrapper>
    )
}
export default Contact