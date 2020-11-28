import styled from 'styled-components';
import Link from 'next/link';
import {Picture} from '../utils/Pictures';

const RoomCard = ({name, image, description, features, link, explore, small}) => {

  const renderIcons = (features) => {
    return Object.entries(features).map(([feature, icon]) => {
      return <img key={feature} src={icon} alt={`${feature}-icon`}/>
    })
  }

  return (
    <Container small={small}>
      <ImageContainer>
        <Link href={link}>
          <a><Picture picture={image} alt='room-picture'/></a>
        </Link>
      </ImageContainer>
      <InfoContainer>
        <h4>{name}</h4>
        <IconsContainer>
          {renderIcons(features)}
        </IconsContainer>
        <p>{description}</p>
        {
          explore && <Link to={link}>EXPLORE</Link>
        }
      </InfoContainer>
    </Container>
  );
};

export default RoomCard;

const Container = styled.div`
  display: grid;
  grid-template-rows: ${props => props.small ? '30% 70%' : '45% 55%'};
  @media (max-width: 620px) {
    grid-template-rows: auto auto;
  }
  @media (min-width: 1800px) {
    grid-template-rows: 50% 50%;
  }
`;

const ImageContainer = styled.div`
  height: auto;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  padding-bottom: 20px;
  p {
    font-size: 14px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: #61d1be;
    :hover {
      text-decoration: underline;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  img {
    padding-right: 15px;
  }
`;

