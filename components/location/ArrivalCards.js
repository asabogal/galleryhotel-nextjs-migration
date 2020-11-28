import styled from 'styled-components';
// icons
import bus from '../../public/images/location/bus.svg';
import train from '../../public/images/location/train.svg';
import car from '../../public/images/location/car.svg';

const ArrivalCard = () => {
  return (
    <Container>
      <Card>
        <Top>
          <img src={bus} alt='bus-icon'></img>
          <p>Hapmton Jitney</p>
          <p>7 min. walk</p>
        </Top>
        <Bottom>
          <p><a href='https://www.hamptonjitney.com/booking/jitney/' target="_blank" rel="noopener noreferrer">Schedule</a></p>
        </Bottom>
      </Card>
      <Card>
        <Top>
          <img src={train} alt='train-icon'></img>
          <p>L.I.R.R.</p>
          <p>7 min. walk</p>
        </Top>
        <Bottom>
          <p><a href='http://lirr42.mta.info/index.php?error=noRoute' target="_blank" rel="noopener noreferrer">Schedule</a></p>
        </Bottom>
      </Card>
      <Card>
        <Top>
          <img src={car} alt='car-icon'></img>
          <p>Long Island Expwy</p>
          <p>Hotel Parking</p>
        </Top>
        <Bottom>
          <p><a href="https://www.google.com/maps?saddr=My+Location&daddr=439+Main+Street+Greenport+NY+11944" target="_blank" rel="noopener noreferrer">Directions</a></p>
        </Bottom>
      </Card>
    </Container>
  );
};

export default ArrivalCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 40px 0px;
  @media (max-width: 675px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Card = styled.div`
   display: grid;  
  grid-template-rows: 2fr 1fr;
  background: white;
  padding: 20px;
  margin: 0 auto;
  font-weight: 600;
  width: 120px;
  p {
    margin: 0;
    font-size: 13px;
  }
  a { 
    margin-top: 10px;
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Top = styled.div`

`;
const Bottom = styled.div`
  align-self: center;
`;
