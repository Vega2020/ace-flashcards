import React from "react";
import app from "../../firebase";
import CardFrame from "../cardFrame";
import { Navbar, Form, Button, Nav, FormControl } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/home">Ace</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
          <Nav.Link href="/quiz">Quiz Me</Nav.Link>
          <Nav.Link onClick={() => app.auth().signOut()}>Sign out</Nav.Link>
        </Nav>
        
      </Navbar>
      <h1>Home</h1>
      
      <div>
        <CardFrame />
      </div>
    </>
  );
};

export default Home;
