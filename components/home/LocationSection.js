import styled from 'styled-components';
import {TwoColCaptionImage} from '../utils/StyledLayouts';
import {Picture} from '../utils/Pictures';
import {Thumbnail} from '../utils/Pictures';
// images
import beach from '../../public/images/home/location/beach.png';
import vintagemap from '../../public/images/home/location/vintagemap.jpg';

const VintageMap = () => {
  return (
    <TwoColCaptionImage height='90vh'>
      <MapContainer>
        <Picture picture={vintagemap} alt='vintage-map'/>
      </MapContainer>
      <TextContainer>
        <h2>Your Destination</h2>
        <p>Welcome to the North Fork, Long Island's "Wine Country". There are over 60 vineyards, breweries and distilleries. Multiple harvests along the fork provide offerings from land and sea, sourcing small farmers and fish markets, as well as distinguished local restaurants, including ours. The area is surrounded by beautiful waters ideal to escape onto isolated beaches or experience maritime culture and activities. The town of Greenport is where the action is. Numerous shops, restaurants and bars, all within walking distance of our hotel, will make your stay an adventurous one.</p>
      </TextContainer>
      <ImageContainer>
        <Thumbnail 
          image={beach} 
          alt='garden-image'
          heading='Discover the area'
          info='Get to know the North Fork'
          link='/location'
          />
      </ImageContainer>
    </TwoColCaptionImage>
  );
};

export default VintageMap;

const MapContainer = styled.div`
  height: 75%;
  width: auto;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  padding: 5%;
  align-self: center;
  @media (max-width: 1099px) {
    grid-row: 2 / 3;
    height: auto;
  }
  @media (max-width: 599px) {
    grid-row: 2 / 3;
    height: 50vh;
  }
`;

const TextContainer = styled.div`
`;
const ImageContainer = styled.div`
`;