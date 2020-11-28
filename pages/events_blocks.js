import {useEffect} from 'react';
import styled from 'styled-components';
import InfoBox from '../components/events_blocks/InfoBox';
import ContactBox from '../components/events_blocks/ContactBox';
import ImageBox from '../components/events_blocks/ImageBox';
// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const EventsBlocks = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <PageContainer>
      <PageWrapper>
        <div>
          <InfoBox/>
          <ContactBox/>
        </div>
        <ImageBox/>
      </PageWrapper>
    </PageContainer>
  );
};

export default EventsBlocks;

const PageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: 40px;
`;
