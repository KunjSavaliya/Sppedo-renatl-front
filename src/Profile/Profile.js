import React from "react";

import Details from "./Details";
import img1 from "../Image/logoo.jpg";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";

function Profile() {
    return (
        <>
            <title>Edit Profile - Sppedo Car Rental</title>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col-12 col-lg-2 " style={{ display: "flex", justifyContent: "center", padding: "34px 0px 35px 148px" }}>
                    <img src={img1} alt="img" height={200} width={200} ></img>
                </div>


                <div className="col-6 col-10">
                    <Details />
                </div>

            </div >
            <Footer />
        </>
    );
}

export default Profile;
