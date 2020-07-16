import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
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
    <img src={logo} className="mt-5 mb-5" width="300px" />
    <div className="bg-secondary ml-5 mr-5 rounded p-2">
    {/* New Form Component */}
    <Form className="text-center" onSubmit={handleLogin} >
  <Form.Group controlId="formBasicEmail">
    <h3 className="text-center">Email address</h3>
    <input className="rounded" size="50" name="email" type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <h3 className="text-center">Password</h3>
    <input className="rounded" size="50" name="password" type="password" placeholder="Password" />
  </Form.Group>
  <Button className="p-0" variant="dark" type="submit">
    Submit
  </Button>{' '}
</Form>
</div>
    {/* OLD but WORKING Form Component.. */}
   {/* <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <Button className="p-0" variant="secondary">Log In</Button>{' '}
      </form>
    </div> */}
    </div>
  );
};

export default withRouter(Login);
