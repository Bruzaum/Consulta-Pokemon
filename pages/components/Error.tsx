import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BiError } from "react-icons/bi";

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
  );
};

export default Error;