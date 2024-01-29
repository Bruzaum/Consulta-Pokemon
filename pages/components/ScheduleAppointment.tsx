import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ScheduleAppointmentContainer = styled.div`
  width: 100%;
`;

const ScheduleAppointmentHeader = styled.div`
  height: 13vh;
  width: 100%;
  background: #E40F0F;
  color: white;
`;

const ScheduleAppointmentHeaderText = styled.div`
  padding: 10px 0 0 2rem;
  width: 266px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 0.7em;

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

const ScheduleAppointment: React.FC = () => {
  return (
    <ScheduleAppointmentContainer>
      <ScheduleAppointmentHeader>
        <ScheduleAppointmentHeaderText>
          <p> <Link href='/'>Home</Link> {`>`} Agendar Consulta</p>
          <h2>Agendar Consulta</h2>
          <p>Recupere seus pokémons em 5 segundos.</p>
        </ScheduleAppointmentHeaderText>
      </ScheduleAppointmentHeader>
    </ScheduleAppointmentContainer>      
  );
};

export default ScheduleAppointment;
