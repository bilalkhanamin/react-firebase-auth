import { Form, Button, Card, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";

const Login = () => {
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [Loading, setLoading] = useState(false);
  const [error, seterror] = useState();
  const { logIn, googleSignIn } = useUserAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      seterror(err.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      seterror(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        {error && <Alert variant="danger">{error}</Alert>}
        <Card.Header className="text-center">
          <h3>FireBase Auth Login</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => setemail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => setpassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" disabled={Loading} className="w-100 mt-3">
              Sign In
            </Button>
            <hr />
            <GoogleButton class="g-btn w-100" onClick={handleGoogleSignIn} />
          </Form>
        </Card.Body>

        <Card.Footer>
          <Link to="reset">
            <div className="w-100 text-center mt-2">forgot password ?</div>
          </Link>
          <Link to="/signup">
            <div className="w-100 text-center mt-2">No account? Signup</div>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Login;
