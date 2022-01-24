import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/protectedRoute";
import ResetPassword from "./components/ResetPassword";

const App = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <UserAuthContextProvider>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/reset" element={<ResetPassword />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </UserAuthContextProvider>
      </div>
    </Container>
  );
};

export default App;
