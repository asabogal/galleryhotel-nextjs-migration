import {useEffect} from 'react';
import styled from 'styled-components';
import HeroHeader from '../../components/eat_drink/HeroHeader';
import InfoSection from '../../components/eat_drink/InfoSection';
import Plates from '../../components/eat_drink/Plates';
import Seating from '../../components/eat_drink/Seating';
// styled
import {PageContainer} from '../../components/utils/StyledLayouts';

const EatAndDrink = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <HeroHeader/>
      <PageContainer>
      <ContentWrapper>
        <InfoSection/>
        <Seating/>
        <Plates/>
      </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default EatAndDrink;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 5rem;
`;
