import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Register from "./Componet/Register";
import Thanks from "./Thanks/Thanks";
import ThanksDrive from "./Thanks/ThankDriver";

import Login from "./Componet/Login";
import Forget from "./Componet/Forget";
import OwnerNavbar from "./Ownar/OwnerNavbar";
import About from "./About/About";
import HomeBookData from "./Ownar/HomeBookData";
import BookData from "./Ownar/BookData";
import ContactData from "./Ownar/ContactData";
import Book from "./Book/Book";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Populer from "./Populer/Populer";

function App() {
  var user = localStorage.getItem("user");

  function RequireAuth({ children }) {
    return user ? children : <Navigate to="/Login" replace />;
  }

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}>
            {" "}
          </Route>
          <Route exact path="/Thanks" element={<Thanks />}>
            {" "}
          </Route>
          <Route exact path="/ThanksDrive" element={<ThanksDrive />}>
            {" "}
          </Route>
          <Route exact path="/Login" element={<Login />}>
            {" "}
          </Route>

          <Route exact path="/Register" element={<Register />}>
            {" "}
          </Route>
          <Route exact path="/Forget" element={<Forget />}>
            {" "}
          </Route>
          <Route exact path="/HomeBookData" element={<HomeBookData />}>
            {" "}
          </Route>
          <Route exact path="/BookData" element={<BookData />}>
            {" "}
          </Route>
          <Route exact path="/ContactData" element={<ContactData />}>
            {" "}
          </Route>

          <Route
            exact
            path="/OwnerNavbar"
            element={
              <RequireAuth>
                <OwnerNavbar />
              </RequireAuth>
            }
          >
            {" "}
          </Route>

          <Route
            exact
            path="/About"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/Book"
            element={
              <RequireAuth>
                <Book />
              </RequireAuth>
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/Contact"
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/Populer"
            element={
              <RequireAuth>
                <Populer />
              </RequireAuth>
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/Home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          >
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
