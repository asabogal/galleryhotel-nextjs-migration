import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
import {TwoColCaptionImage} from '../utils/StyledLayouts';
 // images
import lounge from '../../public/images/home/experience/lounge.png';
import garden from '../../public/images/home/experience/garden.png';

const ExperienceSection = () => {
  return (
    <TwoColCaptionImage>
      <MainImage>
        <Thumbnail 
          image={lounge} 
          alt='lounge-image'
          heading='Lounge'
          info='Contemporary art meets mid-century decor'
          link='/amenities/gallery'
          />
      </MainImage>
      <TextContainer>
        <h2>Experience Style & Comfort</h2>
        <p>The Gallery Hotel’s common areas are open and welcoming to all people. Our bar and lobby operates as a Cocktail Bar from 5pm on Friday and Saturday evenings. During the summer months the courtyard is the heart of the hotel. In both our garden space and restaurant Kon Tiki we serve an extended Breakfast and Dinner for our inhouse guests as well as our neighbors.</p>
      </TextContainer>
      <ImageContainer>
        <Thumbnail 
          image={garden} 
          alt='garden-image'
          heading='Garden'
          info='Sit back, relax, enjoy a glass of rosé'
          link='/amenities/garden'
          />
      </ImageContainer>
    </TwoColCaptionImage>
  );
};

export default ExperienceSection;

const MainImage = styled.div`
  height: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  @media (max-width: 1099px) {
    width: 80%;
    margin: 0 auto;
    grid-row: 2 / 3;
    height: 70vh;
  }
  @media (max-width: 599px) {
    grid-row: 2 / 3;
    height: 50vh;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  align-self: flex-end;
`;

const ImageContainer = styled.div`
`;