import styled from 'styled-components'

export const Wrapper = styled.div`
    background-color:#66ccff;
    max-width:100vw;  
    padding:50px;
`

//   P_ denotes the Profile page

export const P_Wrapper = styled.div`
    background-color:#66ccff;
    max-width:100vw;
    min-height:100vh;
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-rows:1fr 3fr auto 2fr;
`
export const P_Pic = styled.img`
    width:250px;
    height:250px;
    padding:20px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: center;
`
export const P_Header = styled.h1`
    grid-column:2 / 3;
    grid-row: 3 / 4;
    justify-self: center;
`
export const P_Content = styled.p`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    
`
