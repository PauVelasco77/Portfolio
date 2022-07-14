import { CardMedia, Paper, Rating } from "@mui/material";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const HomeCardContainer = styled(Paper)`
  height: 300px;
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
  position: relative;

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

  :hover {
    & .MuiCardMedia-root {
      cursor: pointer;
      transform: translateY(-50px);
    }
  }
`;

const ImageElement = styled(CardMedia)`
  width: 100%;
  height: 70%;
  margin: 0;
  transition: all 0.3s ease-in-out;
  border-radius: 7.5px;
  position: relative;
  bottom: 50px;
  z-index: 99;
`;

const StyledRating = styled(Rating)`
  position: absolute;
  margin: auto;
  top: 120px;
  z-index: 1;

  & .MuiRating-iconFilled {
    color: #ff6d75;
  }
  & .MuiRating-iconHover {
    color: #ff3d47;
  }
`;

const NameHomeCard = () => {
  return (
    <HomeCardContainer elevation={2}>
      <ImageElement
        image="../../../profilePhoto.jpg"
        alt="profilephoto"
        sx={{ boxShadow: 3 }}
      />
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <h1>Pau Velasco Garrofé</h1>
      <h2>Junior Frontend Developer</h2>
    </HomeCardContainer>
  );
};

export default NameHomeCard;
