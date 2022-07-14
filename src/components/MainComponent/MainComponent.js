import { GitHub, LinkedIn } from "@mui/icons-material";
import styled from "@emotion/styled";
import { commonStyles } from "../../styles/commonStyles";
import NewNavBar from "../NewNavBar/NewNavBar";
import Home from "../Home/Home";

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
      <NewNavBar />
      <Home />
      <MainComponentContainer>
        <div className="home-content">
          <div className="home-content__text">
            <h1>Hello! I'm Pau Velasco</h1>
            <h2>Junior Frontend Developer</h2>
            <div className="home-content__text--icons">
              <a
                href={"https://github.com/PauVelasco77"}
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon />
              </a>
              <a
                href={"https://www.linkedin.com/in/pau-velasco-garrof%C3%A9/"}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
          <figure className="home-content__gif-container">
            <img src="../../../codingGIF2.gif" alt="coding GIF" />
          </figure>
        </div>
      </MainComponentContainer>
    </>
  );
};

export default MainComponent;
