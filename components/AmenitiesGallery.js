import {useEffect} from 'react';
import styled from 'styled-components';
import {Thumbnail} from './utils/Pictures';
import Link from 'next/link';
// style
import {PageContainer, HeadingContainer} from './utils/StyledLayouts';
// data
import {amenityImages} from '../data/amenities/ImageData';

const AmenitiesGallery = ({path}) => {

    useEffect(() => {
      window.scrollTo(0, 0);
    })

  const gallery = amenityImages.find(amenity => amenity.name === path);
  const rows = Math.ceil(gallery.images.length / 2);

  const renderImages = () => {
    return gallery.images.map((image, index) => {
      return (
        <ImageContainer key={index}>
          <Thumbnail image={image} contain='contain'/> 
        </ImageContainer>
      )
    })
  }

  const renderNav = () => {
    return amenityImages.map((amenity, index) => {
      return (
        <Link href={`/amenities/${amenity.name}`} key={index}>{amenity.name}</Link> 
      )
    })
  };

  return (
    <PageContainer>
      <HeadingWrapper>
        <HeadingContainer>
          <h2 style={{fontSize: '2.5rem'}}>{gallery.heading}</h2>
          <NavBar>
            {renderNav()}
        </NavBar>
        </HeadingContainer>
      </HeadingWrapper>
      <Container rows={rows}>
        {renderImages()}
      </Container>
    </PageContainer>
  );
};

export default AmenitiesGallery;

const HeadingWrapper = styled.div`
  h2 {
    margin: 20px;
  }
`;

const Container = styled.div`
  margin: 80px;
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  overflow: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: repeat((${props => props.rows}, '225px'));  
  grid-gap: 0.5rem;
  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    margin: 95x;
  }
  @media (max-width: 599px) {
    margin: 10x;
  }
`;

const NavBar = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  a {
    color: inherit;
    text-decoration: none;
    text-align: center;
    display: inline-flexbox;
    text-transform: uppercase;
    margin: 0 20px;
    :hover {
      text-decoration: underline;
    }
    @media (max-width: 599px) {
      margin: 0 10px;
    }
  }
`;

const ImageContainer = styled.div`

`;
