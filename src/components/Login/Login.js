import React, { useContext, useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { redirect, useLocation, useNavigate } from "react-router";
import { logedInUserContext } from "../../App";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/admin";
  const userContext = useContext(logedInUserContext);

  const [user, setUser] = userContext;

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleLogin = () => {
    if (!email && !pass) return;

    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        toast("Logged In!");
        const user = userCredential.user;
        setEmail("");
        setPass("");
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast("Wrong credentials!");
      });
  };
  return (
    <div className="login">
      <div className="login-box">
        <ToastContainer />
        <h4>Login</h4>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input"
          type="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          className="input"
          type="password"
          placeholder="Enter your password"
        />
        <button onClick={handleLogin} className="login-btn button button-flex">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
