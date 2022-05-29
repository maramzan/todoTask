import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { ArrowBack } from "@mui/icons-material";

const Header = ({ showSignIN, auth }) => {
  const [jwt, setJwt] = useState("");
  const router = useRouter();

  const handleSignout = async () => {
    const res = await fetch("http://localhost:3000/api/users/logout");
    const { data } = await res.json();
    setJwt("");
    router.push("/login");
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ background: "none", justifyContent: "center" }}>
      <Toolbar sx={{ flexWrap: "wrap", width: "80%", margin: "0 auto" }}>
        {/* {auth ? (
          <IconButton onClick={() => router.back()}>
            <ArrowBack />
          </IconButton>
        ) : null} */}

        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1, ml: 2 }}>
          My Todo
        </Typography>
        {showSignIN ? (
          <Link href="/login">
            <Button variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button>
          </Link>
        ) : (
          <Button variant="outlined" onClick={handleSignout} sx={{ my: 1, mx: 1.5 }}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
