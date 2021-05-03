import React, { useState } from "react";
import { login } from "../utils";
import { Form, Button, Container } from "react-bootstrap";
const SignIn = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleLogin = (user) => {
    const isConnected = login(user);
    if (isConnected) props.history.push("/");
    else alert("Check your email and your password");
  };

  return (
    <Container>
      <br/>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>

        <Button
          onClick={() => handleLogin(user)}
          variant="primary"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
