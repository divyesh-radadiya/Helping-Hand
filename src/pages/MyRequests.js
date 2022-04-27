/* eslint-disable no-undef */
import { Backdrop, Box, CircularProgress, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import bgi from "../img/bgi.jpg";
import { List } from "@mui/material";

import axios from "axios";
import { base } from "../components/baseUrl";
import { Header } from "../components/header";
import MyRequestCard from "../components/myRequestCard";

const MyRequests = () => {
  useEffect(() => {
    getData();
  }, []);

  const [requestList, setRequestList] = useState([]);

  const getData = () => {
    handleToggle();
    var config = {
      method: "get",
      url: base + "/api/request/getRequests/23232",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);

        setRequestList(() => {
          return [];
        });

        response.data.forEach((curReq) => {
          setRequestList((reqs) => {
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
            <List>
              {requestList.map((req) => {
                return (
                  <MyRequestCard key={req.userId} request={req}></MyRequestCard>
                );
              })}
            </List>
          </Paper>
        </Paper>
      </Box>
    </div>
  );
};

export default MyRequests;
