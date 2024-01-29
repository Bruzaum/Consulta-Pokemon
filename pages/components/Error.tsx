import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BiError } from "react-icons/bi";

const ErrorContainer = styled.div`
  width: 100%;
`;

const ErrorHeader = styled.div`
  height: 13vh;
  width: 100%;
  background: #E40F0F;
  color: white;
`;

const ErrorHeaderText = styled.div`
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

const ErrorCardContainer = styled.div`
  width: 100%;
  height: 68vh;
  display: flex;
  justify-content: center;
`;

const ErrorCard = styled.div`
  margin-top: 5em;
  width: 410px;
  height: 300px;
  background: linear-gradient(0deg, rgba(223, 134, 134, 0.04), rgba(223, 134, 134, 0.04));
  border: 1px solid #DF8686;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  }

  svg {
    color: #E40F0F;
    height: 2em;
    width: 2em;
  }

  p {
    color: #747474;
  }
`;

const NewAppointmentButton = styled.button`
  background-color: #e40f0f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 36px;
  cursor: pointer;
`;

const Error: React.FC = () => {
  return (
    <ErrorContainer>
      <ErrorHeader>
        <ErrorHeaderText>
          <p> <Link href='/'>Home</Link> {`>`} Agendar Consulta</p>
          <h2>Agendar Consulta</h2>
          <p>Recupere seus pokémons em 5 segundos.</p>
        </ErrorHeaderText>
      </ErrorHeader>

      <ErrorCardContainer>
        <ErrorCard>
            <h3>Houve um problema no agendamento</h3>
            <BiError />
            <p>Não foi possível realizar agendamento. Tente novamente clicando no botão abaixo.</p>
            <Link href="/schedule-appointment">
                <NewAppointmentButton>Fazer Novo Agendamento</NewAppointmentButton>
            </Link>
        </ErrorCard>
      </ErrorCardContainer>

    </ErrorContainer>      
  );
};

export default Error;