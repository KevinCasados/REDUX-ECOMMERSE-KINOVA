import React from "react";
import WomanImg from "../../assets/woman_hero.png";
import { HeroContainer, HeroContent, HeroTitleContainer, HeroTitleUnderline, HeroTitle, HeroHighlight, HeroLink, HeroImageContainer, HeroImage } from './styles';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitleContainer>
          <HeroTitleUnderline />
          Nuevos Productos
        </HeroTitleContainer>
        <HeroTitle>
          OFERTAS DE VERANO <br />
          <HeroHighlight>NEW</HeroHighlight>
        </HeroTitle>
        <HeroLink to="/">DESCUBRIR MÁS</HeroLink>
      </HeroContent>
      <HeroImageContainer >
        
      </HeroImageContainer>
    </HeroContainer>
  );
};

export default Hero;