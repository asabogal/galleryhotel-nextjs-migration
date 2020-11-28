import {useEffect} from 'react';
import styled from 'styled-components';
import Text from '../components/location/Text';
import GoogleMap from '../components/GoogleMap';
// styled
import {PageContainer} from '../components/utils/StyledLayouts';

const Location = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <PageContainer>
      <Container>
        <Text/>
        <GoogleMap 
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          withSpots={true}
          />
      </Container>
    </PageContainer>
  );
};

export default Location;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1099px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 50vh;
  }
`;
