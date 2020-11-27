import styled from 'styled-components';
import Link from 'next/link';

const Amenity = ({heading, description, link}) => {
  return (
    <Container>
      <h2>{heading}</h2>
      <p>{description}</p>
      { link && 
       <Link href={link}><a>EXPLORE</a></Link>
      }
    </Container>
  );
};

export default Amenity;

const Container = styled.div`
  display: grid;
  border: 2px solid #93e9d9;
  padding: 10px 40px;
  text-align: left;
  a {
    font-size: 14px;
    text-align: right;
    color: #61d1be;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;