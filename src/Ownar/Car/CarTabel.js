import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import "../../Book/Book.css";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import OwnerNavbar from "../../Ownar/Navbar/OwnerNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Dashboard/Footer";
import Button from "@mui/material/Button";


export default function BookData() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Addcardata"
      );

      setData(response);
      console.log("==>", response);

    } catch (error) { }
    setLoading(false);

  };

  // const value = data.length
  //     localStorage.setItem("Bookingdata",(value));
  //   console.log("..",value);
  // let iterator = data.values();
  // let array1 = []
  // for (let value of iterator) {
  //   var gadi = value.gadi;
  //   console.log("gadi", gadi);
  //   array1.push(gadi)
  // }

  // function getOccurrence(array, value) {
  //   var count = 0;
  //   array.forEach((v) => (v === value && count++));
  //   return count;
  // }


  // var HatchBack = getOccurrence(array1, "HatchBack");
  // localStorage.setItem("HatchBack", JSON.stringify(HatchBack));

  // var Sedan = getOccurrence(array1, "Sedan");
  // localStorage.setItem("Sedan", JSON.stringify(Sedan));


  // var Suv = getOccurrence(array1, "SUV/MUV");
  // localStorage.setItem("Suv", JSON.stringify(Suv));

  // var Premium = getOccurrence(array1, "Primium");
  // localStorage.setItem("Premium", JSON.stringify(Premium));

  // var Luxury = getOccurrence(array1, "Luxury");
  // localStorage.setItem("Luxury", JSON.stringify(Luxury));


  useEffect(() => {
    fetchData();
  }, []);

  const DeleteUser = (id) => {
    console.log("id", id);
    axios.delete(`http://localhost:8000/api/cardelete/${id}`);
    fetchData();

  };

  const UpdateUser = (index) => {
    navigate(`/Car/${index}`);
  };

  const onSubmit = () => {
    navigate("/Car")
  }




  return (
    <>
      <title>Booking Data</title>

      <OwnerNavbar />
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
        ADD CAR
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Car Brand</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Car Name</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Edit</TableCell>
              <TableCell align="left" style={{ backgroundColor: "#23809fc2" }} >Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                // key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row.carname}</TableCell>

                <TableCell align="left">{row.carbrand}</TableCell>


                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "10px" }}
                    onClick={() => UpdateUser(row._id)}

                  >
                    Edit
                  </button>
                </TableCell>
                <TableCell align="left">
                  <button
                    style={{ width: "80px", borderRadius: "10px" }}
                    onClick={() => DeleteUser(row._id)}
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