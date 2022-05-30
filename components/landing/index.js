import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../../src/components/header";
import { useRouter } from "next/router";

function Landing() {
  const [jwt, setJwt] = React.useState("");
  const router = useRouter();

  const loguser = async () => {
    const res = await fetch("http://localhost:3000/api/users/login");
    const { data, id } = await res.json();

    if (data == "JWT Success") {
      setJwt(id);
    }
  };

  const gotoHomepage = () => {
    loguser();
    if (jwt) {
      router.push("/homepage");
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    loguser();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header isLanding />
      <Container data-aos="fade-down" disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Welcome to the todo task assigned by Persue Today.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default Landing;
