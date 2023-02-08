import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "./OwnerNavbar";
import axios from "axios";
import Footer from "../Dashboard/Footer";

export default function BookData() {
  // var data = JSON.parse(localStorage.getItem("Book"));
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Gmaildata"
      );

      setData(response);
      console.log("==>", response);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const Ondelete = (i) => {
  //   value.splice(i);
  //   localStorage.setItem("Book", JSON.stringify(value));
  //   value();
  // };
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  return (
    <>
      <title>Booking Data</title>

      <OwnerNavbar />
      <h3
        style={{
          textAlign: "center",
          color: "#23809fc2",
          padding: "10px 10px 10px 10px",
        }}
      >
        {" "}
        Speedo Car Rental Booking Data
      </h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Today Date</TableCell>
              <TableCell align="left">Booking Date</TableCell>
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Car Name</TableCell>
              <TableCell align="left">Pickup Point</TableCell>
              <TableCell align="left">Drop Point</TableCell>
              <TableCell align="left">State</TableCell>
              <TableCell align="left">Driver Option</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                // key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.name}</TableCell>
                <TableCell
                  align="left"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {date}
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.car}</TableCell>
                <TableCell align="left">{row.pickup}</TableCell>
                <TableCell align="left">{row.drop}</TableCell>
                <TableCell align="left">{row.state}</TableCell>
                <TableCell align="left">{row.drive}</TableCell>

                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "10px" }}
                    // onClick={() => Ondelete(i)}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
}
