import React from "react";
import { useNavigate } from "react-router-dom";

function GetInTouch() {
  const navigate = useNavigate();
  const OnTouch = () => {
    navigate("/Contact");
  };
  return (
    <div
      className="container"
      style={{ color: "white", margin: "12% 5% 0 5vw" }}
    >
      <p style={{ fontSize: "5vw", fontWeight: "bold" }}>
        Book A Cab Online Kunj Savaliya From ₹ 9 Per KM
      </p>
      <p style={{ fontSize: "24px" }}>
        Book a cab from wide range of cars available. Book for one way, round
        trip, self drive. Rent a car @ lowest prices. Best & well maintained
        cars.
      </p>
      <button
        className="btn btn btn-outline-primary"
        style={{
          backgroundColor: "#23809fc2",
          color: "white",
          border: "black",
          fontSize: "17px",
        }}
        onClick={OnTouch}
      >
        Get in Touch
      </button>
    </div>
  );
}

export default GetInTouch;
