import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import { Carousel } from "react-responsive-carousel";

const HomeCardContainer = styled(Paper)`
  height: 300px;
  width: 400px;
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
  margin-top: 150px;

  & img {
    border-radius: 7.5px;
    margin: auto;
    width: 350px;
    height: 250px;
  }
`;

const GifsCard = () => {
  return (
    <HomeCardContainer elevation={2}>
      <Carousel
        dynamicHeight={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={7000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <img src="../../../codingGIF.gif" alt="gif1" />
        <img src="../../../codingGIF2.gif" alt="gif2" />
        <img src="../../../codingGIF3.gif" alt="gif3" />
      </Carousel>
    </HomeCardContainer>
  );
};

export default GifsCard;
