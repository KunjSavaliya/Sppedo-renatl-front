import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cards: {
    display: "flex",
    justifyContent: "center ",
    padding: "201px",
    height: "100%",
  },
  words: {
    textAlign: "center",
    padding: " 30px 20px 30px 20px",
  },
  eqv: {
    fontSize: "40px",
    fontWeight: "bolder",
    padding: "5px ",
    color: "balck",
    textAlign: "center",
  },
  eqv1: {
    fontSize: "18px",
    // padding: "5px",
    marginTop: "10px",
    textAlign: "initial",
  },
}));
export default function Thanks() {
  const classes = useStyles();
  const [name, setname] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingdata"));
    setname(data);
    console.log("name", name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onView = () => {
    navigate("/");
  };
  return (
    <>
      <title>Thanks</title>
      <div className={classes.cards}>
        <Card
          sx={{
            width: 600,
            // alignItems: "center",
            backgroundColor: "rgba(119, 204, 255, 0.22)",
          }}
          className={classes.words}
        >
          <Box className={classes.eqv}>Thanks For Your Enquiry</Box>
          {/* <Box className={classes.eqv1}>
            We have recieved your enquiry,we will get back to soon...
          </Box> */}

          <Box className={classes.eqv1}>Name: {name.name}</Box>
          <Box className={classes.eqv1}>Email: {name.email}</Box>
          <Box className={classes.eqv1}>Phone no: {name.phone}</Box>
          <Box className={classes.eqv1}>Car Name: {name.car}</Box>
          <Box className={classes.eqv1}>Driver Opestion: {name.drive}</Box>
          <Box className={classes.eqv1}>State: {name.state}</Box>
          <Box className={classes.eqv1}>Pickup Point: {name.pickup}</Box>
          <Box className={classes.eqv1}>Drop Point: {name.drop}</Box>
          <Box className={classes.eqv1}>Date: {name.date}</Box>

          <Button
            style={{
              backgroundColor: "rgba(35, 128, 159, 0.76)",
              padding: "10px 30px 10px 30px",
              textAlign: "center",
              marginTop: "20px",
              color: "black",
            }}
            onClick={onView}
          >
            GO BACK TO HOME
          </Button>
        </Card>
      </div>
    </>
  );
}
