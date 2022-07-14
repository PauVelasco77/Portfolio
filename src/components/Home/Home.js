import NameHomeCard from "../HomeCard/NameHomeCard";
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
      <NameHomeCard />
    </HomeContainer>
  );
};

export default Home;
