import React from "react";

import Details from "./Details";
import img1 from "../Image/logoo.jpg";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";

function Profile() {
    return (
        <>
            <Navbar />
            <div

            >
                <div>

                    <div className="col-12 col-lg-12">
                        <Details />
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}

export default Profile;
