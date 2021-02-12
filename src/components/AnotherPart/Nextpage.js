import React from 'react'
import {NextCointainer,
  NextText,
  Design,
  ContactInfo
} from "./NextStyle"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Nextpage() {
  return (
    <NextCointainer>
      <hr/>
      <NextText>
      Experience:<br/>
3T Impex Trade consult<br/>
Graduate intern( January-february 13) .<br/>
Social Media Manager <br/>
<a href ="https://eg.instagram.com/TradePDP"
>
<InstagramIcon
/>
</a>
<a href ="https://web.facebook.com/3timpextradeacademy"
><FacebookIcon
/></a>
<a   href ="https://www.twitter.com/TradePDP">
<TwitterIcon/>
</a>
      </NextText>
    <Design>
    <hr/>
    Design:<br/>
    checkout my design work on dribble<br/>
    <a 
     href ="https://dribbble.com/Danny001">
    >Click here</a>
    </Design>

    <ContactInfo>
      <hr/>
            Contact:<br/>
            Email Address: idiahidaniel43@gmail.com<br/>
            Tel no: 08127215296<br/>
            </ContactInfo>
    </NextCointainer>
  )
}

export default Nextpage
