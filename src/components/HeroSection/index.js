import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';

 import { 
   HeroContainer,
   HeroBg, 
   VideoBg , 
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight
  } from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }


  return (
    <HeroContainer >
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Melhor Portal de Cursos</HeroH1>
        <HeroP>
          Faça login para receber nossas promoções à primeira mão.
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Se Inscreva { hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
