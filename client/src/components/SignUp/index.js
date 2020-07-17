import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import app from "../../firebase";
import { Button, Form } from 'react-bootstrap';
import logo from "../../Images/aceLogo.png";
import "../../components/Login/style.css"


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
      <img src={logo} alt="aceLogo" className="mt-5 mb-5 logoBorder text-center logo" width="300px" />
      <div className="bg-dark rounded p-3 formContainer">
      <Form className="text-center" onSubmit={handleSignUp}><Form.Group controlId="formBasicEmail">
      <h3 className="text-center text-light">Email address</h3>
        <label>
        <input className="formEntry rounded" name="email" type="email" placeholder="Enter email" />
        </label>
        <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>
    <Form.Group controlId="formBasicPassword">
    <h3 className="text-center text-light">Password</h3>
    <input className="formEntry rounded" name="password" type="password" placeholder="Password" />
    </Form.Group>

        <Button variant="secondary" type="submit">Sign Up</Button>{' '}
      </Form>
      Already a member? <Link to="/Login">Login</Link>
    </div>
    </div>
  );
};

export default withRouter(SignUp);
