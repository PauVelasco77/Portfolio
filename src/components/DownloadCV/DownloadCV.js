import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const HomeCardContainer = styled(Paper)`
  height: 270px;
  width: 33%;
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
  /* position: relative; */
  margin-top: 30px;

  .downloads {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }

  .cv-container {
    display: flex;
    align-items: center;
  }

  & h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
  }

  a {
    padding: 5px 0;
    width: 100%;
    color: #ce0000;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
    border-radius: 7.5px;
    transition: all 0.3s ease-in-out;
    & p {
      text-decoration: none;
      color: rgb(68, 71, 87);
      margin: none;
    }

    :hover {
      background-color: #e8e8e8;
      cursor: pointer;
    }
  }
`;

const DownLoadCV = () => {
  return (
    <HomeCardContainer elevation={2}>
      <h3>Download my CV</h3>
      <div className="downloads">
        <a
          id="en"
          className="cv-container"
          href="../../../CV-PauVelascoENG (1).pdf"
          download="CVPauVelasco-ENG"
        >
          <p>ENGLISH VERSION</p>
          <PictureAsPdfIcon />
        </a>
        <a
          id="es"
          className="cv-container"
          href="../../../CV-PauVelasco (1).pdf"
          download="CVPauVelasco-ES"
        >
          <p>SPANISH VERSION</p>
          <PictureAsPdfIcon />
        </a>
      </div>
    </HomeCardContainer>
  );
};

export default DownLoadCV;
