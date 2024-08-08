import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bgHero from '../../assets/bg_v2.svg';

export const HeroContainer = styled.section`
  height: 800px;
  background-image: url(${bgHero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 13%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-inline: 36px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroTitleContainer = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #cbff0f;
`;

export const HeroTitleUnderline = styled.div`
  width: 2.5rem;
  height: 2px;
  background-color: #ef4444;
  margin-right: 0.75rem;
`;

export const HeroTitle = styled.h1`
  font-size: 78px;
  line-height: 1.1;
  font-weight: 300;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #fff;
`;

export const HeroHighlight = styled.span`
  font-weight: 600;
  color: #cbff0f;
`;

export const HeroLink = styled(Link)`
  align-self: flex-start;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 2px solid #ef4444;
  color: inherit;
  text-decoration: inherit;
  color: #ffff
`;

export const HeroImageContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const HeroImage = styled.img`
  width: 112%;
  height: auto;
`;