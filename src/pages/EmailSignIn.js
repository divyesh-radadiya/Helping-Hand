import {
  Alert,
  Box,
  Button,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import bgi from "../img/bgi.jpg";

import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
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
    <div
      style={{
        backgroundImage: `url(${bgi})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header></Header>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: "4%",
          pt: "13%",
          pb: "5%",

          borderRadius: 1,
        }}
      >
        <Paper
          elevation={10}
          style={{
            textAlign: "left",
            color: "black",
            width: "40%",
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 6,
            borderRadius: 4,
          }}
        >
          {error && <Alert variant="danger">{error}</Alert>}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Sign in
          </Typography>
          <Paper
            component="form"
            sx={{
              border: "1px solid #d7d7d7",
              m: 2,
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <InputBase
              sx={{ m: 1, ml: 4, flex: 1 }}
              placeholder="Email*"
              inputRef={emailRef}
              type="email"
              inputProps={{ "aria-label": "Email" }}
            />
          </Paper>
          <Paper
            component="form"
            sx={{
              border: "1px solid #d7d7d7",
              m: 2,
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              borderRadius: 4,
            }}
          >
            <InputBase
              sx={{ m: 1, ml: 4, flex: 1 }}
              placeholder="Password*"
              inputRef={passwordRef}
              type="password"
              inputProps={{ "aria-label": "password" }}
            />
          </Paper>
          <Button
            onClick={signIn}
            variant="contained"
            sx={{ m: 2, background: "#1a237e", borderRadius: 4 }}
          >
            <Typography variant="h5" component="div">
              Sign in
            </Typography>
          </Button>
        </Paper>
      </Box>
    </div>
  );
};

export default EmailSignin;
