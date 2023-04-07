import React, { useState, useEffect } from 'react';
import OwnerNavbar from "../../Ownar/Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from '@mui/material/InputLabel';




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

export default function State() {
    const navigate = useNavigate();



    const classes = useStyles();
    const [comment, setComment] = useState({

        state: "",

    });



    const [valid, setValid] = useState({});
    //   const [hide, setHide] = useState({});

    const oninput = (e) => {
        const { name, value } = e.target;

        setComment((pre) => ({
            ...pre,
            [name]: value,
        }));
        setValid(true);
        // setHide(true);
    };

    const onSubmit = () => {
        if (comment.state === "") {
            setValid((...valid) => ({ ...valid, state: true }));
            return;
        }




        axios
            .post("http://localhost:8000/api/Statecar", comment)

            .then((res) => console.log(res.data.message));




        navigate("/StateTabel")


    };
    return (
        <>
            <title>Car -Speedo Car Rental</title>
            <OwnerNavbar />
            <Grid className={classes.form}>
                <Box style={{ fontWeight: "400", fontSize: "20px" }}> Gadi State*</Box>
                <TextField
                    name="state"
                    value={comment.state}
                    // placeholder="Gadi Name"
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
                        Enter State Name
                    </span>
                )}


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

            <Footer />
        </>
    )
}
