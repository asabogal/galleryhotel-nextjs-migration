import styled from 'styled-components';

const CovidNotice = () => {
  return (
    <Container>
      <h4>
        COVID-19 NOTICE TO GUESTS
      </h4>
      <p>We are taking all the precautions necessary to guarantee your safety during your stay. Our cleaning products have been upgraded to the highest grade quality to ensure optimum sanitation levels in all areas. Staff and guests are required to wear masks at all times while inside of our common areas.</p>
      <p>Please note, due to health and safety guidelines during COVID-19, our breakfast service is limited.</p>
      <p>If you have any questions or concerns, please call us at <a href="tel: +1-631-477-4000">631-477-4000.</a> We'll be happy to address them.</p>

    </Container>
  );
};

export default CovidNotice;

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  background-color: lightgrey;
  padding: 20px;
  h4 {
    text-align: center;
  }
  a {
    color: inherit;
  }
`;