import React from "react";
import Navbar from "../Dashboard/Navbar";

import Footer from "../Dashboard/Footer";
<<<<<<< HEAD
import PopularCenter from "../Populer/PopularCenter";
=======
import PopulerCenter from "../Popular/PopulerCenter";
>>>>>>> 2a549d793e570d8177ff9806a144ed7a9a855a56
import AboutCenter from "../About/AboutCenter";
import ContactCenter from "../Contact/ContactCenter";
import GetInTouch from "./GetInTouch";
import CarForm from "./CarForm";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import "./Form.css";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "balck",
    padding: "30px",
    marginTop: "30px",
  },

  us: {
    fontSize: "45px",
  },
  we: {
    padding: "15px",
    fontSize: "25px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const navigate = useNavigate();

  const Onpush = () => {
    navigate("/Book");
  };

  return (
    <>
      <title>Home</title>

      <Navbar />

      <div className="row text-bg-dark ">
        <div className="col-12 col-lg-8 col-sm-6" style={{ marginTop: "7vw" }}>
          <GetInTouch />
        </div>
        <div className="col-12 col-lg-4 col-sm-6">
          <CarForm />
        </div>
      </div>
      <ContactCenter />
      <Grid className={classes.color}>
        <Box className={classes.us}>Upto 35% Discounts & Special Offers</Box>
        <Box className={classes.we}>Rent a Car for 7 Day</Box>
        <Box className={classes.we}>and get 3 days extra absolutely FREE</Box>

        <Button
          sx={{ mt: 2, backgroundColor: "#23809fc2", padding: "12px" }}
          variant="contained"
          onClick={Onpush}
        >
          Book Your Ride Now
        </Button>
      </Grid>
      <AboutCenter />
      <PopularCenter />

      <Footer />
    </>
  );
}
