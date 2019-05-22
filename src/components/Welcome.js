import React from 'react'
import styled from 'styled-components'
import { MDBContainer } from 'mdbreact';
// import temp1 from '../assets/temp1.png'
const Wrapper = styled.div`
   background-color:#66ccff;
   height:100%;
`
function Welcome() {
    return(
        <Wrapper>         
        
         <h3 id='welcome'>Welcome</h3>
        <p>Our Special designations</p>
        </Wrapper>
        
    )
}
export default Welcome