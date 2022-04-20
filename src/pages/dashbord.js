import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import bgi from "../img/bgi.jpg";
import { Header } from "../components/header";
import { useNavigate } from "react-router";

const Dashbord = () => {
  const navigate = useNavigate();

  const navIndividualDonation = () => {
    navigate("/individualDonation");
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
            Why we exist
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
            With one of the fastest growing economies, India is now the one of
            the top five of the world’s largest economies, and is showing
            continuous improvement with a high life expectancy, literacy rate,
            and health conditions. Among the country’s 1.2 billion inhabitants
            the conditions for those living in poorer regions are comparable to
            those of some of the world’s poorest countries.
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
            India ranks 94th out of 107 countries on the 2019 Global Hunger
            Index. Undernutrition in India is the product of the usual suspects:
            widespread poverty, endemic hunger, rapid population growth, pockets
            of weak governance, poor health systems and unreliable national
            indicators, all of which are compounded by issues of caste,
            ethnicity, religion and gender. Furthermore, India has shown no
            progress with regards to six other global nutrition goals.
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
            More than 17% of children under four years old suffer from acute
            malnutrition and 34.7% are stunted. The COVID-19 pandemic has
            increased these the vulnerabilities in areas with tribal populations
            and slum settlements, where already-limited access to services and
            facilities has been strained, and opportunity for employment is in
            constant flux.
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, p: 2 }}>
            Instead of wasting food unnecessarily, we can accumulate food from
            various households and can proceed ahead to distributing food to the
            hunger-stricken families and fulfill their requirements of food for
            survival with help of local NGOs or volunteers.
          </Typography>
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
            <Button onClick={navIndividualDonation} color="inherit">
              <Typography
                variant="h3"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{
                  textAlign: "left",
                  color: "red",
                }}
              >
                Donate Now
              </Typography>
            </Button>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default Dashbord;
