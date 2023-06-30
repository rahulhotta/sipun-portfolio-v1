"use client";
// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import "./NavBar.css";
// import Link from "next/link";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Drawer from "@mui/material/Drawer";

// const Navbar = () => {
//   const pathname = usePathname();
//   const pages = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "About" },
//     { name: "Works", path: "Works" },
//     { name: "Contact", path: "Contact" },
//   ];
//   const [drawerState, setDrawerState] = useState(false);
//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const toggleDrawer = () => {
//     setDrawerState((prev) => {
//       return !prev;
//     });
//   };
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <div>
//       <AppBar position="static" className="navbar__container">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LOGO
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 // onClick={handleOpenNavMenu}
//                 onClick={toggleDrawer}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer anchor={"left"} open={drawerState} onClose={toggleDrawer}>
//                 <div className="drawer__container">
//                   {pages.map((page) => (
//                     <Button
//                     key={page.name}
//                     onClick={toggleDrawer}
//                     className={
//                       pathname == `/${page.path}`
//                         ? "active"
//                         : "" || pathname == `${page.path}`
//                         ? "active"
//                         : ""
//                     }>
//                       <Link href={page.path} className="navbar__navLink">

//                           {page.name}

//                       </Link>
//                     </Button>
//                   ))}
//                 </div>
//               </Drawer>
//             </Box>
//             <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href=""
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LOGO
//             </Typography>
//             <Box
//               sx={{
//                 flexGrow: 1,
//                 display: { xs: "none", md: "flex", justifyContent: "flex-end" },
//               }}
//             >
//               {pages.map((page) => (
//                 <Button
//                   key={page.name}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                   className={
//                       pathname == `/${page.path}`
//                         ? "active"
//                         : "" || pathname == `${page.path}`
//                         ? "active"
//                         : ""
//                     }
//                 >
//                     <Link href={page.path} className="navbar__navLink">
//                       {page.name}
//                     </Link>
//                 </Button>
//               ))}
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </div>
//   );
// };

// export default Navbar;

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const pathname = usePathname();
  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "About" },
    { name: "Works", path: "Works" },
    { name: "Contact", path: "Contact" },
  ];
  return (
    <header>
      <h3>LOGO</h3>
      <nav ref={navRef}>
        <div className="drawer__container">
          {pages.map((page) => (
            <div
              key={page.name}
              className={
                pathname == `/${page.path}`
                  ? "active"
                  : "" || pathname == `${page.path}`
                  ? "active"
                  : ""
              }
            >
              <Link href={page.path} className="navbar__navLink">
                {page.name}
              </Link>
            </div>
          ))}
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
