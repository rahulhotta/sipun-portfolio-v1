"use client";
import React, { useState } from "react";
import "./NavBar.css";
import Link from 'next/link';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Drawer from "@mui/material/Drawer";


const Navbar = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "About" },
    { name: "Wroks", path: "Works" },
    { name: "Contact", path: "Contact" },
  ];
  const [drawerState, setDrawerState] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const toggleDrawer = () => {
    setDrawerState((prev) => {
      return !prev;
    });
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div >
      <AppBar position="static" className="navbar__container">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                // onClick={handleOpenNavMenu}
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer}>
                <div className="drawer__container">
                  {pages.map((page) => (
                    <Link
                      href={page.path}
                      className={({ isActive }) =>
                        isActive
                          ? "navlink__container active"
                          : "navlink__container inactive"
                      }
                    >
                      <MenuItem key={page.name} onClick={toggleDrawer}>
                        {page.name}
                      </MenuItem>
                    </Link>
                  ))}
                </div>
              </Drawer>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "flex-end" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link href={page.path} className="navbar__navLink">{page.name}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
