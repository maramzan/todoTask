import React from "react";
import Landing from "../components/landing";
import { makeStyles } from "@mui/styles";


export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Landing />
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
}));
