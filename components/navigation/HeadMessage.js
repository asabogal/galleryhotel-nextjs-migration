import styled from 'styled-components';

const HeadMessage = () => {
  return (
    <Container>
      <p>Rooms available off-season. Please call 631-477-4000 to book</p>
    </Container>
  );
};

export default HeadMessage;

const Container= styled.div`
  z-index: 999;
  background-color: #28486b;
  color: lightgray;
  font-size: 12px;
  height: 25px;
  text-align:center; 
  width: 100%;
  overflow: hidden;
  p {
    margin: auto;
    padding-top: 4px;
  }
`;