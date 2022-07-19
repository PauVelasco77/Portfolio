import NameHomeCard from "../HomeCard/NameHomeCard";
import styled from "@emotion/styled";
import GifsCard from "../GifsCard/GifsCard";
import DownLoadCV from "../DownloadCV/DownloadCV";

const HomeContainer = styled.section`
  height: 100%;
  padding: 50px 20px 20px 20px;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

const Home = () => {
  return (
    <HomeContainer id="home">
      <NameHomeCard />
      <DownLoadCV />
      <GifsCard />
    </HomeContainer>
  );
};

export default Home;
