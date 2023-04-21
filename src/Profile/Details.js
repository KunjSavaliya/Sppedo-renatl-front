import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



function Details() {

    const [userRegistration, setUserRegistration] = useState({
        name: "",
        phone: "",
        email: "",
        gender: "",
        dob: "",
        Address: "",
    });
    const { id } = useParams();

    // debugger
    const fetchEditedData = async (id) => {
        const data = await axios.get(`http://localhost:8000/api/profileupdate/${id}`);

        setUserRegistration(data.data);

    };


    useEffect(() => {
        if (id) {
            fetchEditedData(id);
        }
    }, []);

















    const OnHandel = (e) => {
        const { value, name } = e.target;
        setUserRegistration((pre) => ({ ...pre, [name]: value }));
        // setValid(true);
        // setHide(true);
    };

    const onSubmit = () => {
        if (id) {
            axios
                .put(`http://localhost:8000/api/pupdate/${id}`, userRegistration)

                .then((res) => console.log("dtaa", res.data.message));
            localStorage.setItem("Profiledata", JSON.stringify(userRegistration));

        } else {
            axios
                .post("http://localhost:8000/api/Profile", userRegistration)

                .then((res) => console.log("dtaa", res.data.message));

            localStorage.setItem("Profiledata", JSON.stringify(userRegistration));

        }

    };

    return (
        <div className="card" style={{ margin: "2vw 8vw 2vw 8vw" }}>
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

                <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Full Name*
                    </label>
                    <input
                        type="text"
                        className="form-control"

                        name="name"
                        value={userRegistration.name}
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

                        name="phone"
                        value={userRegistration.phone}
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

                        name="email"
                        value={userRegistration.email}
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

                        name="gender"
                        value={userRegistration.gender}
                        onChange={OnHandel}
                        aria-describedby="name"
                    >
                        <option> Select gender </option>
                        <option> Male</option>
                        <option> Female</option>
                        <option> Other</option>
                    </select>

                    <label htmlFor="exampleInputEmail1" className="form-label">
                        DOB
                    </label>
                    <input
                        type="date"
                        className="form-control"

                        name="dob"
                        value={userRegistration.dob}
                        onChange={OnHandel}
                        aria-describedby="name"
                    />
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Address
                    </label>
                    <textarea
                        type="Address"
                        className="form-control"
                        name="Address"
                        value={userRegistration.Address}
                        onChange={OnHandel}
                        aria-describedby="name"
                        placeholder="Enter Your Address"
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-dark"
                    style={{ width: "100%", fontSize: "17px" }}
                    onClick={onSubmit}
                >
                    Edit
                </button>

            </div >
        </div >
    );
}

export default Details;
