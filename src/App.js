import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Register from "./Componet/Register";
import Bookingconform from "./Thanks/Bookingconform";
import Feedbackrconform from "./Thanks/Feedbackrconform";

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
import Populer from "./Populer/Populer";
import Feedback from "./FeedBack/Feedback";
import Dashboard from "./Ownar/Dashboard/Dashboard";

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
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Forget" element={<Forget />}> </Route>
          <Route exact path="/EditBookData" element={<EditBookData />}></Route>
          <Route exact path="/BookData" element={<BookData />}></Route>
          <Route exact path="/ContactData" element={<ContactData />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard/>}> </Route>
           <Route exact path='/EditBookData/:index' element={< EditBookData />} ></Route>
            
          
          <Route exact path="/FeedBack"element={ <RequireAuth> <Feedback /></RequireAuth>}></Route>
          <Route exact path="/OwnerNavbar" element={<RequireAuth><OwnerNavbar /></RequireAuth>}></Route>
          <Route exact path="/About"element={ <RequireAuth> <About /></RequireAuth>} ></Route>
          <Route exact path="/Book" element={<RequireAuth><Book /> </RequireAuth>}></Route>
          <Route exact path="/Contact" element={<RequireAuth><Contact/></RequireAuth>}></Route>
          <Route exact path="/Populer" element={<RequireAuth><Populer /></RequireAuth>}></Route>
          <Route exact path="/Home"element={<RequireAuth><Home /></RequireAuth>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
