import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { TODO_ROUTE, USER_ROUTE, MAIN_ROUTE } from "../routes";

const NavBar: FC = () => {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Brand onClick={() => history.push(MAIN_ROUTE)}>Проект: react-redux-typescript </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button onClick={() => history.push(USER_ROUTE)} variant="outline-light">
              Пользователи
            </Button>

            <Button onClick={() => history.push(TODO_ROUTE)} variant="outline-light" style={{ marginLeft: 24 }}>
              Список дел
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
