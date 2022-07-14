import NameHomeCard from "../HomeCard/NameHomeCard";
import styled from "@emotion/styled";
import GifsCard from "../GifsCard/GifsCard";

const HomeContainer = styled.section`
  height: 100vh;
  background-color: #f0f2f5;
  padding: 50px 20px 20px 270px;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
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
      <NameHomeCard />
      <GifsCard />
    </HomeContainer>
  );
};

export default Home;
