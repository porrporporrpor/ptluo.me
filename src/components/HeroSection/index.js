import React, { useState } from 'react';
import video from '../../assets/videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRignt,
} from './HeroElements';
import { Button } from '../ButtonElement';
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <React.Fragment>
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>My journey is getting started now</HeroH1>
          <HeroP>slide down to know more about me.</HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              // dark={true}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRignt />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </React.Fragment>
  );
};

export default HeroSection;
