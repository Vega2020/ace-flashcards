import React from "react";
import aceLogo from "../../Images/aceLogo.png";
import app from "../../firebase";
import CardFrame from "../cardFrame";
import { Navbar,  Nav } from "react-bootstrap";
//import Creator from "../Creator"
//import Quiz from "../Quiz/Quiz"


const Home = () => {
  return (
    <>
      <Navbar className="bg-dark" variant="dark">
        <Navbar.Brand href="/"><img src={aceLogo} height="50px"></img></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/quiz">Quiz Me</Nav.Link>
          <Nav.Link href="/creator">Card Creator</Nav.Link>
          <Nav.Link onClick={() => app.auth().signOut()}>Sign out</Nav.Link>
        </Nav>
        
      </Navbar>      
      <div>
        <CardFrame />
      </div>
      {/* <div><Creator /></div> */}
      {/* <div><Quiz /></div> */}
    </>
  );
};

export default Home;
