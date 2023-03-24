import React, { useEffect, useState } from "react";
import "./Feedback.css";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function FeedbackTabel() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/feedbackdata"
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
      <h3
        style={{
          textAlign: "center",
          color: "#23809fc2",
          padding: "10px 10px 10px 10px",
        }}
      >
        {" "}
        Customer Feedback
      </h3>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100, color: "red" }} aria-label="simple table">
          {/* <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
            </TableRow>
          </TableHead> */}
          <TableBody>
            {data.map((row) => (
              <TableRow
                // key={row.drive}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    padding: "0px 10pc",
                  }}
                >
                  Name: {row.name}
                </TableCell>
                <TableCell
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                  }}
                >
                  Message: {row.message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
