import {
  Box,
  Button,
  FormControlLabel,
  FormLabel,
  InputBase,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
// import { useUserAuth } from "../context/UserAuthContext";
import bgi from "../img/bgi.jpg";
import { Header } from "./header";

const FoodDonaton = () => {
  // const { logOut, user } = useUserAuth();

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
                      Food details
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
                        placeholder="Item name"
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
                        placeholder="Quantity(KG)"
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
                        placeholder="Date(dd/mm/yyyy)"
                        inputProps={{ "aria-label": "Full name" }}
                      />
                    </Paper>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    sx={{ p: 1, pl: 4, flex: 1 }}
                    component="th"
                    scope="row"
                  >
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Food type
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="rawfood"
                        control={<Radio />}
                        label="Raw Food"
                      />
                      <FormControlLabel
                        value="cookedfood"
                        control={<Radio />}
                        label="Cooked Food"
                      />
                    </RadioGroup>
                  </TableCell>
                  <TableCell
                    sx={{ p: 1, pl: 4, flex: 1 }}
                    component="th"
                    scope="row"
                  >
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      Transportation mod
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="dropbyself"
                        control={<Radio />}
                        label="Drop by self"
                      />
                      <FormControlLabel
                        value="pickup"
                        control={<Radio />}
                        label="Pick up"
                      />
                    </RadioGroup>
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

export default FoodDonaton;
