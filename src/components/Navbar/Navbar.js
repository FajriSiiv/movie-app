import React from "react";
import { Link } from "react-router-dom";
import { Container, DivUl, List } from "./NavbarStyled";

const Navbar = () => {
  return (
    <Container>
      <span>Movie APP</span>
      <DivUl>
        <List>
          <Link to="/">Popular</Link>
        </List>
        <List>Trending</List>
        <List>Rating</List>
      </DivUl>
    </Container>
  );
};

export default Navbar;
