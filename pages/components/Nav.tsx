import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const NavContainer = styled.div`
  width: 100%;
`;

const NavHeader = styled.div`
  height: 13vh;
  width: 100%;
  background: #E40F0F;
  color: white;
`;

const NavHeaderText = styled.div`
  padding: 10px 0 0 2rem;
  width: 266px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 0.7em;
    color: white;

    a {
      color: white;
      font-weight: bold;
      text-decoration: none;
    }
  }

  h2 {
    font-size: 1.5em;
    margin: 0;

`;

interface NavProps {
    page: string;
    subtitle: string;
}

const Nav: React.FC<NavProps> = ({ page, subtitle }): JSX.Element => {
  return (
    <NavContainer>
      <NavHeader>
        <NavHeaderText>
          <p> <Link href='/'>Home</Link> {`>`} {page}</p>
          <h2>{page}</h2>
          <p>{subtitle}</p>
        </NavHeaderText>
      </NavHeader>
    </NavContainer>      
  );
};

export default Nav;