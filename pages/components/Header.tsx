import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import logo from '../../public/images/white-pokeball.svg'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: padding 0.5s ease;
  height: 105px;
`;

const LogoContainer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #e40f0f;
  color: #fff;
  border-radius: ${({ isExpanded }) => (isExpanded ? '36px' : '100%')};
  height: 44px;
  max-width: 260px;
  padding: 0 10px;

  img {
    width: 100%;
    height: auto;
    margin-right: 6px; 
    margin-top: 3px; 
    transition: width 2.5s ease, border-radius 0.5s ease;
  }

  span {
    margin-left: 10px;
    margin-bottom: 3px;
    display: ${({ isExpanded }) => (isExpanded ? 'initial' : 'none')};
    color: #fff;
    font-weight: bold;
    opacity: ${({ isExpanded }) => (isExpanded ? '1' : '0')};
    transition: opacity 2.5s ease;
  }

  &:hover span {
    display: initial;
    opacity: 1;
  }

  &:hover {
    border-radius: 36px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 20px;
    text-decoration: none;
    color: #000;
  }
`;

const AppointmentButton = styled.button`
  background-color: #e40f0f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const [isLogoExpanded, setIsLogoExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLogoExpanded(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer isExpanded={isLogoExpanded}>
        <Link href="/">
            <Image src={logo} alt="Logo" />
        </Link>
        <span>Centro Pokemon</span>
      </LogoContainer>
      <MenuContainer>
        <Link href="/quem-somos">
          Quem somos
        </Link>
        <AppointmentButton>Agendar Consulta</AppointmentButton>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;