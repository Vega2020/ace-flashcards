import React, { useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../firebase";
import { Button, Form } from 'react-bootstrap';
import logo from "../../Images/aceLogo.png";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="bgImg text-center">
      <img src={logo} className="mt-5 mb-5 logoBorder text-center logo" width="300px" />
      {/* <h1>Sign up</h1>
      <form */}
      <div className="bg-dark ml-5 mr-5 rounded p-2 formContainer">
      <Form className="text-center" onSubmit={handleSignUp}><Form.Group controlId="formBasicEmail">
      <h3 className="text-center text-light">Email address</h3>
        <label>
        <input className="rounded" size="50" name="email" type="email" placeholder="Enter email" />
        </label>
        <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <h3 className="text-center text-light">Password</h3>
    <input className="rounded" size="50" name="password" type="password" placeholder="Password" />
    </Form.Group>

        <Button variant="secondary" type="submit">Sign Up</Button>{' '}
      </Form>
      Already a member? <Link to="/Login">Login</Link>
    </div>
    </div>
  );
};

export default withRouter(SignUp);
