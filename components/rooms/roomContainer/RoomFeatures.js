import styled from 'styled-components';

const RoomFeatures = ({features}) => {

  const renderFeatures = () => {
    return Object.entries(features).map(([feature, icon]) => {
      return (
        <ul key={feature}>
          <Feature key={feature}><img src={icon} alt='icon'/> {feature}</Feature>
        </ul>
      )
    })
  };

  return (
    <div>
      <Title>
       <h4>ROOM FEATURES</h4>
      </Title>
      <FeaturesContainer>
        {renderFeatures()}
      </FeaturesContainer>
    </div>
  );
};

export default RoomFeatures;

const Title = styled.div`
  border-bottom: 1px solid lightgray;
  h4 {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 992px) {
    justify-content: center;
  } 
  @media (max-width: 599px) {
    justify-content: center;
    grid-template-columns: 1fr;
  } 
  ul {
    padding: 0px 5px;
    margin-bottom: 10px;
  }
`;

const Feature = styled.li`
  display: flex;
  font-size: 14px;
  font-weight: 200;
  list-style: none;
  img {
    padding-right: 10px;
  }
`;