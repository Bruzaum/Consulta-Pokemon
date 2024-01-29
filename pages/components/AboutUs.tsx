import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const AboutUsContainer = styled.div`
  width: 100%;
`;

const AboutUsHeader = styled.div`
  height: 13vh;
  width: 100%;
  background: #E40F0F;
  color: white;
`;

const AboutUsHeaderText = styled.div`
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

const AboutUsTextDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const AboutUsTextContainer = styled.div`
  width: 410px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  }
`;

const AboutUsTitle = styled.h1`
  font-size: 2em;
  color: black;
`;

const AboutUsSubTitle= styled.h2`
  font-size: 1em;
  color: black;
`;

const AboutUsText = styled.p`
  font-size: 0.5em;
  color: black;
`;

const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer>
      <AboutUsHeader>
        <AboutUsHeaderText>
          <p> <Link href='/'>Home</Link> {`>`} Quem Somos</p>
          <h2>Quem Somos</h2>
          <p>A maior rede de tratamento pokémon.</p>
        </AboutUsHeaderText>
      </AboutUsHeader>

      <AboutUsTextDiv>
        <AboutUsTextContainer>
          <AboutUsTitle>
            O Centro Pokemón
          </AboutUsTitle>

          <AboutUsSubTitle>
            Como funciona a cura de um pokémon?
          </AboutUsSubTitle>
          <AboutUsText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel mi ut nunc sodales mattis eget at sem. Praesent mattis interdum nulla, quis molestie justo lacinia a. Curabitur rutrum ante a ligula aliquet pellentesque. Phasellus ut elit fermentum, lacinia felis iaculis, aliquam augue. Vestibulum dignissim dignissim nisi sed tincidunt. Fusce magna magna, porta sit amet accumsan at, ullamcorper id magna. Proin congue dolor eget iaculis porta. Suspendisse sit amet scelerisque nisl. Nunc sagittis lacus at nulla auctor, ut euismod velit sollicitudin. Phasellus eu quam a quam luctus mollis non eu lacus. Quisque fringilla enim vitae est rhoncus, nec feugiat ex tincidunt. Donec venenatis pharetra elit, eget fermentum ipsum. Aenean auctor, arcu a sagittis tempor, quam nisl ullamcorper ante, vitae dictum elit augue eget leo. Aliquam ante nisi, porttitor vitae congue at, consectetur nec ligula. Vestibulum viverra elit et risus viverra imperdiet. Nullam egestas enim et lacus eleifend sollicitudin.
    Proin porttitor tincidunt fringilla. Sed et eros quis nibh mollis bibendum id eget dolor. Etiam hendrerit risus non libero varius, et suscipit nibh tempor. Donec ut aliquam massa. Aenean nec libero leo. Nullam dignissim augue a lacinia porttitor. Curabitur sed est sed metus gravida aliquet. Suspendisse potenti. Praesent condimentum pellentesque efficitur. Maecenas vel risus diam.
          </AboutUsText>

          <AboutUsSubTitle>
            Uma tradição de mais de 20 anos
          </AboutUsSubTitle>
          <AboutUsText>
            Etiam ac nisi sagittis, ullamcorper ex vel, dignissim urna. Mauris commodo diam ac purus elementum, nec molestie arcu tincidunt. Donec quis sollicitudin sapien, vitae tincidunt lorem. Sed vel est et orci pharetra interdum. Donec felis mauris, faucibus in hendrerit sed, malesuada vitae mi. Ut nec tellus ut lorem tincidunt iaculis. Mauris vulputate in ante at ultrices. Phasellus non ligula nec dolor suscipit dapibus nec at enim.
          </AboutUsText>

          <AboutUsSubTitle>
            O melhor para seu pokémon
          </AboutUsSubTitle>
          <AboutUsText>
            Quisque porta cursus metus, id posuere mi commodo ac. Proin auctor nisl eu mattis dignissim. Nullam efficitur, eros a sollicitudin dignissim, nunc risus sollicitudin nunc, vitae lacinia erat mi sed dui. Mauris ante quam, malesuada eget ornare id, pellentesque nec felis. Nulla nec felis elementum, tristique ligula vel, aliquet erat. Nullam a magna tristique, semper nulla id, bibendum tellus. Etiam eleifend tortor in sollicitudin maximus. Proin dignissim feugiat urna, non imperdiet ligula ullamcorper ut. Nam velit quam, dignissim at lorem quis, facilisis vulputate sem. Quisque id sapien vehicula, hendrerit odio a, suscipit lectus. Phasellus aliquam erat non viverra egestas. Sed quis ipsum eu sem molestie accumsan sit amet non odio. In libero nisl, hendrerit at tortor eu, commodo posuere ipsum. Morbi bibendum vel nulla in ullamcorper. Sed ultricies, est sed molestie varius, dolor ipsum ultricies enim, at dapibus nulla erat eu purus. Pellentesque non ultrices nulla.
          </AboutUsText>

          <AboutUsSubTitle>
            Alta Tecnologia
          </AboutUsSubTitle>
          <AboutUsText>
            Fusce vitae ex pharetra, gravida turpis in, pretium dui. Nulla fringilla odio sed dolor varius cursus vitae at lectus. Aenean fermentum ligula sed tincidunt venenatis. Mauris quis ligula lacus. Integer viverra condimentum orci, quis consequat odio imperdiet ut. Praesent maximus diam porttitor est sodales, id posuere lacus porta. Sed vel mauris vel mauris fringilla porttitor vitae eget neque. Vivamus eget dictum dolor. Nullam in ullamcorper purus, vel pulvinar ex. Cras posuere feugiat auctor. Mauris sodales dolor quis rhoncus hendrerit.
          </AboutUsText>
        </AboutUsTextContainer>
      </AboutUsTextDiv>
    </AboutUsContainer>
  );
};

export default AboutUs;
