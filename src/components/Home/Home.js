import NameHomeCard from "../HomeCard/NameHomeCard";
import styled from "@emotion/styled";
import GifsCard from "../GifsCard/GifsCard";
import AboutMe from "../AboutMe/AboutMe";
import DownLoadCV from "../DownloadCV/DownloadCV";

const HomeContainer = styled.section`
  height: 100%;
  padding: 50px 20px 20px 270px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  .topContainer {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 10px;
  }
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <div className="topContainer">
        <NameHomeCard />
        <DownLoadCV />
        <GifsCard />
      </div>
      <AboutMe />
    </HomeContainer>
  );
};

export default Home;
