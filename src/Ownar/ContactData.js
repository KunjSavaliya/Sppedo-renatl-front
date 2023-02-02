import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "./OwnerNavbar";
import Footer from "../Dashboard/Footer";

export default function ContactData() {
  var data = JSON.parse(localStorage.getItem("home"));
  console.log("data", data);
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
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Booking Date</TableCell>
              <TableCell align="left">Email Address</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Car Name</TableCell>
              <TableCell align="left">Driver Option</TableCell>
              <TableCell align="left">Pickup Point</TableCell>
              <TableCell align="left">Drop Point</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                // key={row.drive}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left"> {row.name}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.car}</TableCell>
                <TableCell align="left">{row.drive}</TableCell>
                <TableCell align="left">{row.pickup}</TableCell>
                <TableCell align="left">{row.drop}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
}
