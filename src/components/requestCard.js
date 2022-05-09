import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  ListItem,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import DateRangeIcon from "@mui/icons-material/DateRange";
import NumbersIcon from "@mui/icons-material/Numbers";
import CategoryIcon from "@mui/icons-material/Category";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CommentIcon from "@mui/icons-material/Comment";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import ManIcon from "@mui/icons-material/Man";

import axios from "axios";
import { base } from "./baseUrl";
import { useUserAuth } from "../context/UserAuthContext";
import { SendSMS } from "./smsService";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RequestCard({ request }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { user } = useUserAuth();

  const onAccept = () => {
    var config = {
      method: "get",
      url: base + "/api/request/setStatus/" + request.userId,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user["accessToken"],
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        // SendSMS("+919773180438", "Your request was Accepted.");
        setOpen(true);
        handleClickOpen();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onDecline = () => {
    var config = {
      method: "get",
      url: base + "/api/request/unsetStatus/" + request.userId,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user["accessToken"],
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setOpen(true);
        // SendSMS("+919773180438", "Your request was Declined !!!!");
        handleClickOpen();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const onDelete = () => {
    var config = {
      method: "get",
      url: base + "/api/request/delete/" + request.userId,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user["accessToken"],
      },
    };
    axios(config)
      .then(function (response) {
        setOpen(true);
        handleClickOpen();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleClose = () => {
    window.location.reload(false);
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        m: 2,
        borderRadius: 4,
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

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={request.name}
        subheader={request.date.toString()}
      />

      <CardContent>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell colSpan={4} component="th" scope="row">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <DateRangeIcon />
                  </ListItemIcon>
                  <ListItemText primary={request.targetDate} />
                </ListItem>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <ListItem disablePadding>
                  <ListItemIcon>
                    {request.role == "Clothes" ? (
                      <ManIcon />
                    ) : (
                      <LocalDiningIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={request.itemName} />
                </ListItem>
              </TableCell>
              <TableCell component="th" scope="row">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <NumbersIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Quantity: " + request.quantity} />
                </ListItem>
              </TableCell>
              <TableCell component="th" scope="row">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary={request.type} />
                </ListItem>
              </TableCell>

              <TableCell component="th" scope="row">
                <ListItem disablePadding>
                  <ListItemIcon>
                    <DirectionsCarIcon />
                  </ListItemIcon>
                  <ListItemText primary={request.traMod} />
                </ListItem>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
          Details
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={request.emailId} />
                  </ListItem>
                </TableCell>

                <TableCell component="th" scope="row">
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={request.mobile} />
                  </ListItem>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={2} component="th" scope="row">
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <ApartmentIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        request.address1 +
                        ", " +
                        request.address2 +
                        ", " +
                        request.city +
                        ". " +
                        request.pinCode
                      }
                    />
                  </ListItem>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={2} component="th" scope="row">
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CommentIcon />
                    </ListItemIcon>
                    <ListItemText primary={request.details} />
                  </ListItem>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Table aria-label="simple table">
            <TableBody>
              {request.status == "Requested" && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button
                      onClick={onAccept}
                      variant="contained"
                      sx={{ m: 1, background: "#1a237e", borderRadius: 4 }}
                    >
                      <Typography variant="h6" component="div">
                        Request accept
                      </Typography>
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      onClick={onDecline}
                      sx={{ m: 1, background: "#1a237e", borderRadius: 4 }}
                    >
                      <Typography variant="h6" component="div">
                        Request decline
                      </Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              )}
              {request.status != "Requested" && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      sx={{ m: 1, background: "#1a237e", borderRadius: 4 }}
                    >
                      <Typography variant="h6" component="div">
                        {request.status}
                      </Typography>
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Button
                      variant="contained"
                      onClick={onDelete}
                      sx={{ m: 1, background: "#1a237e", borderRadius: 4 }}
                    >
                      <Typography variant="h6" component="div">
                        Delete
                      </Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Collapse>
    </Card>
  );
}
