import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "./OwnerNavbar";
import Footer from "../Dashboard/Footer";
import axios from "axios";

export default function ContactData() {
  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/commentdata"
      );

      setData(response);
      console.log("==>", response);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <title>Contact Data</title>
      <OwnerNavbar />
      <h3
        style={{
          textAlign: "center",
          color: "#23809fc2",
          padding: "10px 10px 10px 10px",
        }}
      >
        {" "}
        Speedo Car Rental Contact Comment Data
      </h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, color: "red" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Today Date</TableCell>
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Message</TableCell>
              <TableCell align="left">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                // key={row.drive}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left"> {row.name}</TableCell>
                <TableCell
                  align="left"
                  style={{ color: "red", fontWeight: "bold" }}
                >
                  {date}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.message}</TableCell>
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
