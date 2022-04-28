import {
  AppBar,
  Avatar,
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import bgi from "../img/bgi.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { RequestList } from "../components/RequestsList";
import { DonationList } from "../components/DonationList";
import { EnquiryList } from "../components/EnquiryList";
import { AllRequestList } from "../components/AllRequestsList";
import axios from "axios";
import { base } from "../components/baseUrl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { ReactComponent as Logo } from "../img/logo.svg";
import { red } from "@mui/material/colors";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    getData();
  }, []);

  const [name, setName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailId, setEmailId] = useState("");

  const [requestList, setRequestList] = useState([]);
  const [donationList, setDonationList] = useState([]);
  const [enquiryList, setEnquiryList] = useState([]);
  const [allRequestList, setAllRequestList] = useState([]);

  const getData = () => {
    handleToggle();
    var config = {
      method: "get",
      url: base + "/api/ngo/getNgo/" + user["email"],
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setRequestList(() => {
          return [];
        });

        setName(response.data["name"]);
        setEmailId(response.data["emailId"]);
        setMobile(response.data["mobile"]);
        setAddress1(response.data["address1"]);
        setAddress2(response.data["address2"]);
        setCity(response.data["city"]);

        response.data["requests"].forEach((curReq) => {
          if (curReq.status == "Requested")
            setRequestList((reqs) => {
              return reqs.concat(curReq);
            });
        });

        setAllRequestList(() => {
          return [];
        });

        response.data["requests"].forEach((curReq) => {
          if (curReq.status != "Requested")
            setAllRequestList((reqs) => {
              return reqs.concat(curReq);
            });
        });

        setDonationList(() => {
          return [];
        });

        response.data["donors"].forEach((curReq) => {
          setDonationList((reqs) => {
            return reqs.concat(curReq);
          });
        });

        setEnquiryList(() => {
          return [];
        });

        response.data["volunteers"].forEach((curReq) => {
          setEnquiryList((reqs) => {
            return reqs.concat(curReq);
          });
        });

        handleClose();
      })
      .catch(function (error) {
        console.log(error);
        handleClose();
      });
  };

  const { logOut, user } = useUserAuth();

  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
      // navigate("/dashbord");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgi})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <AppBar
        style={{
          background: "#1a237e",
        }}
      >
        <Toolbar>
          <SvgIcon sx={{ fontSize: 50 }}>
            <Logo />
          </SvgIcon>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Helping Hands
          </Typography>
          {user && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu2}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl2)}
                onClose={handleClose2}
              >
                <MenuItem>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 0,
                      boxShadow: "none",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      title={name}
                      subheader={mobile + " " + emailId}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        {"Address: " +
                          address1 +
                          ", " +
                          address2 +
                          ", " +
                          city +
                          "."}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={handleLogout}>Logout</Button>
                    </CardActions>
                  </Card>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          p: 2,
          mx: "10%",
          pt: "30%",
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
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              centered
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Requests" {...a11yProps(0)} />
              <Tab label="Old Requests" {...a11yProps(1)} />
              <Tab label="All Donation" {...a11yProps(2)} />
              <Tab label="All Enquiry" {...a11yProps(3)} />
            </Tabs>
          </Box>

          <Paper
            hidden={value !== 0}
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
            <RequestList requestList={requestList}></RequestList>
          </Paper>

          <Paper
            hidden={value !== 1}
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
            <AllRequestList requestList={allRequestList}></AllRequestList>
          </Paper>

          <Paper
            hidden={value !== 2}
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
            <DonationList donationList={donationList}></DonationList>
          </Paper>

          <Paper
            hidden={value !== 3}
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
            <EnquiryList enquiryList={enquiryList}></EnquiryList>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default Home;
