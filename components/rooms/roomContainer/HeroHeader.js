import styled from 'styled-components';
import Hero from '../../utils/Hero';
import {Button} from '../../utils/Buttons';

const HeroHeader = ({name, avgRate, image, bookURL}) => {

  const content = () => {
    return (
      <BottomContent>
        <TextContainer>
          <h4>{name}</h4>
          <h5><span>${avgRate}</span> / avg rate</h5>
        </TextContainer>
        <ButtonContainer>
          <a href={bookURL}>
            <Button light>BOOK NOW</Button>
          </a>
        </ButtonContainer>
      </BottomContent>
    )
  };

  return (
    <div>
      <Hero 
        image={image}
        contentBottom={content()}
      />
    </div>
  );
};

export default HeroHeader;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: flex-end;
  color: white;
  padding: 0 10vw 5vh 10vw;
  margin: 0; 
  @media (max-width: 650px) {
    flex-direction: column;
    button {
      margin-top: 10px;
      width: 100px;
      height: 30px;
    }
  }
`;

const TextContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h4 {
    font-weight: 600;
    font-size: 45px;
    margin: 0;
    text-shadow: 1px 1px 1px rgba(0,0,0,.45);
  }
  h5 {
    font-weight: 400;
    font-size: 22px;
    padding-left: 20px;
    margin: 0;
    padding-top: 18px;
    text-shadow: 1px 1px 1px rgba(0,0,0,.45);
  }
  span {
    font-weight: 600;
    font-size: 28px;
    text-shadow: 1px 1px 1px rgba(0,0,0,.45);
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: start;
    h4 {
      font-size: 35px;
    }
    h5 {
    padding: 0px;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: start;
    h4 {
      font-size: 25px;
    }
    h5 {
      font-size: 16px;
      font-weight: 400;
      color: aaaaaa;
      padding: 0px;
    }
    span {
      font-size: 18px;
    }
  }
`;

const ButtonContainer = styled.div`
  button {
    font-weight: 400;
  }
`;
