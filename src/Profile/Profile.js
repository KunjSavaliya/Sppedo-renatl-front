import React from "react";
import Details from "./Details";
import img1 from "../Image/profile.jpg";

function Profile() {
    return (
        <div
            className="container "
            style={{
                backgroundSize: "cover",
                overflow: "hidden",
            }}
        >
            <div className="row">
                <div
                    className="col-12 col-lg-4 col-sm-6"
                    style={{
                        marginTop: "7vw",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <img
                        style={{ height: "225px", borderRadius: "120px" }}
                        src={img1}
                        alt=""
                    />
                </div>
                <div className="col-12 col-lg-6 col-sm-6">
                    <Details />
                </div>
            </div>
        </div>
    );
}

export default Profile;
