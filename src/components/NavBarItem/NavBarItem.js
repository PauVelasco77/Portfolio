import { ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";

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

const NavBarItem = ({ name, icon }) => {
  return (
    <Profile className="items">
      {icon}
      <Typography sx={{ color: "#fff", fontWeight: 400, fontSize: 14 }}>
        {name}
      </Typography>
    </Profile>
  );
};

export default NavBarItem;
