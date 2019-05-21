import React from 'react'
import styled from 'styled-components'
import temp1 from '../assets/temp1.png'

const Wrapper = styled.div`
    background-image: url(${temp1})
   
`
function Welcome() {
    return(
        
        <Wrapper>
           
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt quod dolores dolorum cupiditate officiis odio eligendi provident a unde adipisci optio suscipit cumque, molestiae sunt nostrum ullam sed! Veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis qui fuga aspernatur voluptatum maiores temporibus repellendus commodi voluptatem! Quidem labore qui hic nam accusantium ea eos tenetur quia dolorem facilis?</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum deserunt quod dolores dolorum cupiditate officiis odio eligendi provident a unde adipisci optio suscipit cumque, molestiae sunt nostrum ullam sed! Veniam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis qui fuga aspernatur voluptatum maiores temporibus repellendus commodi voluptatem! Quidem labore qui hic nam accusantium ea eos tenetur quia dolorem facilis?</div>
            <h3 id='welcome'>Welcome</h3>

        </Wrapper>
    )
}
export default Welcome