import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { createRef, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base } from "../components/baseUrl";
import { useUserAuth } from "../context/UserAuthContext";
import { Header } from "../components/header";

const Volunteers = () => {
  const { user } = useUserAuth();

  // eslint-disable-next-line prettier/prettier
  const nameRef = createRef();
  const mobileRef = useRef(null);
  const emailRef = useRef(null);
  const add1Ref = useRef(null);
  const add2Ref = useRef(null);
  const pincodeRef = useRef(null);
  const cityRef = useRef(null);
  const detailsRef = useRef(null);
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
      name.toString().trim().length === 0 ||
      mobile.toString().trim().length === 0 ||
      email.toString().trim().length === 0 ||
      add1.toString().trim().length === 0 ||
      add2.toString().trim().length === 0 ||
      pincode.toString().trim().length === 0 ||
      city.toString().trim().length === 0 ||
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
      role: "volunteers",
      name: name,
      mobile: mobile,
      emailId: email,
      details: details,
    });

    var config = {
      method: "post",
      url: base + "/api/volunteer/add",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user["accessToken"],
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

  const handleClose = () => {
    navigate("/");
    setOpen(false);
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://csrbox.org/images/volunteerproposals/thematicarea_images/Others.jpg)`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Data updated successfully !!"}
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

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
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Your support would mean, more people fed, more dreams fulfilled and
            a better future, together.
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
            We are in constant need of support to source reliable and healthy
            meals while also managing the administrative costs involved in
            running our programs.
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Join hands to make a difference
          </Typography>

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
                        value={user["phoneNumber"]}
                        readOnly
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

export default Volunteers;
