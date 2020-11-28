import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import garden from '../../public/images/eat_drink/garden.jpeg';
import dinningRoom from '../../public/images/eat_drink/dinningroom.png';


const Seating = () => {
  return (
    <Container>
      <TopSection>
        <TextContainer>
          <h2>Indoor and Outdoor</h2>
          <p>Enjoy the full service Kon Tiki experience on our intimate dinning room, or our gorgeous backyard garden.</p>
        </TextContainer>
        <Thumbnail 
          image={garden} 
          alt='arden-seating'
          heading='Garden Seating'
          info='Service from 5pm - 10pm'
          />   
        <Thumbnail 
          image={dinningRoom} 
          alt='dinning-room'
          heading='Dinning Room'
          info='Service from 6pm - 11pm'
          />
        </TopSection>
    </Container>
  );
};

export default Seating;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
  justify-content: center;
  grid-gap: 2rem;
  @media (max-width: 1024px) and (min-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100px 280px 280px;
  }
`;

const TextContainer = styled.div`
`;
