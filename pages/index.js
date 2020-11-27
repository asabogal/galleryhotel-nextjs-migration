import {useEffect} from 'react';
import styled from 'styled-components';
// components
import Video from '../components/utils/Video';
import CovidNotice from '../components/home/CovidNotice';
import AboutSection from '../components/home/AboutSection';
import ExperienceSection from '../components/home/ExperienceSection';
import EatDrinkSection from '../components/home/EatDrinkSection';
import LocationSection from '../components/home/LocationSection';
import InstagramSection from '../components/home/InstagramSection';

// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div>
      <Video video='./videos/intro_video.mp4'/>
      <PageContainer>
        <ContentWrapper>
          <CovidNotice/>
          <AboutSection/>
          <ExperienceSection/>
          <EatDrinkSection/>         
          <LocationSection/>
          <InstagramSection/>
        </ContentWrapper>
      </PageContainer>
    </div>
  );
};

export default HomePage;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(6, auto);
  gap: 5rem;
`;