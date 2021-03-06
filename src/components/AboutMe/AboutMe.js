import { Paper } from "@mui/material";
import styled from "@emotion/styled";

const AboutMeContainer = styled.section`
  padding: 0 20px 20px 20px;
`;

const AboutMeCard = styled(Paper)`
  height: 250px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  top: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 20px;
  color: rgb(52, 71, 103);
  align-items: center;

  & a {
    font-weight: 500;
    color: #000;
    text-decoration: none;
  }

  & h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
  }

  & p {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    color: rgb(68, 71, 87);
    margin-top: 20px;
    text-align: justify;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeContainer id="about-me">
      <AboutMeCard elevation={2}>
        <h3>About Me</h3>
        <p>
          I am a Front-end developer passionate about delivering applications
          with clean and understandable code, always trying to apply best
          practices, and making an effort to make the interfaces pleasant for
          the user. I like working with new technologies, learning new
          Frameworks and trying to adapt to them in the best and fastest way.{" "}
          <br />
          <br /> If you want to take a look at some of my projects made with
          React, redux and Typescript, don't hesitate to drop by my github or
          write me a message! <br />
          <br />
          <a
            href="https://github.com/PauVelasco77"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github: https://github.com/PauVelasco77
          </a>
        </p>
      </AboutMeCard>
    </AboutMeContainer>
  );
};

export default AboutMe;
