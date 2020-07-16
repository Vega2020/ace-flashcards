import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../firebase.js";
import { AuthContext } from "../../Auth.js";
import { Button, Form, Container } from 'react-bootstrap';
import logo from "../../Images/aceLogo.png";
import "./style.css"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
    }
    },
  [history]
);

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="bgImg text-center">
      <img src={logo} className="mt-5 mb-5 logoBorder text-center logo" width="300px" />
    <div className="bg-dark rounded p-3 formContainer">
      <Form className="text-center" onSubmit={handleLogin} ><Form.Group controlId="formBasicEmail">
    <h3 className="text-center text-light">Email address</h3>
    <input className="rounded" name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <h3 className="text-center text-light">Password</h3>
    <input className="rounded formEntry" name="password" type="password" placeholder="Password" />
    </Form.Group>
    
    <Button className="p-0" variant="secondary" type="submit">
    Submit
    </Button>{' '}
    </Form>
    Not a member? <Link to="/signup">Sign up</Link>
    </div>
    </div>
);
};

export default withRouter(Login);
