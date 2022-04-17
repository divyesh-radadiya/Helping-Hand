import {
  Box,
  Button,
  InputBase,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
// import { useUserAuth } from "../context/UserAuthContext";
import { Header } from "./header";

const IndividualDonation = () => {
  // const { logOut, user } = useUserAuth();

  return (
    <div
      style={{
        backgroundImage: `url(https://i0.wp.com/www.giveindia.org/blog/wp-content/uploads/WhatsApp-Image-2019-08-05-at-17.46.15.jpeg?fit=1024%2C576&ssl=1)`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
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
                        placeholder="Full name"
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
                        placeholder="Mobile No"
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
                        placeholder="Email id"
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
                        placeholder="Address line 1"
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
                        placeholder="Address line 2"
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
                        placeholder="City"
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
                        placeholder="Pincode"
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
                      Transaction details
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
                        placeholder="Transaction id"
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
                        placeholder="Write details here"
                        inputProps={{ "aria-label": "Write-details-here" }}
                        multiline
                        rows={2}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
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
