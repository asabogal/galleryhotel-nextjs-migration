import styled from 'styled-components';

const SpotCard = () => {
  return (
    <Container>
      <Card>
        <Top>
          <h3>Brix & Rye</h3>
          <p>Classic Cocktails and more modern variations. Best Pizza in town.</p>
        </Top>
        <Bottom>
          <p>1 min. walk</p>
        </Bottom>
      </Card>
      <Card>
        <Top>
          <h3>The Frisky Oyster</h3>
          <p>American bistro boasting local ingredients & a hipster vibe..</p>
        </Top>
        <Bottom>
          <p>5 min. walk</p>
        </Bottom>
      </Card>
      <Card>
        <Top>
          <h3>The Times Vintage</h3>
          <p>One-of-a-kind pieces that are gently used & genuinely loved.</p>
        </Top>
        <Bottom>
          <p>1 min. walk</p>
        </Bottom>
      </Card>
    </Container>
  );
};

export default SpotCard;

const Container = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  background: white;
  @media (max-width: 675px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Card = styled.div`
  display: grid;  
  grid-template-rows: 2fr 1fr;
  padding: 10px 20px;
  margin: 0 auto;
  font-weight: 600;
  width: 160px;
  min-height: 180px;
  background-color: rgba(147, 233, 217, 0.4);
  h3 {
    font-size: 14px;
    font-weight: 500;
    margin: 5px 0px;
    text-transform: uppercase;
  }
  p {
    margin: 0;
    font-size: 13px;
  }
  a { 
    text-decoration: none;
    color: inherit;
    font-size: 14px;
    font-weight: 400;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Top = styled.div`

`;
const Bottom = styled.div`
  align-self: flex-end;
`;