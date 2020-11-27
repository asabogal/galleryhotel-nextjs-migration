import styled from 'styled-components';
import {Thumbnail} from '../utils/Pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// images
import chairs from '../../public/images/home/instagram/chairs.png';
import garden from '../../public/images/home/instagram/garden_night.png';
import mess from '../../public/images/home/instagram/mess.png';
import reception from '../../public/images/home/instagram/reception.png';

const InstagramSection = () => {
  return (
    <Container>
      <Heading>
        <h2>Follow Us on Instagram</h2>
        <a href='https://www.instagram.com/galleryhotelny/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size='2x'/>
          <p>@galleryhotelny</p>
        </a>
      </Heading>
      <Gallery>
        <ImageContainer>
          <a href='https://www.instagram.com/galleryhotelny/' target="_blank" rel="noopener noreferrer">
            <Thumbnail image={chairs} alt='chairs-image'/>
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href='https://www.instagram.com/galleryhotelny/' target="_blank" rel="noopener noreferrer">
            <Thumbnail image={garden} alr='garden-image'/>
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href='https://www.instagram.com/galleryhotelny/' target="_blank" rel="noopener noreferrer">
            <Thumbnail image={mess} alt='mess-image'/>
          </a>
        </ImageContainer>
        <ImageContainer>
          <a href='https://www.instagram.com/galleryhotelny/' target="_blank" rel="noopener noreferrer">
            <Thumbnail image={reception} alt='reception-image'/>
          </a> 
        </ImageContainer>
      </Gallery>
    </Container>
  );
};

export default InstagramSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #002b5c;
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: inherit;
      text-decoration: none;
      
    }
    p {
      padding-left: 10px;
      font-size: 14px;
    }
    @media (max-width: 599px) {
    flex-direction: column;
    text-align: center;
    h2 {
      font-size: 2rem;
    }
  } 
`;

const Gallery = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
`;

const ImageContainer = styled.div`
  align-self: center;
`;