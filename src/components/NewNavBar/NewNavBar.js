import { Avatar, ListItem, Divider, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import FaceIcon from "@mui/icons-material/Face";
import DvrIcon from "@mui/icons-material/Dvr";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import NavBarItem from "../NavBarItem/NavBarItem";
import CottageIcon from "@mui/icons-material/Cottage";
import { GitHub, LinkedIn } from "@mui/icons-material";

const ChildrenContainer = styled.div`
  display: flex;
  margin-left: 250px;
  flex-direction: column;
`;

const NavContainer = styled(Paper)`
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  height: 100vh;
  width: 250px;
  position: fixed;
  border-radius: 0 15px 15px 0;
  font-family: "Roboto", sans-serif;
  font-size: 40px;

  a {
    text-decoration: none;
  }

  .my-profile {
    margin: 15px auto;
  }

  .items {
    margin: 1px auto;
  }
`;

const Profile = styled(ListItem)`
  display: flex;
  align-items: center;
  gap: 5%;
  width: 90%;
  padding: 10px;
  border-radius: 7.5px;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-property: box-shadow, background-color;
  transition-duration: 200ms, 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms, 0ms;
  height: 52px;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;

const CustonDivider = styled(Divider)`
  border-top: 0px solid rgba(0, 0, 0, 0.08);
  border-right: 0px solid rgba(0, 0, 0, 0.08);
  border-left: 0px solid rgba(0, 0, 0, 0.08);
  height: 0.0625rem;
  margin: 1rem 0px;
  border-bottom: none;
  opacity: 0.25;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  );
`;

const NewNavBar = ({ children }) => {
  return (
    <>
      <NavContainer elevation={0} sx={{ maxWidth: 256 }}>
        <Profile className="my-profile">
          <Avatar
            src="../../../profilePhoto2.jpg"
            alt="avatar photo"
            sx={{ height: 36, width: 36 }}
          />
          <Typography sx={{ color: "#fff", fontWeight: 4300, fontSize: 14 }}>
            Pau Velasco Garrof??
          </Typography>
        </Profile>
        <CustonDivider variant="middle" />
        <a href="#home">
          <NavBarItem
            name={"Home"}
            icon={<CottageIcon sx={{ color: "#fff" }} />}
          />
        </a>
        <a href="#about-me">
          <NavBarItem
            name={"About Me"}
            icon={<FaceIcon sx={{ color: "#fff" }} />}
          />
        </a>
        <NavBarItem
          name={"My Projects"}
          icon={<DvrIcon sx={{ color: "#fff" }} />}
        />
        <NavBarItem
          name={"Contact"}
          icon={<PermContactCalendarIcon sx={{ color: "#fff" }} />}
        />
        <CustonDivider variant="middle" />
        <a
          href="https://github.com/PauVelasco77"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NavBarItem
            name={"GitHub"}
            icon={<GitHub sx={{ color: "#fff" }} />}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pau-velasco-garrof%C3%A9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NavBarItem
            name={"LinkedIn"}
            icon={<LinkedIn sx={{ color: "#fff" }} />}
          />
        </a>
      </NavContainer>
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

export default NewNavBar;
