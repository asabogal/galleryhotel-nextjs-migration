import styled from 'styled-components';

const RoomInfo = ({roomType, sleeps, maxSleeps, description}) => {
  return (
    <div>
      <Titles>
        <h4>{roomType}</h4><h4>&bull;</h4><h4>SLEEPS {sleeps} {maxSleeps && <span>(Max {maxSleeps})</span>} </h4>        
      </Titles>
      <Description>
        <p>{description}</p>
      </Description>
    </div>
  );
};

export default RoomInfo;

const Titles = styled.div`
  display: flex;
  h4 {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
    padding-right: 1vw;
  }
  span {
    font-size: 10px;
  }
`;

const Description = styled.div`
`;