import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Picture} from './Pictures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ImageSlider = ({images}) => {

  const [x, setX] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setX(0);
  }, [images])

  const renderImages = () => {
    return Object.entries(images).map(([key, image]) => {
      return (
        <Slide key={key} style={{transform: `translateX(${x}%)`}}>
          <Picture picture={image}/>
          {key.length > 1 && 
          <SlideInfo>
            <h4>{key}</h4>
          </SlideInfo>
          }
          <LeftButton onClick={moveLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            size='2x'
            color='white'
          />
        </LeftButton>
        <RightButton onClick={moveRight}>
        <FontAwesomeIcon
          icon={faChevronRight}
          size='2x'
          color='white'
        />
        </RightButton>
      </Slide>
      )
    })
  };

  const moveLeft = () => {
    x === 0 ? setX(-100 * (Object.entries(images).length - 1)) : setX(x + 100);
  };

  const moveRight = () => {
    x === -100 * (Object.entries(images).length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <Slider>
      {renderImages()}
    </Slider>    
  )
};

export default ImageSlider;

const Slider = styled.div`
  width: 80%;
  height: auto;
  max-height: 85vh;
  display: flex;
  align-items: center;
  margin: 40px auto;
  overflow: hidden;
  @media (max-width: 599px) {
    width: 90%;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 100%;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
    height: auto;
    min-height: 100%;
    object-fit: contain;
  }
`;

const SlideInfo = styled.div`
  position: absolute;
  width: 80%;
  bottom: 10%;
  left: 40%;
  background-color: rgba(252, 252, 252, 0.9);
  margin: 0 1rem;
  padding: 0 1rem;
  p {
    margin: 0;
  }
  h4, p {
    text-decoration: none;
    color: #0c284f;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  width: 5vw;
  height: 100%;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(0,0,0,0.4);
  }
`;

const LeftButton = styled(Button)`
  left: 0;
`;

const RightButton = styled(Button)`
  right: 0;
`;