import React, { useState } from "react";
import Footer from "../Dashboard/Footer";
import Navbar from "../Dashboard/Navbar";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Book.css";

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
    padding: "10px 40px 10px 40px",
  },
  btn: {
    backgroundColor: "#23809fc2",
  },
}));

export default function Book() {
  const navigate = useNavigate();

  const classes = useStyles();
  const [book, setBook] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    drive: "",
    state: "",
    pickup: "",
    drop: "",
    date: "",
  });
  const [valid, setValid] = useState({});
  const [hide, setHide] = useState({});

  const onSubmit = () => {
    if (book.name === "") {
      setValid((...valid) => ({ ...valid, name: true }));
      return;
    }

    var IndNum = /^[0]?[789]\d{9}$/;
    if (book.phone === "") {
      setValid((...valid) => ({ ...valid, phone: true }));
      return;
    } else if (!IndNum.test(book.phone)) {
      setValid((...valid) => ({ ...valid, phone: true }));
      return;
    }

    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (book.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (!filter.test(book.email)) {
      setHide((...hide) => ({ ...hide, email: true }));
      return;
    }
    if (book.car === "") {
      setValid((...valid) => ({ ...valid, car: true }));
      return;
    }
    if (book.drive === "") {
      setValid((...valid) => ({ ...valid, drive: true }));
      return;
    }
    if (book.state === "") {
      setValid((...valid) => ({ ...valid, state: true }));
      return;
    }
    if (book.pickup === "") {
      setValid((...valid) => ({ ...valid, pickup: true }));
      return;
    }
    if (book.drop === "") {
      setValid((...valid) => ({ ...valid, drop: true }));
      return;
    }

    if (book.date === "") {
      setValid((...valid) => ({ ...valid, date: true }));
      return;
    }

    axios
      .post("http://localhost:8000/api/mailsent", book)

      .then((res) => console.log("dtaa", res.data.message));

    if (book.drive === "Yes") {
      navigate("/ThanksDrive");
    } else if (book.drive === "No") {
      navigate("/Thanks");
    }
  };
  const OnBook = (e) => {
    const { value, name } = e.target;
    setBook((pre) => ({ ...pre, [name]: value }));
    setValid(true);
    setHide(true);
  };

  return (
    <>
      <title>Book Now</title>

      <Navbar />
      <Grid>
        <Grid className={classes.color}>
          <Box className={classes.us}>Book Now</Box>
          <Box className={classes.we}>Book Your Ride Now</Box>
        </Grid>
        <Box className={classes.car}>Rent A Car Online</Box>

        <Grid className={classes.form}>
          <Box style={{ fontWeight: "400", fontSize: "20px" }}> Full Name*</Box>
          <TextField
            name="name"
            value={book.name}
            placeholder="Full Name"
            fullWidth
            onChange={OnBook}
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
            Phone Number*
          </Box>
          <TextField
            value={book.phone}
            type="Number"
            name="phone"
            placeholder="Phone Number"
            fullWidth
            onChange={OnBook}
          />
          {valid.phone == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Valid Number
            </span>
          )}

          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Email Address*
          </Box>
          <TextField
            id="outlined-basic"
            placeholder="Email Address"
            fullWidth
            onChange={OnBook}
            value={book.email}
            name="email"
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
          <FormControl fullWidth>
            <Box style={{ fontWeight: "400", fontSize: "20px" }}>
              Select Car*
            </Box>
            <Select onChange={OnBook} name="car" value={book.car}>
              <MenuItem value="Choose Option">Choose Option</MenuItem>
              <MenuItem value="HatchBack">HatchBack</MenuItem>
              <MenuItem value="Sedan">Sedan</MenuItem>
              <MenuItem value="SUV/MUV">SUV/MUV</MenuItem>
              <MenuItem value="Primium">Primium</MenuItem>
              <MenuItem value="Luxury">Luxury</MenuItem>
            </Select>
          </FormControl>
          {valid.car == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Choose Car Name*
            </span>
          )}

          <FormControl fullWidth>
            <Box style={{ fontWeight: "400", fontSize: "20px" }}>
              Self Drive*
            </Box>
            <Select
              name="drive"
              placeholder="Self Drive"
              onChange={OnBook}
              value={book.drive}
            >
              <MenuItem value="Choose Option">Choose Option</MenuItem>
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </Select>
          </FormControl>

          {valid.drive == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Select Driver Opestion
            </span>
          )}
          <FormControl fullWidth>
            <Box style={{ fontWeight: "400", fontSize: "20px" }}>
              Select State*
            </Box>
            <Select
              name="state"
              placeholder="Self Drive"
              onChange={OnBook}
              value={book.state}
            >
              <MenuItem value="Choose Option">Choose Option</MenuItem>
              <MenuItem value="Gujarat">Gujarat</MenuItem>
              <MenuItem value="Maharashtra">Maharashtra</MenuItem>
              <MenuItem value="Rajasthan">Rajasthan</MenuItem>
            </Select>
          </FormControl>
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
              Select State
            </span>
          )}
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Pickup Point*
          </Box>
          <TextField
            placeholder="Pickup Point"
            fullWidth
            onChange={OnBook}
            name="pickup"
            value={book.pickup}
          />
          {valid.pickup == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Pickup Address
            </span>
          )}
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Drop-off Point*
          </Box>
          <TextField
            placeholder="Drop-off Point"
            fullWidth
            onChange={OnBook}
            name="drop"
            value={book.drop}
          />
          <Box style={{ fontWeight: "400", fontSize: "20px" }}>
            {" "}
            Choose Date
          </Box>
          {valid.drop == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Drop-Off Address
            </span>
          )}
          <TextField
            name="date"
            type="date"
            defaultValue="24/7/2023"
            value={book.date}
            onChange={OnBook}
            // InputLabelProps={{
            //   shrink: true,
            // }}
            fullWidth
          />
          {valid.date == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Gadi Book Date
            </span>
          )}

          <Button
            className="btn"
            style={{
              backgroundColor: "#23809fc2",
              marginTop: "20px",
              color: "white",
            }}
            fullWidth
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
