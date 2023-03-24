import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CarForm() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: response } = await axios.get(
        "http://localhost:8000/api/Gmaildata"
      );

      setData(response);
  
     
    } catch (error) {}
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const [userRegistration, setUserRegistration] = useState({
    name: "",
    phone: "",
    email: "",
    car: "",
    state: "",
    drop: "",
    pickup: "",
    drive: "",
    date: "",
  });
  const [valid, setValid] = useState({});
  const [hide, setHide] = useState({});

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
    setValid(true);
    setHide(true);
  };

  const onSubmit = () => {
    if (userRegistration.name === "") {
      setValid((...valid) => ({ ...valid, name: true }));
      return;
    }

    var IndNum = /^[0]?[789]\d{9}$/;
    if (userRegistration.phone === "") {
      setValid((...valid) => ({ ...valid, phone: true }));
      return;
    } else if (!IndNum.test(userRegistration.phone)) {
      setValid((...valid) => ({ ...valid, phone: true }));
      return;
    }

    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (userRegistration.email === "") {
      setValid((...valid) => ({ ...valid, email: true }));
      return;
    } else if (!filter.test(userRegistration.email)) {
      setHide((...hide) => ({ ...hide, email: true }));
      return;
    }
    if (userRegistration.car === "") {
      setValid((...valid) => ({ ...valid, car: true }));
      return;
    }
    if (userRegistration.drive === "") {
      setValid((...valid) => ({ ...valid, drive: true }));
      return;
    }
    if (userRegistration.state === "") {
      setValid((...valid) => ({ ...valid, state: true }));
      return;
    }
    if (userRegistration.pickup === "") {
      setValid((...valid) => ({ ...valid, pickup: true }));
      return;
    }
    if (userRegistration.drop === "") {
      setValid((...valid) => ({ ...valid, drop: true }));
      return;
    }

    if (userRegistration.date === "") {
      setValid((...valid) => ({ ...valid, date: true }));
      return;
    }

    axios
      .post("http://localhost:8000/api/mailsent", userRegistration)

      .then((res) => console.log("dtaa", res.data.message));

      const value = data.length
      localStorage.setItem("Bookingdata",(value));
    localStorage.setItem("Booking", JSON.stringify(userRegistration));

    if (userRegistration.drive === "Yes") {
      navigate("/Thanks");
    } else if (userRegistration.drive === "No") {
      navigate("/Thanks");
    }
  };
  return (
    <div className="card" style={{ margin: "7vw 4vw 7vw" }}>
      <div className="card-body">
        <h5
          className="card-title"
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "2vw",
            color: "black",
          }}
        >
          Rent A Car Online
        </h5>
        {/* <form action="" onSubmit={handleSubmit}> */}
        <div className="mb-2" style={{ fontSize: "17px", color: "black" }}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Full Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="fullname"
            name="name"
            value={userRegistration.name}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Full Name"
          />
          {valid.name == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Your Name
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Contact Number*
          </label>
          <input
            type="number"
            className="form-control"
            id="contactno"
            name="phone"
            value={userRegistration.phone}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Contact number"
          />
          {valid.phone == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Valid Number
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address*
          </label>
          <input
            type="email"
            className="form-control"
            id="emailaddres"
            name="email"
            value={userRegistration.email}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Email Address"
          />
          {valid.email == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Valid email
            </span>
          )}
          {hide.email == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Invlid Email Address
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Select Car
          </label>
          <select
            type="text"
            className="form-control"
            id="selectcar"
            name="car"
            value={userRegistration.car}
            onChange={handleinput}
            aria-describedby="name"
          >
            <option> Chose your Option </option>
            <option> Hatchback</option>
            <option> Sedan</option>
            <option> SUV/MUV</option>
            <option> Primium</option>
            <option> Luxury</option>
          </select>
          {valid.car == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Choose Car Name
            </span>
          )}

          <label htmlFor="exampleInputEmail1" className="form-label">
            Self Drive
          </label>
          <select
            type="text"
            className="form-control"
            id="selfdrive"
            name="drive"
            value={userRegistration.drive}
            onChange={handleinput}
            aria-describedby="name"
          >
            <option> Chose your Option </option>
            <option> Yes</option>
            <option> No</option>
          </select>
          {valid.drive == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Select Driver Opestion
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Select State
          </label>
          <select
            type="text"
            className="form-control"
            name="state"
            value={userRegistration.State}
            onChange={handleinput}
            aria-describedby="state"
          >
            <option> Chose your Option </option>
            <option> Gujarat</option>
            <option> Maharashtra</option>
            <option> Rajasthan</option>
          </select>
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
              Select State
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Pickup Point*
          </label>
          <input
            type="text"
            className="form-control"
            name="pickup"
            value={userRegistration.pickup}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Pickup Point"
          />
          {valid.pickup == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Pickup Address
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Drop-Off Point*
          </label>
          <input
            type="email"
            className="form-control"
            id="emailaddres"
            name="drop"
            value={userRegistration.drop}
            onChange={handleinput}
            aria-describedby="name"
            placeholder="Enter Your Drop-off Point"
          />
          {valid.drop == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter Drop-Off Address
            </span>
          )}
          <label htmlFor="exampleInputEmail1" className="form-label">
            Choose Date
          </label>
          <input
            type="date"
            className="form-control"
            id="datepicker"
            name="date"
            value={userRegistration.date}
            onChange={handleinput}
            aria-describedby="name"
          />
          {valid.date == true && (
            <span
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "15px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Enter vehicle Book Date
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-dark"
          style={{ width: "100%", fontSize: "17px" }}
          onClick={onSubmit}
        >
          Submit
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default CarForm;
