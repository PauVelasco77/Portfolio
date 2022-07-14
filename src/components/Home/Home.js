import HomeCard from "../HomeCard/HomeCard";
import styled from "@emotion/styled";

const HomeContainer = styled.section`
  height: 100vh;
  background-color: #f0f2f5;
  padding: 50px 20px 20px 270px;

  .background {
    background-color: #344767;
    height: 100%;
    width: 500px;
    transform: rotate(45deg);
    position: absolute;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeCard />
    </HomeContainer>
  );
};

export default Home;
