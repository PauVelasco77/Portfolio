import NavIcon from "../NavIcon/NavIcon";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import DvrRoundedIcon from "@mui/icons-material/DvrRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import { AppBar, Box } from "@mui/material";
import styled from "@emotion/styled";
import { commonStyles } from "../../styles/commonStyles";

const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;

    @media (max-width: 400px) {
      max-width: 400px;
      justify-content: space-around;
    }
  }

  & p {
    margin: 0;
  }
`;

const AppBarStyled = styled(AppBar)`
  background-color: ${commonStyles.navBar};
  height: 65px;
`;

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <NavBarContainer>
          <ul>
            <NavIcon name={"HOME"}>
              <CottageRoundedIcon />
            </NavIcon>
            <NavIcon name={"ABOUT ME"}>
              <FaceRoundedIcon />
            </NavIcon>
            <NavIcon name={"MY PROJECTS"}>
              <DvrRoundedIcon />
            </NavIcon>
            <NavIcon name={"CONTACT"}>
              <PermContactCalendarRoundedIcon />
            </NavIcon>
          </ul>
        </NavBarContainer>
      </AppBarStyled>
    </Box>
  );
};

export default NavBar;
