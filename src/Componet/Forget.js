import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
const useStyles = makeStyles((theme) => ({}));

export default function Register() {
  const navigate = useNavigate();
  const classes = useStyles();

  const [user, setuser] = useState({
    email: "",
    password: "",
    Cpassword: "",
  });
  const [hide, sethide] = useState(false);
  const [valid, setValid] = useState({});

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/userdata"
      );

      setData(response);
      console.log("==>", response);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function pagehandler(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
    setValid(true);
    sethide(true);
  }
  function Submit() {
    console.log("data", data);
    var index = data.findIndex((element) => element.email === user.email);

    if (user.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (data[index]?.email !== user.email) {
      sethide((...hide) => ({ ...hide, email: true }));
      // setValid((...valid) => ({ ...valid, email: true }));
      return;
    }

    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    const patterns = /[A-Z]/;

    const patternss = /[0-9]/;
    if (user.password === "") {
      setValid((...valid) => ({ ...valid, password: true }));
      return;
    } else if (!pattern.test(user.password)) {
      sethide((...hide) => ({ ...hide, password: true }));
      return;
    } else if (!patterns.test(user.password)) {
      sethide((...hide) => ({ ...hide, password: true }));
      return;
    } else if (!patternss.test(user.password)) {
      sethide((...hide) => ({ ...hide, password: true }));

      return;
    }

    if (user.Cpassword === "") {
      setValid((...valid) => ({ ...valid, Cpassword: true }));

      return;
    } else if (user.password !== user.Cpassword) {
      sethide((...hide) => ({ ...hide, Cpassword: true }));

      return;
      // console.log("password",user.password !== user.cpass);
    }

    axios
      .post("http://localhost:8000/api/forget", user)

      .then((res) => console.log(res.data.message));

    console.log(user);
  }
  const [type, setType] = useState("password");
  const handelpass = () => {
    if (type === "password") {
      // setIcon(eye);
      setType("text");
    } else {
      // setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <>
      <title>Forget Password</title>
      <h2
        style={{
          textAlign: "center",
          color: "#23809fc2",
          marginBottom: "-42px",
        }}
      >
        Speedo Car Rental
      </h2>

      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{ backgroundColor: "white", borderRadius: "20px" }}
          // style={{ backgroundColor: "white", borderRadius: "20px" }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "#23809fc2" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#23809fc2" }}>
              Forget Password
            </Typography>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={pagehandler}
              value={user.email}
            />

            {valid.email == true && (
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
              >
                Enter Your Email Address
              </span>
            )}
            {hide.email == true && (
              <span style={{ color: "red" }}>
                Email Address is Not Register
              </span>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              type="Password"
              label="New Password"
              name="password"
              autoComplete="Password"
              autoFocus
              onChange={pagehandler}
              value={user.password}
            />

            {valid.password == true && (
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
              >
                Enter New Password
              </span>
            )}
            {hide.password == true && (
              <span style={{ color: "red" }}>
                Enter Symbols,Uppercase,Numbers Characters
              </span>
            )}

            <TextField
              margin="normal"
              required
              fullWidth
              id="Cpassword"
              type={type}
              label="Reenter New Password"
              name="Cpassword"
              autoComplete="Password"
              autoFocus
              onChange={pagehandler}
              value={user.Cpassword}
            />

            {valid.Cpassword == true && (
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
              >
                Enter Your Password
              </span>
            )}
            {hide.Cpassword == true && (
              <span
                style={{ color: "red", fontWeight: "bold", fontSize: "15px" }}
              >
                Password And Confirm Password Does Not Match
              </span>
            )}
            <FormControlLabel
              style={{ marginRight: "230px" }}
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  onClick={handelpass}
                />
              }
              label="Show Password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#23809fc2" }}
              onClick={Submit}
            >
              Forget Password
            </Button>
            <Grid container style={{ margin: 5 }}>
              <Grid item>
                <Link to="/Login" variant="body2">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
