import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "../components/header";
import bgi from "../img/bgi.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { RequestList } from "../components/RequestsList";
import { DonationList } from "../components/DonationList";
import { EnquiryList } from "../components/EnquiryList";
import { AllRequestList } from "../components/AllRequestsList";
import axios from "axios";

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
  useEffect(() => {
    getData();
  }, []);
  const [requestList, setRequestList] = useState([]);
  const [donationList, setDonationList] = useState([]);
  const [enquiryList, setEnquiryList] = useState([]);
  const [allRequestList, setAllRequestList] = useState([]);

  const getData = () => {
    var config = {
      method: "get",
      url: "http://localhost:8080/api/ngo/getNgo",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setRequestList(() => {
          return [];
        });

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
      })
      .catch(function (error) {
        console.log(error);
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
