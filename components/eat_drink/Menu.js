import { useEffect } from 'react';
import styled from 'styled-components';
// images
import drinks from '../../public/images/eat_drink/Beverage Menu 2.1.pdf';
import dinner from '../../public/images/eat_drink/Food Menu 7.15.pdf';

const Menu = ({path}) => {
  
  useEffect(() => {
   window.scrollTo(0, 0); 
  })

  const menuImages = {
    'dinner': dinner,
    'drinks': drinks
  }

  return (
    <Container>
      <embed
        src={menuImages[path]}
        type="application/pdf"
      />
    </Container>
  );
};

export default Menu;

const Container = styled.div`
  display: grid;
  justify-items: center;
  height: 100vh;
  embed {
    display: block;
    height: 100%;
    width: 100%;
  }
`;