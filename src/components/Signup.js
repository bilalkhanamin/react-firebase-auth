import { Form, Button, Card, Alert } from "react-bootstrap";
import { useRef, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signUp } = useUserAuth();
  const [error, seterror] = useState();
  const [Loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/")
    } catch (err) {
      seterror(err.message);
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        {error && <Alert varient="danger">{error}</Alert>}
        <Card.Header className="text-center">
          <h1>Sign Up</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button type="Submit" disabled={Loading} className="w-100 mt-3">
              Sign up
            </Button>
          </Form>
          <hr />
        </Card.Body>
      </Card>
      <Link to="/">
        <div className="w-100 text-center mt-2">
          Already have account? login
        </div>
      </Link>
    </>
  );
};

export default Signup;
