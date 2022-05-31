import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import { makeStyles } from "@mui/styles";
import Header from '../header'

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


  useEffect(() => {
    Aos.init({ duration: 2000 });
    loguser();
  }, []);
  const classes = useStyles();


  return (
    <React.Fragment>
      <CssBaseline />
      <Header isLanding />
      <Container data-aos="fade-down" disableGutters maxWidth="sm" component="main" className={classes.testWrapper}>
        <div>
        <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom sx={{color:'white'}}>
          Welcome
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p" sx={{color:'white'}}>
          Welcome to the task assigned by Persue Today.
        </Typography>
        </div>
      </Container>
    </React.Fragment>
  );
}



const useStyles = makeStyles((theme) => ({
  testWrapper: {
    display: "flex",
    flex: 1,
    height:' calc(100vh - 100px)',
    justifyContent:'center',
    alignItems:'center',
    
  }
 
}));

export default Landing;

