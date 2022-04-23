import {
  Box,
  Button,
  InputBase,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base } from "../components/baseUrl";

// import { useUserAuth } from "../context/UserAuthContext";
import { Header } from "../components/header";

const IndividualDonation = () => {
  // const { logOut, user } = useUserAuth();
  const nameRef = useRef(null);
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const add1Ref = useRef(null);
  const add2Ref = useRef(null);
  const pincodeRef = useRef(null);
  const cityRef = useRef(null);
  const detailsRef = useRef(null);
  const traIdRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const saveHandler = () => {
    const name = nameRef.current?.value;
    const mobile = mobileRef.current?.value;
    const email = emailRef.current?.value;
    const add1 = add1Ref.current?.value;
    const add2 = add2Ref.current?.value;
    const pincode = pincodeRef.current?.value;
    const city = cityRef.current?.value;
    const traId = traIdRef.current?.value;
    const details = detailsRef.current?.value;

    if (
      !name ||
      !mobile ||
      !email ||
      !add1 ||
      !add2 ||
      !pincode ||
      !city ||
      !details ||
      !traId ||
      name.toString().trim().length === 0 ||
      mobile.toString().trim().length === 0 ||
      email.toString().trim().length === 0 ||
      add1.toString().trim().length === 0 ||
      add2.toString().trim().length === 0 ||
      pincode.toString().trim().length === 0 ||
      city.toString().trim().length === 0 ||
      traId.toString().trim().length === 0 ||
      details.toString().trim().length === 0
    ) {
      setError("Please enter a valid data.");
      return;
    }
    setError("");

    var data = JSON.stringify({
      address1: add1,
      address2: add2,
      city: city,
      pinCode: pincode,
      role: "donor",
      name: name,
      mobile: mobile,
      emailId: email,
      transactionId: traId,
      details: details,
    });

    var config = {
      method: "post",
      url: base + "/api/donor/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setOpen(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    // props.onSave(enteredTitle.toString(), new Date(selectedDate));
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    navigate("/");
    setOpen(false);
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://i0.wp.com/www.giveindia.org/blog/wp-content/uploads/WhatsApp-Image-2019-08-05-at-17.46.15.jpeg?fit=1024%2C576&ssl=1)`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Data updated successfully !!"
      />
      <Header></Header>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 2,
          mx: "10%",
          pt: "40%",
          borderRadius: 1,
        }}
      >
        <Paper
          elevation={10}
          style={{
            textAlign: "left",
            color: "black",
            width: "100%",
          }}
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 6,
            borderRadius: 4,
          }}
        >
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Your donations make this possible.
          </Typography>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, p: 2 }}>
            All our initiatives are designed to provide essential food support
            to underserved communities in the form of raw grains, freshly cooked
            food or packaged food products depending on the need. Our aim is to
            ensure, hunger never comes in the way of a brighter future.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              p: "5%",
              borderRadius: 4,
            }}
            style={{
              backgroundImage: `url(https://akshayapatra.org/includefiles/images/1920x700x1.jpg)`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              color: "white",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, pb: 2 }}
            >
              MAKE YOUR OWN DAY OF CHARITY
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, pb: 2 }}
            >
              Donate through UPI
            </Typography>

            <img
              style={{
                maxWidth: 150,
                height: "auto",
              }}
              src={
                "https://www.akshayapatra.org/images/QR-code-smallupdated.png"
              }
            />
          </Box>

          <Paper
            style={{
              textAlign: "left",
              color: "black",
              width: "100%",
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 6,
              borderRadius: 4,
              background: "#f3f3f3",
            }}
          >
            <Table aria-label="simple table">
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, p: 2 }}
                    >
                      Primary point of contact
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
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
                        placeholder="Full name*"
                        inputRef={nameRef}
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
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
                        type="number"
                        sx={{ m: 1, ml: 4, flex: 1 }}
                        placeholder="Mobile No*"
                        inputRef={mobileRef}
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                  <TableCell component="th" scope="row">
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
                        placeholder="Email id*"
                        inputRef={emailRef}
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1, p: 2 }}
                    >
                      Address details
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
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
                        placeholder="Address line 1*"
                        inputRef={add1Ref}
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
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
                        placeholder="Address line 2*"
                        inputRef={add2Ref}
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
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
                        placeholder="City*"
                        inputRef={cityRef}
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                  <TableCell component="th" scope="row">
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
                        type="number"
                        sx={{ m: 1, ml: 4, flex: 1 }}
                        placeholder="Pincode*"
                        inputRef={pincodeRef}
                        inputProps={{
                          "aria-label": "Full name",
                        }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
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
                        inputRef={traIdRef}
                        placeholder="Transaction id*"
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>

                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={2} component="th" scope="row">
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
                        placeholder="Write details here*"
                        inputRef={detailsRef}
                        inputProps={{ "aria-label": "Write-details-here" }}
                        multiline
                        rows={2}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            {error && (
              <Typography variant="h6" component="div">
                {error}
              </Typography>
            )}
            <Button
              onClick={saveHandler}
              variant="contained"
              sx={{ m: 1, background: "#1a237e", borderRadius: 4 }}
            >
              <Typography variant="h5" component="div">
                Submit
              </Typography>
            </Button>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default IndividualDonation;
