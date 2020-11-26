import styled from 'styled-components';

export const HeadingContainer = styled.div`
margin-top: 40px;
margin-bottom: 10vh;
text-align: center;
`;

export const PageContainer = styled.div`
  margin: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  @media (max-width: 599px) {
    margin: 5px;
  }
`;

export const TwoColCaptionImage = ({height, children}) => {
  return (
  <TwoColContainer height={height}>
    {children }
  </TwoColContainer>
  )
}

const TwoColContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40% 60%;
  column-gap: 2rem;
  height: ${props => props.height || '100vh'};
  @media (max-width: 1099px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    row-gap: 1rem;
    height: auto;
  }
`;
