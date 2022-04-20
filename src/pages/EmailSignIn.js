import { Alert } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const EmailSignin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setError("");
    if (emailRef.current.value === "" || emailRef.current.value === undefined)
      return setError("Please enter a valid Emailid number!");
    if (
      passwordRef.current.value === "" ||
      passwordRef.current.value === undefined
    )
      return setError("Please enter a valid Emailid number!");
    logIn(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        console.log(user);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div className="signin">
      {error && <Alert variant="danger">{error}</Alert>}
      <form action="">
        <h1>Sign in</h1>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button onClick={signIn}>Sign in </button>
      </form>
    </div>
  );
};

export default EmailSignin;
