import { CardMedia, Paper } from "@mui/material";
import styled from "@emotion/styled";

const HomeCardContainer = styled.div`
  margin: 300px;
  height: 300px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  top: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: rgb(52, 71, 103);
  align-items: center;
  position: relative;
  background-image: url(../../../FutsalStats.png);
  background-size: contain;
  background-position: center;

  .shadow-rectangle {
    height: 25%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ImageElement = styled(CardMedia)`
  width: 100%;
  height: 75%;
  margin: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 15px 15px 0 0;
  z-index: 99;
  box-shadow: none;
`;

const ProjectCard = () => {
  return (
    <HomeCardContainer elevation={2}>
      <ImageElement alt="profilephoto" sx={{ boxShadow: 3 }} />
      <div className="shadow-rectangle"></div>
    </HomeCardContainer>
  );
};

export default ProjectCard;
