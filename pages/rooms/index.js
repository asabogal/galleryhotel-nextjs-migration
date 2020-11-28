import {useEffect} from 'react';
import styled from 'styled-components';
import RoomCard from '../../components/rooms/RoomCard';
// data
import {roomData} from '../../data/rooms/roomData';
// styled
import {PageContainer, HeadingContainer} from '../../components/utils/StyledLayouts';

const Rooms = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const renderCards = () => {
    return roomData.map(room => {
      return (
        <RoomCard 
          key={room.name} 
          name={room.name}
          image={room.images.cardImage}
          description={room.description} 
          features={room.cardFeatures}
          link={room.link}
          explore={true}
        />
      )
    })
  }
  return (
    <PageContainer>
      <HeadingContainer>
        <h1>Our Rooms</h1>
        <h3>The hotel features 8 rooms, and 2 luxury suites. All include Sumptuous Bedding, Indulgent Minibars, 100% Egyptian Cotton Bathrobes, and Complimentary Wireless Internet. Rooms with Sundeck available.</h3>
      </HeadingContainer>
      <Container>
        {renderCards()}
      </Container>
    </PageContainer>
  );
};

export default Rooms;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto auto;
  column-gap: 1vw;
  background-color: white;
  margin-top: 50px;
  @media (max-width: 599px) {
    grid-gap: 7vh;
  }
`;