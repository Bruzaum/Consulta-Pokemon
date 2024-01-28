import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import homeBackground from '../../public/images/pokemon-hero.jpg';

const HomeContainer = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
  text-align: center;

  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;


const HomeText = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2em;
  max-width: 510px;
  color: white;
  
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Image src={homeBackground} alt="Imagem de Fundo com Pokemons na praia" />
      <HomeText>Cuidamos bem do seu pokemón, para ele cuidar bem de você</HomeText>
    </HomeContainer>
  );
};

export default Home;
