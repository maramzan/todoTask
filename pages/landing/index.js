import { AppBar, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles"
import SortIcon from '@mui/icons-material/Sort';
import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
      },
      appbar: {
        background: 'none',
      },
      appbarWrapper: {
        width: '80%',
        margin: '0 auto',
      },
      appbarTitle: {
        flexGrow: '1',
      },
      icon: {
        color: '#fff',
        fontSize: '2rem',
      },
      colorText: {
        color: '#162328',
      },
      container: {
        textAlign: 'center',
      },
      title: {
        color: '#fff',
        fontSize: '4.5rem',
      },
      goDown: {
        color: '#5AFF3D',
        fontSize: '4rem',
      },
}))

const Landing = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className={classes.root} id="header">
    <AppBar className={classes.appbar} elevation={0}>
      <Toolbar className={classes.appbarWrapper}>
        <h1 className={classes.appbarTitle}>
          My<span className={classes.colorText}>Todo.</span>
        </h1>
        <IconButton>
          <SortIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
    
        <div data-aos="fade-down" className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My<span className={classes.colorText}>Todo.</span>
          </h1>
        </div>

    
  </div>
  )
}

export default Landing