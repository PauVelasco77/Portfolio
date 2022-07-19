import { GitHub, LinkedIn } from "@mui/icons-material";
import styled from "@emotion/styled";
import { commonStyles } from "../../styles/commonStyles";
import NewNavBar from "../NewNavBar/NewNavBar";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";

const MainComponentContainer = styled.section`
  height: calc(100vh - 65px);
  max-height: calc(100vh - 65px);
  max-width: 100vw;
  font-family: "Ubuntu";
  background-color: ${commonStyles.mainBackground};
  color: ${commonStyles.fontColor};
  padding: 0 20px;

  .home-content {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 400px) {
      flex-direction: column;
    }

    .home-content__text {
      & h1 {
        font-size: 40px;
        margin: 10px 0;
      }

      .home-content__text--icons {
        display: flex;
        justify-content: space-around;
        margin-top: 30px;
      }
    }
    .home-content__gif-container {
      height: 400px;
      margin: 0;
      @media (max-width: 400px) {
        height: 200px;
      }

      & img {
        border-radius: 15px;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const GitHubIcon = styled(GitHub)`
  color: #000;
  font-size: 50px;
  cursor: pointer;
  transition: 0.3s ease-out;

  :hover {
    transform: scale(1.3);
  }
`;

const LinkedInIcon = styled(LinkedIn)`
  color: #0a66c2;
  font-size: 60px;
  cursor: pointer;
  transition: 0.3s ease-out;

  :hover {
    transform: scale(1.3);
  }
`;

const MainComponent = () => {
  return (
    <>
      <NewNavBar>
        <Home />
        <AboutMe />
      </NewNavBar>
    </>
  );
};

export default MainComponent;
