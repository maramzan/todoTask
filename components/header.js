import { AppBar, Button, CircularProgress, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useLogout from "../hooks/useLogout";

const Header = ({ isLanding }) => {
  const { handleSignOut, loading } = useLogout();
  const router = useRouter();

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ background: "none", justifyContent: "center" }}>
      <Toolbar sx={{ flexWrap: "wrap", width: "80%", margin: "0 auto" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, ml: 2 }}>
          My Task
        </Typography>
        {isLanding ? (
          <Button variant="outlined" onClick={() => router.push("/login")} sx={{ my: 1, mx: 1.5 }}>
            Sign In
          </Button>
        ) : (
          <Button variant="outlined" onClick={handleSignOut} sx={{ my: 1, mx: 1.5 }}>
            {loading ? <CircularProgress size={25} color="inherit" /> : "Logout"}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
