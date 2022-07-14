import { CardMedia, Paper } from "@mui/material";
import styled from "@emotion/styled";

const HomeCardContainer = styled(Paper)`
  height: 430px;
  width: 280px;
  background-color: white;
  display: flex;
  justify-content: center;
  top: 50px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px;
  color: rgb(52, 71, 103);
  align-items: center;

  & h1 {
    margin: 0;
    font-size: 24px;
    font-weight: 400;
  }

  & h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 300;
    color: rgb(123, 128, 154);
    margin-top: 20px;
  }
`;

const ImageElement = styled(CardMedia)`
  width: 100%;
  height: 40%;
  margin: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 7.5px;
  position: relative;
  bottom: 50px;

  :hover {
    cursor: pointer;
    transform: translateY(-50px);
  }
`;

const HomeCard = () => {
  return (
    <HomeCardContainer elevation={2}>
      <ImageElement
        image="../../../profilePhoto2.jpg"
        alt="profilephoto"
        sx={{ boxShadow: 3 }}
      />
      <h1>Pau Velasco Garrofé</h1>
      <h2>Junior Frontend Developer</h2>
    </HomeCardContainer>
  );
};

export default HomeCard;
