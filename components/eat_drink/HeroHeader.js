import styled from 'styled-components';
import Hero from '../utils/Hero';
// image
import bar from '../../public/images/eat_drink/bar2.png';

const HeroHeader = () => {

  const content = () => {
    return (
      <ContentContainer>
        <h2>Kon Tiki</h2>
        <h4>at</h4>
        <h4>THE GALLERY HOTEL</h4>
    </ContentContainer>
    )

  };

  return (
    <div>
      <Hero 
        image={bar}
        contentTop={content()}
      />
    </div>
  );
};

export default HeroHeader;

const ContentContainer = styled.div`
  color: white;
  text-align: center;
  h2 {
    font-size: 5rem;
    line-height: 90%;
  }
  h2, h4 {
    font-weight: 200;
    margin: 0;
  }
`;