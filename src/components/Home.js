import { Box, Paper } from "@mui/material";
import React from "react";
import { Header } from "./header";
import bgi from "../img/bgi.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { RequestList } from "./RequestsList";
import { DonationList } from "./DonationList";
import { EnquiryList } from "./EnquiryList";
import { AllRequestList } from "./AllRequestsList";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <Tab label="All Requests" {...a11yProps(1)} />
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
            <RequestList></RequestList>
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
            <AllRequestList></AllRequestList>
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
            <DonationList></DonationList>
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
            <EnquiryList></EnquiryList>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default Home;
