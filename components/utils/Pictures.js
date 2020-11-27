import styled from 'styled-components';
import Link from 'next/link';

export const Picture = (props) => {
  return (
   <Image src={props.picture} alt={props.alt}/>
  )
}

export const Thumbnail = (props) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a>
          <ThumbnailContainer contain={props.contain}>
            <img src={props.image} alt={props.alt}/>
            {props.heading &&
            <ThumbnailInfo>
              <h4>{props.heading}</h4>
              <p>{props.info}</p>
            </ThumbnailInfo>
            }
          </ThumbnailContainer>
        </a>
      </Link>
      )
  } else {
    return (
      <ThumbnailContainer contain={props.contain}>
        <img src={props.image} alt={props.alt}/>
        {props.heading &&
          <ThumbnailInfo>
            <h4>{props.heading}</h4>
            <p>{props.info}</p>
          </ThumbnailInfo>
        }
      </ThumbnailContainer>
    ) 
  }
}

const Image = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: ${props => props.contain || 'cover'}
  }
`;

const ThumbnailInfo = styled.div`
  position: absolute;
  width: 80%;
  bottom: 1rem;
  left: 1rem;
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
  @media (max-width: 499px) {
    h4 {
      font-size: 16px;
      letter-spacing: -0.8px;
    }
    p {
      font-size: 14px;
    }
  }
`;