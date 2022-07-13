import styled from "styled-components";

const CottageRoundedIconRotate = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    & svg {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }

    & p {
      opacity: 1;
    }
  }

  & svg {
    -webkit-transition: 0.7s ease-out;
    -moz-transition: 0.7s ease-out;
    transition: 0.7s ease-out;
    cursor: pointer;
    font-size: 40px;

    @media (max-width: 480px) {
      font-size: 30px;
    }
  }

  & p {
    margin: 0;
    text-align: center;
    font-size: 10px;
    font-weight: 600;
    opacity: 0;
    -webkit-transition: 0.7s ease-out;
    -moz-transition: 0.7s ease-out;
    transition: 0.7s ease-out;
  }
`;

const NavIcon = ({ children, name }) => {
  return (
    <>
      <CottageRoundedIconRotate>
        {children}
        <p>{name}</p>
      </CottageRoundedIconRotate>
    </>
  );
};

export default NavIcon;
