import React from "react";
import "./Populer.css";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import img from "../Image/nexon.jpg";
import img1 from "../Image/harrier.jpg";
import img2 from "../Image/punch.jpg";
import img3 from "../Image/seltos.jpg";
import img4 from "../Image/xuv.jpg";
import img5 from "../Image/thar.png";
import img6 from "../Image/Innova.jpg";
import img7 from "../Image/benz.jpg";
import img8 from "../Image/kiacarnival.jpg";
import img9 from "../Image/Safari.jpg";
import img10 from "../Image/wingar.jpg";
import img11 from "../Image/multivan.jpg";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#23809fc2",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
  },
  colorbc: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    padding: "30px",
  },
  us: {
    fontSize: "35px",
  },
  we: {
    padding: "20px",
  },
  pop: {
    textAlign: "center",
    // fontSize:"25px",
    // color:"black",
    padding: "30px",
  },
  pop1: {
    fontSize: "50px",
    fontWeight: "normal",
  },
  pop2: {
    fontSize: "30px",
  },
  img: {
    height: "210px",
    width: "210px",
  },
  imgg: {
    backgroundColor: "#23809fc2",
    color: "#fff !important",
    boxShadow: "5px 5px 3px rgb(0 0 0 / 15%), -5px -5px 3px rgb(0 0 0 / 15%)",
    //  borderRadius: " 15px",
  },
  imgmain: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    columnGap: "40px",
    rowGap: "30px",
    padding: "10px 10px 10px 10px",
    // borderRadius:"15px"
  },
  cartext: {
    padding: "30px",
    // display:"flex",
    textAlign: "center",
    fontWeight: "bold",
  },
}));
export default function PopulerCenter() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.pop}>
        <Box className={classes.pop1}>Popular Fleets</Box>
        <Box className={classes.pop2}>
          These are some of our popular fleet. But we have others also.
        </Box>
      </Grid>
      {/* ....., */}
      <Grid spacing={3}>
        <Grid className={classes.imgmain}>
          <Grid className="imgg">
            <img src={img} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}> Tata Nexon Car AC 4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img1} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata harrier AC 4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img2} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata Punch AC 3+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img3} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Kia seltos AC 3+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img5} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Mahindra Thar AC 3+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img4} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Mahindra XUV700 AC 4+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img7} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Mercedes Benz AC 6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img6} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Innova AC 6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img8} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Kia Carnival.AC 6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img9} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata Safari AC 6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img10} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Tata Winger AC 14+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
          <Grid className="imgg">
            <img src={img11} alt="Girl in a jacket" className="imgcr" />
            <Grid className={classes.cartext}>
              <Box sx={{ fontSize: "20px" }}>Volkswagen Caravelle AC 6+1</Box>
              <Box> AC</Box>
              <Box> GPS Fitted</Box>
              <Box>700 KM/Day</Box>
              <Box> Well Maintained Cars</Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="bcimg">
        {/* <img src={img6} alt="Girl in a jacket" className="imgbc" /> */}
        <Grid className={classes.colorbc}>
          <Box className={classes.us}>Customer Reviews</Box>
          <Box className={classes.we}>
            See What Our Customer Says About Us...
          </Box>
        </Grid>
        <Grid className="textbc">
          {/* <Box className={classes.dot}>!!</Box> */}
          <Box className="text1">
            I have booked one way cab from Speedo Car Rental. I have to go from
            Mumbai to Pune. They arranged a cab for me at very affordable
            prices. I am really happy with their services.
          </Box>
          <br></br>
          <Box className="text2">Risi Singh</Box>
          <Box className="text3">Surat, Gujarat</Box>
        </Grid>
        <Grid className="textbc">
          <Box className="text1">
            I need a cab in Jaipur, got Speedo Car Rental when searching online.
            They provide me 50% off on my first ride. I booked my ride for just
            Rs. 1,500 for 2 days trip.
          </Box>
          <br></br>
          <Box className="text2">Narender Meena</Box>
          <Box className="text3">Jaipur, Rajasthan</Box>
        </Grid>
      </Grid>
    </>
  );
}
