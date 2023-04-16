import React, { useState } from "react";

function Details() {
    const [userRegistration, setUserRegistration] = useState({
        fullname: "",
        contactno: "",
        emailaddres: "",
        gender: "",
        datepicker: "",
        address: "",
    });

    const OnHandel = (e) => {
        // const { value, name } = e.target;
        // setBook((pre) => ({ ...pre, [name]: value }));
        // setValid(true);
        // setHide(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserRegistration({
            fullname: "",
            contactno: "",
            emailaddres: "",
            gender: "",
            datepicker: "",
            address: "",
        });
    };
    return (
        <div className="card" style={{ margin: "7vw 4vw 7vw" }}>
            <div className="card-body">
                <h5
                    className="card-title"
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "3vw",
                        color: "black",
                    }}
                >
                    Edit Profile
                </h5>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Full Name*
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"
                            value={userRegistration.fullname}
                            onChange={OnHandel}
                            aria-describedby="name"
                            placeholder="Enter Your Full Name"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Contact Number*
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="contactno"
                            name="contactno"
                            value={userRegistration.contactno}
                            onChange={OnHandel}
                            aria-describedby="name"
                            placeholder="Enter Your Contact number"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email Address*
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="emailaddres"
                            name="emailaddres"
                            value={userRegistration.emailaddres}
                            onChange={OnHandel}
                            aria-describedby="name"
                            placeholder="Enter Your Email Address"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Gender
                        </label>
                        <select
                            type="text"
                            className="form-control"
                            id="selectcar"
                            name="selectcar"
                            value={userRegistration.gender}
                            onChange={OnHandel}
                            aria-describedby="name"
                        >
                            <option> Select gender </option>
                            <option> Man</option>
                            <option> Women</option>
                            <option> Other</option>
                        </select>

                        <label htmlFor="exampleInputEmail1" className="form-label">
                            DOB
                        </label>
                        <input
                            type="date"
                            className="form-control"
                            id="datepicker"
                            name="datepicker"
                            value={userRegistration.datepicker}
                            onChange={OnHandel}
                            aria-describedby="name"
                        />
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Address
                        </label>
                        <textarea
                            type="address"
                            className="form-control"
                            id="address"
                            name="address"
                            value={userRegistration.address}
                            onChange={OnHandel}
                            aria-describedby="name"
                            placeholder="Enter Your Address"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark"
                        style={{ width: "100%", fontSize: "17px" }}
                    >
                        Edit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Details;
