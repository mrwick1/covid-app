import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderSection } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Link to='/'>Home</Link>
        <Link to='/registration'>Vaccine registration</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/signup'>Sign Up</Link>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
