import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Register from "./Componet/Register";
import Bookingconform from "./Thanks/Bookingconfirm";
import Feedbackrconform from "./Thanks/Feedbackrconfirm";
import Getintouchconfirm from "./Thanks/GetintouchConfirm";
// import nav from "./Dashboard/Nav";
import Login from "./Componet/Login";
import Forget from "./Componet/Forget";
import OwnerNavbar from "./Ownar/Navbar/OwnerNavbar";
import About from "./About/About";
import EditBookData from "./Ownar/Editbook";
import BookData from "./Ownar/BookData";
import ContactData from "./Ownar/ContactData";
import Book from "./Book/Book";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
<<<<<<< HEAD
import Populer from "./Populer/Popular";
=======
import Populer from "./Popular/Populer";
>>>>>>> 2a549d793e570d8177ff9806a144ed7a9a855a56
import Feedback from "./FeedBack/Feedback";
import Dashboard from "./Ownar/Dashboard/Dashboard";
import Car from "./Ownar/Car/Car";
import Cartabel from "./Ownar/Car/CarTabel"
import State from "./Ownar/State/State";
import StateTabel from "./Ownar/State/StateTabel";
import Driver from "./Ownar/Driver/Driver";
import DriverTabel from "./Ownar/Driver/DriverTabel";

function App() {
  var user = localStorage.getItem("user");

  function RequireAuth({ children }) {
    return user ? children : <Navigate to="/Login" replace />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Bookingconform" element={<Bookingconform />}></Route>
          <Route exact path="/Feedbackrconform" element={<Feedbackrconform />}></Route>
          <Route exact path="/GetintouchConfirm" element={<Getintouchconfirm />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Forget" element={<Forget />}> </Route>
          <Route exact path="/EditBookData" element={<EditBookData />}></Route>
          <Route exact path="/BookData" element={<BookData />}></Route>
          <Route exact path="/ContactData" element={<ContactData />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}> </Route>
          <Route exact path="/Car" element={<Car />}> </Route>
          <Route exact path="/CarTabel" element={<Cartabel />}> </Route>
          <Route exact path="/State" element={<State />}> </Route>
          <Route exact path="/StateTabel" element={<StateTabel />}> </Route>
          <Route exact path="/Driver" element={<Driver />}> </Route>
          
          <Route exact path="/DriverTabel" element={<DriverTabel />}> </Route>
          {/* <Route exact path="/nav" element={<nav/>}> </Route> */}


          <Route exact path='/EditBookData/:index' element={< EditBookData />} ></Route>
          <Route exact path='/Car/:index' element={< Car />} ></Route>


          <Route exact path="/FeedBack" element={<RequireAuth> <Feedback /></RequireAuth>}></Route>
          <Route exact path="/OwnerNavbar" element={<RequireAuth><OwnerNavbar /></RequireAuth>}></Route>
          <Route exact path="/About" element={<RequireAuth> <About /></RequireAuth>} ></Route>
          <Route exact path="/Book" element={<RequireAuth><Book /> </RequireAuth>}></Route>
          <Route exact path="/Contact" element={<RequireAuth><Contact /></RequireAuth>}></Route>
          <Route exact path="/Populer" element={<RequireAuth><Populer /></RequireAuth>}></Route>
          <Route exact path="/Home" element={<RequireAuth><Home /></RequireAuth>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
