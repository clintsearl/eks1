import styled from 'styled-components'
import temp2 from '../assets/temp2.png'



export const Wrapper = styled.div`
    background-color:#90caf9;
    max-width:100vw;  
    padding:50px;
`

//   P_ denotes the Profile page

export const P_Wrapper = styled.div`
    background-color:#90caf9;
    width:80vw;
    margin-top:auto;
    margin-right:auto;
    margin-left:auto;
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-rows:1fr 3fr 2fr;
    
`
export const Background = styled.div`
    background-image: url(${temp2});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    min-height:100vh;
    padding:10vh 0 10vh 0;
    
    
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
    font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;
`
//Navbar

export const Navigation = styled.nav`
    background-color:transparent;


`