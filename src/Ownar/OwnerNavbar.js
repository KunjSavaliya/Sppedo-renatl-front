import React, { useState } from "react";
import "../Dashboard/Navbar.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { OwnerNavitem } from "./OwnerNavitem";
import logo from "../Image/logoo.jpg";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOnHome = () => {
    navigate("/HomeBookData");
  };
  const handleOnBook = () => {
    navigate("/BookData");
  };
  const handleOnContact = () => {
    navigate("/ContactData");
  };

  const handleOnLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "62px" }}
          />
        </Link>
      </Typography>
      <Divider />
      <List sx={{ color: "black" }}>
        <div className="view">
          {OwnerNavitem.map((item) => {
            return (
              <p className="view1" key={item.id}>
                <Link
                  to={item.path}
                  className={item.cName}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    padding: "0px 20px 0px 20px",
                  }}
                >
                  {item.title}
                </Link>
                {/* {Dropdowns && <Dropdown />} */}
              </p>
            );
          })}
        </div>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "white", boxShadow: "none", height: "4rem" }}>
          <Toolbar style={{ justifyContent: "space-between", display: "flex" }}>
            <Toolbar>
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100px", height: "62px" }}
                />
              </Link>
              <p style={{ fontWeight: 600 }}> </p>
            </Toolbar>
            <Typography
              variant="h6"
              component="img"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            ></Typography>

            <Box sx={{ display: "flex", flexDirection: "row", gap: "7px" }}>
              <NavLink to="/BookData" className="btnactive">
                BookData
              </NavLink>
              <NavLink to="/ContactData" className="btnactive">
                Comment Data
              </NavLink>

              <button
                key="Logout"
                className="btnactive"
                onClick={handleOnLogout}
              >
                <p>Logout</p>
              </button>
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main">
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

export default DrawerAppBar;
