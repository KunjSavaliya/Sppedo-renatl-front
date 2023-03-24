import React,{useEffect,useState} from "react";
import "./Dashboard.css";
import Card from "../Resuable/Card";
import OwnerNavbar from "../Navbar/OwnerNavbar";
import Footer from "../../Dashboard/Footer";
import axios from "axios";
import MileChart from "../Data/Totalcar";
import CarStatsChart from "../Data/Cardata"

export default function Dashboard() {

  
  const register = localStorage.getItem("registerdata");
  const comment = localStorage.getItem("commentdata");
  const booking = localStorage.getItem("Bookingdata");
  const feedback = localStorage.getItem("feedbackdata");



  const carObj = {
    title: "REGISTER DATA",
    totalNumber: register,
    icon: "ri-police-car-line",
  };
  
  const tripObj = {
    title: "CONTACTUS DATA",
    totalNumber:comment ,
    icon: "ri-steering-2-line",
  };
  
  const clientObj = {
    title: "BOOKING DATA",
    totalNumber: booking,
    icon: "ri-user-line",
  };
  
  const distanceObj = {
    title: "FEEDBACK DATA",
    totalNumber: feedback,
    icon: "ri-timer-flash-line",
  };
  
  return (
    
    <>
      <title>Dashboard</title>
      <OwnerNavbar/>
      <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <Card item={carObj} />
          <Card item={tripObj} />
          <Card item={clientObj} />
          <Card item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Car Orders</h3>
            <MileChart />
          </div>
          <div className="stats">
            <h3 className="stats__title">State Orders</h3>
            <CarStatsChart />
          </div>

        </div> 
        </div>
    </div>
      <Footer/>
    </>
  );
}
