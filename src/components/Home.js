import AddTask from "./AddTask";
import Tasks from "./Tasks";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { logout } from '../utils';
function Home() {
  return (
    <>
     <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Taches</Nav.Link>
            <Nav.Link href="#link" onClick={logout}>Déconnexion</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <h1>Liste De Tâches</h1>
        <Tasks />
        <br />
        <h1>Créer une nouvelle Tâche</h1>
        <AddTask />
      </Container>
    </>
  );
}

export default Home;

