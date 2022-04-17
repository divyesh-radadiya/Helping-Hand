import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { ReactComponent as Logo } from "../img/logo.svg";

export const Header = () => {
  const { logOut, user } = useUserAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleMenu3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/phonesignup");
  };

  const navFoodDonation = () => {
    navigate("/foodDonation");
  };
  const navClothesDonation = () => {
    navigate("/clothesDonation");
  };
  const navIndividualDonation = () => {
    navigate("/individualDonation");
  };
  const navVolunteers = () => {
    navigate("/volunteers");
  };
  const navDashbord = () => {
    navigate("/");
  };
  const navHome = () => {
    navigate("/home");
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <AppBar
      style={{
        background: "#1a237e",
      }}
    >
      <Toolbar>
        <SvgIcon onClick={navDashbord} sx={{ fontSize: 50 }}>
          <Logo />
        </SvgIcon>
        <Typography
          onClick={navDashbord}
          variant="h3"
          component="div"
          sx={{ flexGrow: 1, p: 2 }}
        >
          Helping Hands
        </Typography>

        {/* {user && (  <Button color="inherit"><AccountCircle  /> </Button>)} */}
        <div>
          <Button onClick={handleMenu} color="inherit">
            <Typography variant="h" component="div" sx={{ flexGrow: 1 }}>
              GET INVOLVED
            </Typography>
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={navFoodDonation}>For food donation</MenuItem>
            <MenuItem onClick={navClothesDonation}>
              For clothes donation
            </MenuItem>
            <MenuItem onClick={navIndividualDonation}>
              For individual donation
            </MenuItem>
            <MenuItem onClick={navVolunteers}>For volunteers</MenuItem>
          </Menu>
        </div>
        {!user && (
          <div>
            <Button onClick={handleMenu3} color="inherit">
              {" "}
              <Typography variant="h" component="div" sx={{ flexGrow: 1 }}>
                Login
              </Typography>{" "}
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl3}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl3)}
              onClose={handleClose3}
            >
              <MenuItem onClick={handleLogin}>As Donor</MenuItem>
              <MenuItem onClick={navHome}>As NGO</MenuItem>
            </Menu>
          </div>
        )}
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
              <MenuItem>Profile</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};
