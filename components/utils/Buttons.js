import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Button = styled.button`
  background-color: ${(props => props.light ? 'rgb(147, 233, 217)' : 'white')};
  color: ${(props => props.light ? '#0c284f' : '#0c284f')};
  font-size: ${(props => props.font || '12px')};
  height: ${(props => props.height || '45px')};
  width: ${(props => props.width || '180px')};
  border: ${(props => props.light ? 'none' : '2px solid #0c284f')};
  cursor: pointer;
  &:hover {
    background-color: ${(props => props.light ? '#7dd3c5' : '#274268')};
    color: ${(props => props.light ? '#0c284f' : 'white')}
}
`;

export const MenuButton = () => {
  return (
    <MenuBtn>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </MenuBtn>
  )
}

const BtnContainer = styled.div`
  cursor: pointer;
`;

const MenuBtn = styled.div`
  cursor: pointer;
  div {
    width: 50px;
    height: 2px;
    background-color: #002b5c;
    margin: 6px 0;
    transition: 0.4s;
  } 
  &:hover {
    div {
      height: 3px;
      margin: 7px 0;
    }
  }
  @media (max-width: 500px) {
    div {
      width: 35px;
      height: 1px;
      background-color: #002b5c;
      margin: 6px 0;
      transition: 0.4s;
    } 
    &:hover {
      div {
        height: 2px;
        margin: 7px 0;
      }
    }
  }
`;

export const CloseButton = (props) => {
  return (
    <CloseBtn>
      <FontAwesomeIcon 
        icon={faTimes} 
        size={props.size} 
        color={props.color}
        onClick={props.click}
      />
    </CloseBtn>
  );
};

const CloseBtn = styled(BtnContainer)`
  margin: 10px 15px 10px 0px;
  :hover {
    transform: scale(1.3)
    }
`;