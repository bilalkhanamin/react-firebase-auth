import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

export default function ResetPassword() {
  const emailRef = useRef();
  const { User, resetPassword } = useUserAuth();
  const [error, seterror] = useState();
  const navigate  = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(emailRef.current.value);
      alert("link sent via email, please check your email")
      navigate('/')
    } catch (err) {
        return seterror(err.message)
    }
  };
  return (
    <div>
      <Card>
        {error && <Alert variant="danger">{error}</Alert>}  
        <Card.Header className="text-center">
          <h3>Find account</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Enter Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button type="submit" className="w-100 mt-3">
              send email
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
