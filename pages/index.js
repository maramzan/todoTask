import React from "react";
import Landing from "../components/landing";
import { makeStyles } from "@mui/styles";


export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>

      <Landing />
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: 'url(/bgHome.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    minHeight: "100vh"
  },
  container: {
    
    backgroundColor:'rgba(0,0,0,0.3)',
    minHeight: "100vh",
    paddingLeft: 25, 
    paddingRight: 25

  }
}));
