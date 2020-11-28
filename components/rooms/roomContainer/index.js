import styled from 'styled-components';
import HeroHeader from './HeroHeader';
import RoomInfo from './RoomInfo';
import RoomFeatures from './RoomFeatures';
import HotelRules from './HotelRules';
import ImageSlider from '../../utils/ImageSlider';
import RoomCard from '../RoomCard';
// data
import {roomData} from '../../../data/rooms/roomData';
// styled
import {PageContainer} from '../../utils/StyledLayouts';

const RoomPage = ({path}) => {

  const room = roomData.find(room => room.path === path);
  const roomCards = roomData.filter(card => card.name !== room.name);

  const renderMoreRooms = () => {
    return roomCards.map(card => {
      return (
      <RoomCard 
        key={card.name} 
        name={card.name}
        image={card.images.cardImage}
        description={card.description} 
        features={card.cardFeatures}
        link={card.link}
        small
      />        
      )
    })
  };

  return (
    <div>
      <HeroHeader 
        image={room.images.heroImage}
        name={room.name}
        avgRate={room.avgRate}
        bookURL={room.bookURL}
      />
      <PageContainer>
        <Content>
          <InfoContainer>
            <RoomInfoContainer>
              <RoomInfo 
                roomType={room.roomType} 
                sleeps={room.sleeps} 
                maxSleeps={room.maxSleeps}
                description={room.description}
              />
            </RoomInfoContainer>
            <RulesContainer>
             <HotelRules/>
            </RulesContainer>
            
          </InfoContainer>
          <FeaturesContainer>
            <RoomFeatures features={room.features}/>
          </FeaturesContainer>
        </Content>
      </PageContainer>
      <ImageSlider images={room.images.other}/>

      <CardsContainer>
        <h3>EXPLORE MORE ROOMS</h3>
        <RoomCards>
          {renderMoreRooms()}
        </RoomCards>
      </CardsContainer>
    </div>
  );
};

export default RoomPage;

const Content = styled.div`
  display: grid;
  row-gap: 5vw;
  grid-template-columns: 55% 45%;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  } 
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  } 
`;

const InfoContainer = styled.div`
`;

const RoomInfoContainer = styled.div`
    border-bottom: 1px solid lightgray; 
  p {
    font-size: 14px;
  }
`;

const RulesContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  color: #0c284f;
  background-color: rgba(147, 233, 217, 0.5);
  padding: 2vh 2vw;
`;

const FeaturesContainer = styled.div`
  margin: 0px 40px;
  position: sticky;
  top: 40px;
  @media (max-width: 992px) {
    justify-content: center;
    width: 50vw;
    margin: 0 auto;
  } 
`;

const CardsContainer = styled.div`
  background-color: #0c284f;
  padding-bottom: 20px;
  h3 {
    text-align: center;
    padding: 40px;
    color: white;
  }
`;

const RoomCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 2fr));
  grid-template-rows: auto auto;
  column-gap: 15px;
  padding: 10px 30px;
  h4, p {
    color: white;
  }
  a {
    color: transparent;
  }
`;

