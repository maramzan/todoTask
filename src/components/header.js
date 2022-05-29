import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ background: "none", justifyContent: "center" }}>
      <Toolbar sx={{ flexWrap: "wrap", width: "80%", margin: "0 auto" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          My Todo
        </Typography>
        <Link href="/login">
          <Button href="/login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
