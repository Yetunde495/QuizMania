import React from "react";
import styled from "styled-components";
import { Toggle } from "./Toggle";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-bg-color);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.navbarText};
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.navbarBg};
  color: ${(props) => props.theme.navbarText};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavBrand = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #6665dd;
  font-family: cursive;
`;

const Navbar = () => {
  return (
    <NavBar>
      <NavBrand href="/">Quizmania</NavBrand>
      <Nav>
        <Toggle />
      </Nav>
    </NavBar>
  );
};

export default Navbar;
