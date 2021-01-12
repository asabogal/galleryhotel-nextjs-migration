import styled from 'styled-components';
import {Thumbnail, Picture} from '../utils/Pictures';

// images
import hotel from '../../public/images/home/about/hotel.png';
import livingroom from '../../public/images/home/about/livingroom.png';
import room from '../../public/images/home/about/room.png';

const AboutSection = () => {
  return (
    <Container>
      <TopSection>
        <Info>
          <h2>Boutique Hotel and Art Gallery in Greenport</h2>
          <p>The Gallery Hotel opened in May of 2014 and is situated right in the beating heart of Greenport, one of the North Fork’s most exciting cultural and historic destinations. The Gallery offers contemporary modern design touches, such as quirky, colorful interior decorations, comfortable tea and work areas, and of course our thoughtfully curated art gallery space. Guests have come to love this beautifully designed property and its outstanding customer service, which in only a few years has grown a loyal group of returning patrons and celebrities alike.</p>
        </Info>
        <Thumbnail 
          image={livingroom} 
          alt='lobby-picture'
          heading='Amenities'
          info='Discover our fabulous spaces'
          link='/amenities'
          />   
        <Thumbnail 
          image={room} 
          alt='room-picture'
          heading='Our Rooms'
          info='Explore our stylish rooms'
          link='/rooms'
          />
        </TopSection>
        <HotelImageContainer>
            <Picture picture={hotel} alt='hotel-image'/>
        </HotelImageContainer>
    </Container>
  );
};

export default AboutSection;

const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 2rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 2fr));
  justify-content: center;
  grid-gap: 2rem;
  @media (max-width: 1024px) and (min-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 320px);
  }
`;

const Info = styled.div`
`;

const HotelImageContainer = styled.div`
  width: 50vw;
  height: auto;
  margin-left: 20vw;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 0;
  }
`;