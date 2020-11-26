import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faTripadvisor} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialBar = (props) => {
  return (
    <Container direction={props.direction}>
      <a href="https://www.instagram.com/galleryhotelny/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon 
          icon={faInstagram} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="https://www.facebook.com/galleryhotelny/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon 
          icon={faFacebookF} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="https://www.tripadvisor.com/Hotel_Review-g47827-d8513453-Reviews-The_Gallery_Hotel-Greenport_North_Fork_Long_Island_New_York.html" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon 
          icon={faTripadvisor} 
          size={props.size}
          color={props.color} 
        />
      </a>

      <a href="mailto:info@galleryhotelny.com">
        <FontAwesomeIcon 
          icon={faEnvelope} 
          size={props.size}
          color={props.color} 
        />
        </a>
     </Container>
  );
};

export default SocialBar;

const Container = styled.div`
  display: flex;
  flex-direction: ${(props => props.direction)};
  justify-content: center;
  align-items: center;
  a {
    color: inherit;
    padding: 10px 10px;
    cursor: pointer;
  }
`;