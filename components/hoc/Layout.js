import {useState} from 'react';
import styled from 'styled-components';
import HeadMessage from '../navigation/HeadMessage';
import NavHeader from '../navigation/NavHeader';
import SideNav from '../navigation/SideNav';
import Backdrop from './Backdrop';
import Footer from '../navigation/Footer';
import MobileFooter from '../navigation/MobileFooter';

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideNav = () => {
    setIsOpen(!isOpen);
  };

  const closeSideNav = () => {
    setIsOpen(false);
  };

  let backdrop;
  if (isOpen) {
    backdrop = <Backdrop click={closeSideNav}/>
  };

  return (
    <LayoutContainer>
      <HeadMessage/>
      <NavHeader toggleSideNav={toggleSideNav}/>
      <SideNav open={isOpen} click={closeSideNav}/>
      {backdrop}
      {props.children}
      <Footer/>
      <MobileFooter/>
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  position: relative;
  nav {
    display: none;
  }
  @media (max-width: 500px) {
    nav {
      display: block;
    }
  }
`;