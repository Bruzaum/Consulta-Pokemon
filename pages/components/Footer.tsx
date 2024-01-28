import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 8vh;
  width: 100%;
  background: #1D1D1D;
  display:flex;
  align-items: center;
  justify-content: center
`;


const FooterText = styled.p`
  font-size: 0.5em;
  color: white;
  
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>Todas as marcas e ilustrações utilizadas são de seus resepctivos donos.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
