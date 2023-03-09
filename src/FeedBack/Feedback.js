import React, { useState } from "react";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FeedbackTabel from "./FeedbackTabel";

const useStyles = makeStyles((theme) => ({
  us: {
    fontSize: "35px",
  },
  we: {
    padding: "20px",
  },
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
  },
  car: {
    fontSize: "25px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "25px",
  },
  form: {
    padding: "10px 60px 10px 60px",
  },
}));
export default function Feedback() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [comment, setComment] = useState({
    name: "",
    email: "",
    state: "",
    city: "",
    message: "",
  });
  const [valid, setValid] = useState({});
  const [hide, setHide] = useState({});
  const oninput = (e) => {
    const { name, value } = e.target;

    setComment((pre) => ({
      ...pre,
      [name]: value,
    }));
    setValid(true);
    setHide(true);
  };

  const onSubmit = () => {
    if (comment.name === "") {
      setValid((...valid) => ({ ...valid, name: true }));
      return;
    }
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (comment.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (!filter.test(comment.email)) {
      setHide((...hide) => ({ ...hide, email: true }));
      return;
    }
    if (comment.state === "") {
      setValid((...valid) => ({ ...valid, state: true }));
      return;
    }
    if (comment.city === "") {
      setValid((...valid) => ({ ...valid, city: true }));
      return;
    }
    if (comment.message === "") {
      setValid((...valid) => ({ ...valid, message: true }));
      return;
    }

    axios
      .post("http://localhost:8000/api/feedbacksent", comment)

      .then((res) => console.log(res.data.message));
    // navigate("/Thanks");
  };

  return (
    <>
      <title>Feed Back</title>

      <Navbar />
      <Grid className={classes.form}>
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> Full Name*</Box>
        <TextField
          name="name"
          value={comment.name}
          placeholder="Full Name"
          fullWidth
          onChange={oninput}
        />
        {valid.name == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Your Name
          </span>
        )}
        <Box style={{ fontWeight: "400", fontSize: "20px" }}>
          {" "}
          Email Address*
        </Box>
        <TextField
          name="email"
          value={comment.email}
          placeholder="Email Address"
          fullWidth
          onChange={oninput}
        />
        {valid.email == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Valid email
          </span>
        )}
        {hide.email == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Invlid Email Address
          </span>
        )}
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> State Name*</Box>
        <TextField
          name="state"
          value={comment.state}
          placeholder="State Name"
          fullWidth
          onChange={oninput}
        />
        {valid.state == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Your State Name
          </span>
        )}{" "}
        <Box style={{ fontWeight: "400", fontSize: "20px" }}> City Name*</Box>
        <TextField
          name="city"
          value={comment.city}
          placeholder="City Name"
          fullWidth
          onChange={oninput}
        />
        {valid.city == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Enter Your City Name
          </span>
        )}
        <Box style={{ fontWeight: "400", fontSize: "20px" }}>Message*</Box>
        <TextField
          name="message"
          value={comment.message}
          placeholder="Text Filed"
          fullWidth
          onChange={oninput}
        />
        {valid.message == true && (
          <span
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "15px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            Type A Message
          </span>
        )}
        <br></br>
        <Button
          className="btn"
          onClick={onSubmit}
          style={{
            backgroundColor: "#23809fc2",
            marginTop: "20px",
            color: "white",
          }}
        >
          Submit
        </Button>
      </Grid>
      <FeedbackTabel />

      <Footer />
    </>
  );
}
