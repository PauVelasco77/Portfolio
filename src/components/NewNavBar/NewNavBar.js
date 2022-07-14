import { Avatar, Box, Divider, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { ListItem } from "@mui/material";

const NavContainer = styled(Paper)`
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  height: 100vh;
  width: 250px;
  position: fixed;
  border-radius: 0 15px 15px 0;
  font-family: "Roboto", sans-serif;
  font-size: 40px;
`;

const Profile = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 15px auto;
  padding: 10px;
  border-radius: 7.5px;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-property: box-shadow, background-color;
  transition-duration: 200ms, 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1),
    cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms, 0ms;

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

const NewNavBar = () => {
  return (
    <NavContainer elevation={0} sx={{ maxWidth: 256 }}>
      <Profile>
        <Avatar src="../../../profilePhoto2.jpg" alt="avatar photo" />
        <Typography sx={{ color: "#fff", fontWeight: 300, fontSize: 14 }}>
          Pau Velasco Garrofé
        </Typography>
      </Profile>
      <CustonDivider variant="middle" />
    </NavContainer>
  );
};

export default NewNavBar;
