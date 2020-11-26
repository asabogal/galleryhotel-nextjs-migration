import styled from 'styled-components';
import {Button} from '../utils/Buttons'

const MobileFooter = () => {
  return (
    <Container>
      <a href='https://galleryhotelny.client.innroad.com'>
        <Button width='100vw' light>BOOK A ROOM</Button>
      </a>
    </Container>
  );
};

export default MobileFooter;

const Container = styled.nav`
  position: sticky;
  bottom: 0%;
  width: 100vw;
`;