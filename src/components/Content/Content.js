import React from 'react'
import {ContentContainer,
  ContentImage,
  Img,
  ContentText,
  H1
  
} from "./ContentStyle"
import pix from "./image/b.svg"

function Content() {
  return (
    <ContentContainer>
     <ContentImage>
       <Img src={pix} alt="boy.jpg"/>
     </ContentImage>
     <ContentText>
 <H1>
 Daniel idiahi  
 </H1>
    DESIGNER   <br/>
CONTENT CREATOR   <br/>
SOCIAL MEDIA MANAGER
    
     </ContentText>
    </ContentContainer>
  )
}

export default Content
