import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { MdOutlineVerified } from "react-icons/md";

const ConfirmationCardContainer = styled.div`
  width: 100%;
  height: 68vh;
  display: flex;
  justify-content: center;
`;

const ConfirmationCard = styled.div`
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
    color: #0FA4E4;
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

const Confirmation: React.FC = () => {
  return (
    <ConfirmationCardContainer>
    <ConfirmationCard>
        <h3>Consulta Agendada</h3>
        <MdOutlineVerified />
        <p>Seu agendamento para dia xx/xx/xxxx, às 00h00m, para 0x pokémons foi realizado com sucesso!</p>
        <Link href="/schedule-appointment">
            <NewAppointmentButton>Fazer Novo Agendamento</NewAppointmentButton>
        </Link>
    </ConfirmationCard>
    </ConfirmationCardContainer>  
  );
};

export default Confirmation;