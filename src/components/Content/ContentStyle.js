import styled from "styled-components";

export const ContentContainer = styled.div`
width: 100%;

display:flex;
justify-content: center;
align-items:center;
margin-top: 100px;
flex-direction: row-reverse;

@media screen and (max-width: 960px) {
width: 100%;
display:flex;
justify-content: center;
align-items:center;
margin-top: 100px;
flex-direction: column;
}
`
export const ContentImage = styled.div`
display:flex;
justify-content: center;
@media screen and (max-width: 960px) {
  
}
`
export const Img = styled.img`
height:400px;
width:400px;
object-fit: contain;
@media screen and (max-width: 960px) {
  height:400px;
width:400px;
object-fit: contain;
}

@media screen and (max-width: 760px) {
  height:400px;
width:300px;
object-fit: contain;
}

`
export const ContentText = styled.div`
width:50%;
display:flex;
justify-content: center;
align-items:center;
flex-direction: column;

`
export const H1 = styled.h1`
text-transform: uppercase;
color:#6C63FF;
`





