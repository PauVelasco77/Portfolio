import { Paper } from "@mui/material";
import styled from "@emotion/styled";

const NavContainer = styled(Paper)`
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  height: 100vh;
  width: 250px;
  position: fixed;
  border-radius: 0 15px 15px 0;
`;

const NewNavBar = () => {
  return <NavContainer elevation={0} sx={{ maxWidth: 256 }}></NavContainer>;
};

export default NewNavBar;
