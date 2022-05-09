import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useUserAuth } from "../context/UserAuthContext";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Header } from "../components/header";
import bgi from "../img/bgi.jpg";

const AdminPhoneSignUp = () => {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    console.log(number);
    setError("");
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(number);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (otp === "" || otp === null) return;
    try {
      await result.confirm(otp);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    }
  };

  const navBack = () => {
    navigate("/");
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
          pt: "18%",
          pb: "11%",

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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Sign in
          </Typography>

          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <PhoneInput
                defaultCountry="IN"
                value={number}
                onChange={setNumber}
                placeholder="Enter Phone Number"
              />

              <div
                style={{
                  marginTop: 20,
                  marginLeft: 40,
                }}
                id="recaptcha-container"
              ></div>
            </Form.Group>
            <div className="button-right">
              <Button
                onClick={navBack}
                variant="contained"
                sx={{ m: 2, background: "#1a237e", borderRadius: 4 }}
              >
                <Typography variant="h5" component="div">
                  Cancel
                </Typography>
              </Button>
              &nbsp;
              <Button
                type="submit"
                variant="contained"
                sx={{ m: 2, background: "#1a237e", borderRadius: 4 }}
              >
                <Typography variant="h5" component="div">
                  Send Otp
                </Typography>
              </Button>
            </div>
          </Form>

          <Form
            onSubmit={verifyOtp}
            style={{ display: flag ? "block" : "none" }}
          >
            <Form.Group className="mb-3" controlId="formBasicOtp">
              <Form.Control
                type="otp"
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <div className="button-right">
              <Button
                onClick={navBack}
                variant="contained"
                sx={{ m: 2, background: "#1a237e", borderRadius: 4 }}
              >
                <Typography variant="h5" component="div">
                  Cancel
                </Typography>
              </Button>
              &nbsp;
              {/* <Button type="submit" variant="primary">
                Verify
              </Button> */}
              <Button
                type="submit"
                variant="contained"
                sx={{ m: 2, background: "#1a237e", borderRadius: 4 }}
              >
                <Typography variant="h5" component="div">
                  Verify
                </Typography>
              </Button>
            </div>
          </Form>
        </Paper>
      </Box>
    </div>
  );
};

export default AdminPhoneSignUp;
