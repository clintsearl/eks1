import styled from 'styled-components'
import temp1 from '../assets/temp1.png'


export const LogoRed = 	'#e12338';
export const LogoBlue =	'#e12338';
export const ColorWhite = '#FFFFFF'
export const ColorBlack ='#000000'

export const Wrapper = styled.div`
    background-color:#000000;
    max-width:100vw;  
    padding:50px;
    color: #fff3e0;
`

//   P_ denotes the Profile page

export const P_Wrapper = styled.div`
    background-color:${ColorBlack};
    width:80vw;
    min-height:80vh;
    margin-top:auto;
    margin-right:auto;
    margin-left:auto;
    display:grid;
    grid-template-columns:1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 5fr ;


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
    height:auto;
    padding:20px;
    grid-column: 2 / 3;
    /* grid-row: 2 / 3; */
    justify-self: center;

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        
        display: ms-flex;
        -ms-flex-item-align: center;
        -webkit-justify-content: center;
        
    }
`
export const P_Header = styled.h1`
    grid-column:2 / 3;
    
    justify-self: center;
    align-self: center;
    padding:0;
    margin:0;
    color: ColorWhite;
`
export const P_Content = styled.p`
    grid-column: 2 / 3;
    
    font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;
    color: ColorWhite;
`
//Navbar

export const Navigation = styled.nav`
    background-color:transparent;


`
export const NavItem = styled.div`
    
`


export const NavLogo = styled.img`
    display:flex;
    flex-grow: 1;
    width:100px;
    height:50px;
    padding:1px;
    margin-right:5%;
    margin-left:95%;
`