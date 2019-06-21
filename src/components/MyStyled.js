import styled from 'styled-components'
import temp1 from '../assets/temp1.png'



export const Wrapper = styled.div`
    background-color:#000000;
    max-width:100vw;  
    padding:50px;
    color: #fff3e0;
`

//   P_ denotes the Profile page

export const P_Wrapper = styled.div`
    background-color:#000000;
    width:80vw;
    margin-top:auto;
    margin-right:auto;
    margin-left:auto;
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-rows:1fr 3fr 2fr;


    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        
        display: ms-flex;
        // flex-direction: column;
        -ms-flex-item-align: center;
        // align-content:space-around;
        // align-self:center;
    }
    
`
export const Background = styled.div`
    background-image: url(${temp1});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    justify-content: center;
    min-height:100vh;
    padding:10vh 0 10vh 0;  
`
export const LogoWrapper = styled.div`
min-width:100%;
background:rgba(0, 0, 0, 0.8);
margin:0;
padding:0;
`
export const LogoTag = styled.img`
    width:40%;
    height:auto;
    @media (max-width:1024px){
        width:60%;
    }
    @media (max-width: 700px){
        width:80%;
        height:auto;

    }
`
export const P_Pic = styled.img`
    width:250px;
    height:250px;
    padding:20px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    justify-self: center;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        
        display: ms-flex;
        -ms-flex-item-align: center;
        -webkit-justify-content: center;
        
    }
`
export const P_Header = styled.h1`
    grid-column:2 / 3;
    grid-row: 3 / 4;
    justify-self: center;
    color: #c62828;
`
export const P_Content = styled.p`
    grid-column: 2 / 3;
    grid-row: 4 / 5;
    font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;
    color: #fff3e0;
`
//Navbar

export const Navigation = styled.nav`
    background-color:transparent;


`