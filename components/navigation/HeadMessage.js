import styled from 'styled-components';

const HeadMessage = () => {
  return (
    <Container>
      <p>Rooms available off-season. Please call us at <a href='tel: 631-477-4000'>631-477-4000</a> to book</p>
    </Container>
  );
};

export default HeadMessage;

const Container= styled.div`
  z-index: 999;
  background-color: #28486b;
  font-weight: 900;
  color: white;
  font-size: 14px;
  height: 30px;
  text-align:center; 
  width: 100%;
  overflow: hidden;
  p {
    margin: auto;
    padding-top: 4px;
  }
  a {
    color: inherit;
  }
`;