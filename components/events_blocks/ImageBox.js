import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
// images
import gallery from '../../public/images/events_blocks/gallery.png';

const ImageBox = () => {
  return (
    <ImageContainer>
      <Thumbnail 
        image={gallery}
        alt='gallery-space'
        heading='Explore our spaces'
        link='/amenities'
      />
    </ImageContainer>
  );
};

export default ImageBox;

const ImageContainer = styled.div`
  justify-content: center;
  align-content: center; 
  width: 100%;
  height: auto;
`;